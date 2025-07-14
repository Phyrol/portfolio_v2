import BulletListItem from "common/components/BulletListItem";
import SkillsList from "common/components/SkillsList";
import {Framework, Language, Library, RuntimeEnv, Tool} from "common/constants";

interface WorkInfo {
    company: string;
    position: string;
    link: string;
    dateRange: string;
    responsibilities: string[];
    skills: string[];
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
        skills: [
            Language.JAVASCRIPT,
            Language.TYPESCRIPT,
            Framework.REACT,
            Library.REDUX,
            Library.GRAPHQL,
            Language.SQL,
            Language.CSS,
            Language.PYTHON,
            RuntimeEnv.NODE_JS,
            Tool.CYPRESS,
        ],
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
        skills: [Language.JAVASCRIPT, Language.C_SHARP, Language.HTML, Framework.ASP_NET],
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
        skills: [Language.C_SHARP, Tool.UNITY],
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
        skills: [],
    },
];

const Work = () => {
    return (
        <section>
            <h2>Work</h2>

            {WORK_HISTORY.map(({company, position, link, dateRange, responsibilities, skills}) => (
                <div key={company} className="mb-1 space-y-1 rounded-4xl p-4 hover:bg-red-500/20">
                    <h3 className="inline text-2xl">
                        {position}
                        <a href={link} target={"_blank"} rel="noreferrer" className="relative inline-block">
                            &nbsp;@&nbsp;
                            {company}
                        </a>
                    </h3>

                    <p>{dateRange}</p>

                    <ul className="space-y-0.5">
                        {responsibilities.map((responsibility, index) => (
                            <BulletListItem key={`detail-${index}`}>
                                <p>{responsibility}</p>
                            </BulletListItem>
                        ))}
                    </ul>

                    <SkillsList skills={skills} />
                </div>
            ))}
        </section>
    );
};

export default Work;
