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
                <div key={`skill-${index}`} className="bg-red-rojo/30 mt-4 rounded-2xl px-2 py-1 shadow-lg/30 ring-2 ring-red-500/60">
                    <p className="text-anti-flash-white text-sm">{skill}</p>
                </div>
            ))}
        </div>
    );
};

export default SkillsList;
