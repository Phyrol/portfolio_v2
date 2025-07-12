import AEGIS_INITIATIVE from "../../../assets/projects/AEGIS_INITIATIVE.png";
import MY_LITTLE_DARK_LORD from "../../../assets/projects/MY_LITTLE_DARK_LORD.png";
import NIGHT_IN_THE_WOODS from "../../../assets/projects/NIGHT_IN_THE_WOODS.png";
import ADVENTURE_TIME from "../../../assets/projects/ADVENTURE_TIME.png";
import LUNCHBOX from "../../../assets/projects/LUNCHBOX.png";
import HYPER_LOOP from "../../../assets/projects/HYPER_LOOP.png";
import THE_BLOB from "../../../assets/projects/THE_BLOB.png";
import WRONG_TURN from "../../../assets/projects/WRONG_TURN.png";
import CYBOB from "../../../assets/projects/CYBOB.png";

interface ProjectInfo {
    title: string;
    shippedDate: Date;
    teamSize: number;
    position: string;
    platform: string;
    genre: string;
    githubLink: string;
    downloadLink: string;
    skills: string[];
    thumbnailImage: string;
}

// TODO: Add thumbnails
const PROJECT_INFO: ProjectInfo[] = [
    {
        title: "Aegis Initiative",
        skills: ["Unity", "C#"],
        shippedDate: new Date("11/18/2021"),
        teamSize: 20,
        platform: "PC",
        position: "Systems Producer/Engineer, worked on enemy movement, etc",
        genre: "Shooter",
        githubLink: "https://github.com/GDCASU/Firefox",
        downloadLink: "https://heatwave-studios.itch.io/aegis-initiative",
        thumbnailImage: AEGIS_INITIATIVE,
    },
    {
        title: "My Little Dark Lord",
        skills: ["Unity", "C#"],
        shippedDate: new Date("11/30/2019"),
        teamSize: 4,
        platform: "PC",
        position: "Gameplay engineer, focused on combat, enemy AI, and connecting different Unity Store assets",
        genre: "Action RPG",
        githubLink: "https://github.com/MrSquakie/My-Little-Dark-Lord",
        downloadLink: "https://phyrol.itch.io/my-little-dark-lord",
        thumbnailImage: MY_LITTLE_DARK_LORD,
    },
    {
        title: "Night in the Woods",
        skills: ["Unity", "C#"],
        shippedDate: new Date("01/27/2020"),
        teamSize: 3,
        platform: "PC",
        position: "Team Lead/Gameplay Engineer, worked on the player, enemy AI, sound, and level details",
        genre: "Shooter",
        githubLink: "https://github.com/Phyrol/Night-in-the-Woods",
        downloadLink: "https://phyrol.itch.io/night-in-the-woods",
        thumbnailImage: NIGHT_IN_THE_WOODS,
    },
    {
        title: "Adventure Tim(e)",
        skills: ["GameMaker Studio 2", "GML"],
        shippedDate: new Date("10/30/2019"),
        teamSize: 1,
        platform: "PC",
        position: "Sole creator",
        genre: "Action",
        githubLink: "https://github.com/Phyrol/Adventure_Tim-e-",
        downloadLink: "https://phyrol.itch.io/adventure-time",
        thumbnailImage: ADVENTURE_TIME,
    },
    {
        title: "Lunchbox",
        skills: ["Unity", "C#"],
        shippedDate: new Date("07/20/2021"),
        teamSize: 4,
        platform: "PC",
        position: "Gameplay Engineer, created main menu and helped with ship physics for floating on water with waves",
        genre: "Adventure",
        githubLink: "https://github.com/Doughboy02/Lunchbox",
        downloadLink: "https://phyrol.itch.io/lunchbox",
        thumbnailImage: LUNCHBOX,
    },
    {
        title: "HyperLoop",
        skills: ["Unity", "C#"],
        shippedDate: new Date("10/05/2020"),
        teamSize: 5,
        platform: "PC",
        position: "Gameplay Engineer, created power-ups and traps for the player as well as the main/pause menus",
        genre: "Platformer",
        githubLink: "https://github.com/cdgonz115/LudumDare47_Speed3.0",
        downloadLink: "https://cg115.itch.io/hyperloop",
        thumbnailImage: HYPER_LOOP,
    },
    {
        title: "The Blob",
        skills: ["Unity", "C#"],
        shippedDate: new Date("11/20/2019"),
        teamSize: 2,
        platform: "PC",
        position: "Gameplay Engineer, created moving obstacles and the general gameplay loop of collecting gems before the timer runs out",
        genre: "Platformer",
        githubLink: "https://github.com/MrSquakie/The-blob",
        downloadLink: "https://phyrol.itch.io/the-blob",
        thumbnailImage: THE_BLOB,
    },
    {
        title: "Wrong Turn",
        skills: ["Unity", "C#"],
        shippedDate: new Date("01/27/2020"),
        teamSize: 3,
        platform: "PC",
        position: "Team Lead/Gameplay Engineer, worked on enemy AI, player health system, level creation, and animations",
        genre: "Survival",
        githubLink: "https://github.com/Phyrol/Wrong-Turn",
        downloadLink: "https://phyrol.itch.io/wrong-turn",
        thumbnailImage: WRONG_TURN,
    },
    {
        title: "CyBob",
        skills: ["Unity", "C#"],
        shippedDate: new Date("02/05/2020"),
        teamSize: 3,
        platform: "PC",
        position: "Gameplay Engineer, created the enemy guard patrol/detection system, interactable objects, and shooting",
        genre: "Action RPG",
        githubLink: "https://github.com/cdgonz115/Cybob",
        downloadLink: "https://phyrol.itch.io/cybob",
        thumbnailImage: CYBOB,
    },
];

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>

            {PROJECT_INFO.map(
                ({title, skills, shippedDate, teamSize, platform, position, genre, githubLink, downloadLink, thumbnailImage}) => (
                    <div key={title}>
                        <h2>{title}</h2>
                        <h5>{shippedDate.toString()}</h5>
                        <ul>
                            <li>{position}</li>
                            <li>{teamSize}</li>
                            <li>{genre}</li>
                            <li>{platform}</li>
                            <li className="space-x-4">
                                {skills.map((skill, index) => (
                                    <span key={`${title}-skill-${index}`}>{skill}</span>
                                ))}
                            </li>
                        </ul>
                        <div className="flex space-x-4">
                            <a href={githubLink} target={"_blank"} rel="noreferrer">
                                Github
                            </a>
                            <a href={downloadLink} target={"_blank"} rel="noreferrer">
                                Download
                            </a>
                        </div>
                        <div className="origin-center skew-x-6">
                            <img src={thumbnailImage} className="rounded-4xl" />
                        </div>
                    </div>
                )
            )}
        </section>
    );
};

export default Projects;
