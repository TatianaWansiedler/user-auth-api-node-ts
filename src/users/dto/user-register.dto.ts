import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Invalid email' })
	email: string;

	@IsString({ message: 'Password ist not provided' })
	password: string;

	@IsString({ message: 'Name ist not provided' })
	name: string;
}
