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
import TiltElement from "../../../common/components/TiltElement";
import {GITHUB_PROFILE_LINK, ITCHIO_PROFILE_LINK, Language, Tool} from "common/constants";

enum DetailKey {
    SHIPPED_DATE = "shippedDate",
    POSITION = "position",
    TEAM_SIZE = "teamSize",
    GENRE = "genre",
    PLATFORM = "platform",
}

type Details = {
    [K in DetailKey]: string;
};

const DETAIL_KEY_TO_PREFIX_MAP: {[key in DetailKey]: string} = {
    [DetailKey.SHIPPED_DATE]: "Shipped:",
    [DetailKey.POSITION]: "Position:",
    [DetailKey.TEAM_SIZE]: "Team Size:",
    [DetailKey.GENRE]: "Genre:",
    [DetailKey.PLATFORM]: "Platform:",
};

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
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "11/18/2021",
            [DetailKey.POSITION]: "Lead Systems Engineer, mentored and directed systems team, worked on enemy movement",
            [DetailKey.TEAM_SIZE]: "20",
            [DetailKey.GENRE]: "Shooter",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: "https://github.com/GDCASU/Firefox",
        downloadLink: "https://heatwave-studios.itch.io/aegis-initiative",
        thumbnailImage: AEGIS_INITIATIVE,
    },
    {
        title: "My Little Dark Lord",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "11/30/2019",
            [DetailKey.POSITION]: "Gameplay engineer, focused on combat, enemy AI, and connecting various Unity Store assets",
            [DetailKey.TEAM_SIZE]: "4",
            [DetailKey.GENRE]: "Action RPG",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: "https://github.com/MrSquakie/My-Little-Dark-Lord",
        downloadLink: `${ITCHIO_PROFILE_LINK}/my-little-dark-lord`,
        thumbnailImage: MY_LITTLE_DARK_LORD,
    },
    {
        title: "Night in the Woods",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "01/27/2020",
            [DetailKey.POSITION]: "Team Lead/Gameplay Engineer, worked on the player, enemy AI, sound, and level details",
            [DetailKey.TEAM_SIZE]: "3",
            [DetailKey.GENRE]: "Shooter",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: `${GITHUB_PROFILE_LINK}/Night-in-the-Woods`,
        downloadLink: `${ITCHIO_PROFILE_LINK}/night-in-the-woods`,
        thumbnailImage: NIGHT_IN_THE_WOODS,
    },
    {
        title: "Adventure Tim(e)",
        skills: [Language.GML, Tool.GM_STUDIO_2],
        details: {
            [DetailKey.SHIPPED_DATE]: "10/30/2019",
            [DetailKey.POSITION]: "Sole creator",
            [DetailKey.TEAM_SIZE]: "1",
            [DetailKey.GENRE]: "Action",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: `${GITHUB_PROFILE_LINK}/Adventure_Tim-e-`,
        downloadLink: `${ITCHIO_PROFILE_LINK}/adventure-time`,
        thumbnailImage: ADVENTURE_TIME,
    },
    {
        title: "Lunchbox",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "07/20/2021",
            [DetailKey.POSITION]: "Gameplay Engineer, created main menu and helped with ship physics for floating on water with waves",
            [DetailKey.TEAM_SIZE]: "4",
            [DetailKey.GENRE]: "Adventure",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: "https://github.com/Doughboy02/Lunchbox",
        downloadLink: `${ITCHIO_PROFILE_LINK}/lunchbox`,
        thumbnailImage: LUNCHBOX,
    },
    {
        title: "HyperLoop",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "10/05/2020",
            [DetailKey.POSITION]: "Gameplay Engineer, created power-ups and traps for the player as well as the main/pause menus",
            [DetailKey.TEAM_SIZE]: "5",
            [DetailKey.GENRE]: "Platformer",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: "https://github.com/cdgonz115/LudumDare47_Speed3.0",
        downloadLink: "https://cg115.itch.io/hyperloop",
        thumbnailImage: HYPER_LOOP,
    },
    {
        title: "The Blob",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "11/20/2019",
            [DetailKey.POSITION]:
                "Gameplay Engineer, created moving obstacles and the general gameplay loop of collecting gems before the timer runs out",
            [DetailKey.TEAM_SIZE]: "2",
            [DetailKey.GENRE]: "Platformer",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: "https://github.com/MrSquakie/The-blob",
        downloadLink: `${ITCHIO_PROFILE_LINK}/the-blob`,
        thumbnailImage: THE_BLOB,
    },
    {
        title: "Wrong Turn",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "01/27/2020",
            [DetailKey.POSITION]: "Team Lead/Gameplay Engineer, worked on enemy AI, player health system, level creation, and animations",
            [DetailKey.TEAM_SIZE]: "3",
            [DetailKey.GENRE]: "Survival",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: `${GITHUB_PROFILE_LINK}/Wrong-Turn`,
        downloadLink: `${ITCHIO_PROFILE_LINK}/wrong-turn`,
        thumbnailImage: WRONG_TURN,
    },
    {
        title: "CyBob",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "02/05/2020",
            [DetailKey.POSITION]: "Gameplay Engineer, created the enemy guard patrol/detection system, interactable objects, and shooting",
            [DetailKey.TEAM_SIZE]: "3",
            [DetailKey.GENRE]: "Action RPG",
            [DetailKey.PLATFORM]: "PC",
        },
        githubLink: "https://github.com/cdgonz115/Cybob",
        downloadLink: `${ITCHIO_PROFILE_LINK}/cybob`,
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
                        <TiltElement enableGlare>
                            <a href={downloadLink} target={"_blank"} rel="noreferrer">
                                <img src={thumbnailImage} alt={`${title} thumbnail`} className="block h-auto w-full rounded-3xl" />
                            </a>
                        </TiltElement>
                    </div>
                    <div className="col-start-5 col-end-12">
                        <h2 className="mb-4">{title}</h2>

                        <DetailsList
                            details={Object.entries(details).map(
                                ([key, detail]) => `${DETAIL_KEY_TO_PREFIX_MAP[key as DetailKey]} ${detail}`
                            )}
                        />

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
