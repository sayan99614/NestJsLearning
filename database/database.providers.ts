import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM, DEVELOPMENT, TEST, PRODUCTION } from './constants';
import { databaseConfig } from './db.config';
import { User } from 'src/modules/user/user.entity';

export const databaseProviders = [
  {
    provide: TYPEORM,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const typeorm = TypeOrmModule.forRoot({
        ...config,
        name: 'training-portal',
        entities: [User],
      });

      return typeorm;
    },
  },
];
