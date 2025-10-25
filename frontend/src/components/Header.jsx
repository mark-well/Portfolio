
function Header() {
    return (
        <header className="text-base min-h-16 flex items-center w-full text-[var(--text-color)]">
            <nav className="w-full">
                <ul className="flex items-center justify-center gap-12">
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </nav>
        </header>
    );
}

export default Header