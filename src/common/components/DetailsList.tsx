import BulletListItem from "./BulletListItem";

export interface DetailsListProps {
    details: string[];
}

const DetailsList = ({details}: DetailsListProps) => {
    return (
        <ul className="space-y-0.5">
            {details.map((detail, index) => (
                <BulletListItem key={`detail-${index}`}>
                    <p>{detail}</p>
                </BulletListItem>
            ))}
        </ul>
    );
};

export default DetailsList;
