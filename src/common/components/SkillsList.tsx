export interface PillProps {
    skills: string[];
}

const SkillsList = ({skills}: PillProps) => {
    if (!skills.length) {
        return null;
    }

    return (
        <div className="flex flex-wrap space-x-4">
            {skills.map((skill, index) => (
                <p
                    key={`skill-${index}`}
                    className="bg-red-rojo/50 text-anti-flash-white mt-4 rounded-2xl px-4 py-1 shadow-lg/30 ring-2 ring-red-500"
                >
                    {skill}
                </p>
            ))}
        </div>
    );
};

export default SkillsList;
