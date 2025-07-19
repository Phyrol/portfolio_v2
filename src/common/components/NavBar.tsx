interface NavBarProps {
    ids: string[];
}

const NavBar = ({ids}: NavBarProps) => {
    return (
        <ol>
            {ids.map(id => (
                <li key={id} className="hover:text-red-pantone">
                    <a href={`#${id}`}>{id}</a>
                </li>
            ))}
        </ol>
    );
};

export default NavBar;
