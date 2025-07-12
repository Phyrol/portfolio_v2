interface WorkInfo {
    company: string;
    position: string;
    link: string;
    dateRange: string;
    responsibilities: string[];
    skills?: string[];
}

const WORK_HISTORY: WorkInfo[] = [
    {
        company: "Amazon Web Services (AWS)",
        position: "Frontend Engineer II (promoted from L4) – SageMaker JumpStart & Fault Injection Service Console",
        link: "https://aws.amazon.com/",
        dateRange: "2022 - Present",
        responsibilities: [
            "Created a Python-based HuggingFace URL validator with multi-threading and caching to reduce manual updates and metadata errors.",
            "Built a CloudWatch-style log viewer in the training job UI with polling, search, and efficient rendering.",
            "Developed an integration test client to dynamically fetch region-available models; coordinated SDK compatibility updates across 5+ teams.",
            "Proposed and implemented a React-Hook-Form refactor for the core FIS Console form to improve maintainability.",
            "Took over and delivered a key feature (Safety Lever) and completed ORR, F&F, MCM, and final UX approvals for an on-time launch.",
            "Designed and led ESLint migration across the FIS Console package, replacing deprecated TSLint and enforcing standards through CR linting.",
        ],
        skills: ["JavaScript", "TypeScript", "React", "Redux", "Node.js", "GraphQL", "SQL", "CSS", "Python"],
    },
    {
        company: "Garmin - AeroData",
        position: "Software Engineer Intern",
        link: "https://www.aerodata.co/en-US/",
        dateRange: "2021",
        responsibilities: [
            "Used ASP.NET Core MVC to develop a web application to exercise the functionality in an existing library that is currently utilized by a console application.",
            "Utilized NuGet packages, JSON serialization/deserialization, and EF Core database access.",
            "Extended functionality of current enterprise logging that utilizes Log4Net by modifying the existing library to use a TCP connection with serialization/deserialization to log events.",
            "Followed agile development with daily stand-up meetings to discuss sprint tasks and roadblocks.",
        ],
        skills: ["JavaScript", "C#", "HTML", "ASP.NET"],
    },
    {
        company: "Heatwave Studio",
        position: "Systems Engineer",
        link: "https://heatwave-studios.itch.io/",
        dateRange: "2019 - 2022",
        responsibilities: [
            "Followed agile development standards, fixed bugs during development and in production.",
            "Worked with design, sound, and art teams across the studio to ensure successful design and implementation of core game mechanics.",
            "Communicated effectively to game directors during agile planning meetings.",
            "Coordinated with other engineers to implement desired game mechanics efficiently.",
        ],
        skills: ["C#", "Unity"],
    },
    {
        company: "Mesa Public Schools",
        position: "IT Intern",
        link: "https://www.mpsaz.org/",
        dateRange: "2016 - 2018",
        responsibilities: [
            "Worked with peers to diagnose and repair laptops and projectors.",
            "Researched challenging issues to find a satisfactory solution.",
            "Excelled in effective and positive communication with faculty to resolve technical issues.",
            "Exhibited time management to complete project requirements.",
        ],
    },
];

const Work = () => {
    return (
        <section>
            {WORK_HISTORY.map(({company, position, link, dateRange, responsibilities, skills}) => {
                return (
                    <div>
                        <h1>{company}</h1>
                        <h2>{position}</h2>
                        <a href={link} />
                        <h4>{dateRange}</h4>
                        <div>
                            {responsibilities.map(responsibility => (
                                <p>{responsibility}</p>
                            ))}
                        </div>
                        {skills && (
                            <div>
                                {skills.map(skill => (
                                    <span>{skill}</span>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default Work;
