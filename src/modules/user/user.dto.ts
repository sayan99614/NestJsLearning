export class UserDto {
  name: string;
  email: string;
  password: string;
  address: string;
  photos?: [
    {
      imageUrl: string;
    },
  ];
}
