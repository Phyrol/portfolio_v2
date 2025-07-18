interface NavBarProps {
    ids: string[];
}

const NavBar = ({ids}: NavBarProps) => {
    return (
        <ol>
            {ids.map(id => (
                <li key={id} className="delay-100">
                    <a href={`#${id}`}>{id}</a>
                </li>
            ))}
        </ol>
    );
};

export default NavBar;
