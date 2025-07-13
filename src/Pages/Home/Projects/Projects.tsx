import AEGIS_INITIATIVE from "assets/projects/AEGIS_INITIATIVE.png";
import MY_LITTLE_DARK_LORD from "assets/projects/MY_LITTLE_DARK_LORD.png";
import NIGHT_IN_THE_WOODS from "assets/projects/NIGHT_IN_THE_WOODS.png";
import ADVENTURE_TIME from "assets/projects/ADVENTURE_TIME.png";
import LUNCHBOX from "assets/projects/LUNCHBOX.png";
import HYPER_LOOP from "assets/projects/HYPER_LOOP.png";
import THE_BLOB from "assets/projects/THE_BLOB.png";
import WRONG_TURN from "assets/projects/WRONG_TURN.png";
import CYBOB from "assets/projects/CYBOB.png";
import SkillsList from "common/components/SkillsList";
import DetailsList from "common/components/DetailsList";

export interface Details {
    shippedDate: string;
    position: string;
    teamSize: number;
    genre: string;
    platform: string;
}

interface ProjectInfo {
    title: string;
    details: Details;
    skills: string[];
    thumbnailImage: string;
    githubLink: string;
    downloadLink: string;
}

const PROJECT_INFO: ProjectInfo[] = [
    {
        title: "Aegis Initiative",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "11/18/2021",
            position: "Systems Producer/Engineer, worked on enemy movement, etc",
            teamSize: 20,
            genre: "Shooter",
            platform: "PC",
        },
        githubLink: "https://github.com/GDCASU/Firefox",
        downloadLink: "https://heatwave-studios.itch.io/aegis-initiative",
        thumbnailImage: AEGIS_INITIATIVE,
    },
    {
        title: "My Little Dark Lord",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "11/30/2019",
            position: "Gameplay engineer, focused on combat, enemy AI, and connecting different Unity Store assets",
            teamSize: 4,
            genre: "Action RPG",
            platform: "PC",
        },
        githubLink: "https://github.com/MrSquakie/My-Little-Dark-Lord",
        downloadLink: "https://phyrol.itch.io/my-little-dark-lord",
        thumbnailImage: MY_LITTLE_DARK_LORD,
    },
    {
        title: "Night in the Woods",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "01/27/2020",
            position: "Team Lead/Gameplay Engineer, worked on the player, enemy AI, sound, and level details",
            teamSize: 3,
            genre: "Shooter",
            platform: "PC",
        },
        githubLink: "https://github.com/Phyrol/Night-in-the-Woods",
        downloadLink: "https://phyrol.itch.io/night-in-the-woods",
        thumbnailImage: NIGHT_IN_THE_WOODS,
    },
    {
        title: "Adventure Tim(e)",
        skills: ["GameMaker Studio 2", "GML"],
        details: {
            shippedDate: "10/30/2019",
            position: "Sole creator",
            teamSize: 1,
            genre: "Action",
            platform: "PC",
        },
        githubLink: "https://github.com/Phyrol/Adventure_Tim-e-",
        downloadLink: "https://phyrol.itch.io/adventure-time",
        thumbnailImage: ADVENTURE_TIME,
    },
    {
        title: "Lunchbox",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "07/20/2021",
            position: "Gameplay Engineer, created main menu and helped with ship physics for floating on water with waves",
            teamSize: 4,
            genre: "Adventure",
            platform: "PC",
        },
        githubLink: "https://github.com/Doughboy02/Lunchbox",
        downloadLink: "https://phyrol.itch.io/lunchbox",
        thumbnailImage: LUNCHBOX,
    },
    {
        title: "HyperLoop",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "10/05/2020",
            position: "Gameplay Engineer, created power-ups and traps for the player as well as the main/pause menus",
            teamSize: 5,
            genre: "Platformer",
            platform: "PC",
        },
        githubLink: "https://github.com/cdgonz115/LudumDare47_Speed3.0",
        downloadLink: "https://cg115.itch.io/hyperloop",
        thumbnailImage: HYPER_LOOP,
    },
    {
        title: "The Blob",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "11/20/2019",
            position:
                "Gameplay Engineer, created moving obstacles and the general gameplay loop of collecting gems before the timer runs out",
            teamSize: 2,
            genre: "Platformer",
            platform: "PC",
        },
        githubLink: "https://github.com/MrSquakie/The-blob",
        downloadLink: "https://phyrol.itch.io/the-blob",
        thumbnailImage: THE_BLOB,
    },
    {
        title: "Wrong Turn",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "01/27/2020",
            position: "Team Lead/Gameplay Engineer, worked on enemy AI, player health system, level creation, and animations",
            teamSize: 3,
            genre: "Survival",
            platform: "PC",
        },
        githubLink: "https://github.com/Phyrol/Wrong-Turn",
        downloadLink: "https://phyrol.itch.io/wrong-turn",
        thumbnailImage: WRONG_TURN,
    },
    {
        title: "CyBob",
        skills: ["Unity", "C#"],
        details: {
            shippedDate: "02/05/2020",
            position: "Gameplay Engineer, created the enemy guard patrol/detection system, interactable objects, and shooting",
            teamSize: 3,
            genre: "Action RPG",
            platform: "PC",
        },
        githubLink: "https://github.com/cdgonz115/Cybob",
        downloadLink: "https://phyrol.itch.io/cybob",
        thumbnailImage: CYBOB,
    },
];

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>

            {PROJECT_INFO.map(({title, skills, details, githubLink, downloadLink, thumbnailImage}) => (
                <div key={title} className="grid grid-cols-[repeat(12,1fr)] gap-4">
                    <div className="col-start-1 col-end-5">
                        <div className="origin-center -skew-y-6">
                            <img src={thumbnailImage} className="rounded-4xl" />
                        </div>
                    </div>
                    <div className="col-start-5 col-end-12">
                        <h2 className="mb-4">{title}</h2>

                        <DetailsList details={Object.values(details)} />

                        <SkillsList skills={skills} />

                        <div className="flex space-x-4">
                            <a href={githubLink} target={"_blank"} rel="noreferrer">
                                Github
                            </a>
                            <a href={downloadLink} target={"_blank"} rel="noreferrer">
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projects;
