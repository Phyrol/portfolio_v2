interface BulletListItemProps {
    children: React.ReactNode;
    bullet?: string;
}

const BulletListItem = ({children, bullet = "▹"}: BulletListItemProps) => (
    <li className="text-cadet-gray relative flex">
        <span className="text-red-rojo mr-1">{bullet}</span>
        {children}
    </li>
);

export default BulletListItem;
