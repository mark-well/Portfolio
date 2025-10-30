
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="text-base min-h-16 flex items-center w-full text-[var(--text-color)]">
            <nav className="w-full">
                <ul className="navigation-default flex items-center justify-center gap-12 max-md:gap-8">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header