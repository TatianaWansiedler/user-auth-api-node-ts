import { injectable } from 'inversify';
import { UserRegisterDto } from './dto/use-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { User } from './use.entity';
import { IUserService } from './user.service.interface';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		return null;
	}
	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true;
	}
}
