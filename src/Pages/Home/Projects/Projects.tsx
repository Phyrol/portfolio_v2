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
        thumbnailImage: "",
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
        thumbnailImage: "",
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
        thumbnailImage: "",
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
        thumbnailImage: "",
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
        thumbnailImage: "",
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
        thumbnailImage: "",
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
        thumbnailImage: "",
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
        thumbnailImage: "",
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
        thumbnailImage: "",
    },
];

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>

            {PROJECT_INFO.map(
                ({title, skills, shippedDate, teamSize, platform, position, genre, githubLink, downloadLink, thumbnailImage}) => (
                    <div>
                        <h2>{title}</h2>
                        <h5>{shippedDate.toString()}</h5>
                        <ul>
                            <li>{position}</li>
                            <li>{teamSize}</li>
                            <li>{genre}</li>
                            <li>{platform}</li>
                            <li>
                                {skills.map(skill => (
                                    <span>{skill}</span>
                                ))}
                            </li>
                            <a href={githubLink} target={"_blank"} rel="noreferrer">
                                Github
                            </a>
                            <a href={downloadLink} target={"_blank"} rel="noreferrer">
                                Download
                            </a>
                            <img src={thumbnailImage} />
                        </ul>
                    </div>
                )
            )}
        </section>
    );
};

export default Projects;
