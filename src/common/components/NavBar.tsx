interface NavBarProps {
    ids: string[];
    className?: string;
}

const NavBar = ({ids, className = ""}: NavBarProps) => {
    return (
        <ol className={className}>
            {ids.map(id => (
                <li>
                    <a href={`#${id}`} className="group relative">
                        <span className="group-hover:text-anti-flash-white duration-200">{id}</span>
                        <span className="bg-red-rojo absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full" />
                    </a>
                </li>
            ))}
        </ol>
    );
};

export default NavBar;
