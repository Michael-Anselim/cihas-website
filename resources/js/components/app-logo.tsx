import logo from '../images/logo.png';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function AppLogo() {
    return (
        <div className="flex items-center">
            <Avatar>
                <AvatarImage src={logo} alt="CIHAS" />
                <AvatarFallback>CIHAS</AvatarFallback>
            </Avatar>
            <div className="ml-1 grid flex-1 text-left text-sm md:text-lg lg:text-2xl">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    CHARLOTTE IHAS
                </span>
            </div>
        </div>
    );
}
