import { UserRegisterDto } from './dto/use-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { User } from './use.entity';

export interface IUserService {
	createUser: (dto: UserRegisterDto) => Promise<User | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
