export interface DetailsListProps {
    details: string[];
}

const DetailsList = ({details}: DetailsListProps) => {
    return (
        <ul className="space-y-2">
            {details.map((detail, index) => (
                <li key={`detail-${index}`} className="flex">
                    <p>{detail}</p>
                </li>
            ))}
        </ul>
    );
};

export default DetailsList;
