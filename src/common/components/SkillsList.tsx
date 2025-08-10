export interface SkillsListProps {
    skills: string[];
}

const SkillsList = ({skills}: SkillsListProps) => {
    if (!skills.length) {
        return null;
    }

    return (
        <div data-testid="skills-list" className="flex flex-wrap space-x-3">
            {skills.map((skill, index) => (
                <div key={`skill-${index}`} className="bg-red-rojo/15 mt-4 rounded-2xl px-2 py-1 shadow-sm/30 ring-1 ring-red-500/30">
                    <p className="text-red-pantone text-sm">{skill}</p>
                </div>
            ))}
        </div>
    );
};

export default SkillsList;
