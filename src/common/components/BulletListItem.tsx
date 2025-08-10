import {PropsWithChildren} from "react";

interface BulletListItemProps {
    bullet?: string;
}

const BulletListItem = ({children, bullet = "▹"}: PropsWithChildren<BulletListItemProps>) => (
    <li className="text-cadet-gray relative flex">
        <span className="text-red-rojo mr-1">{bullet}</span>
        {children}
    </li>
);

export default BulletListItem;
