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
import TiltElement from "../../../../common/components/TiltElement";
import {ITCHIO_PROFILE_LINK, Language, SMALL_SCREEN_MEDIA_QUERY, Tool} from "common/constants";
import BulletListItem from "common/components/BulletListItem";
import {useMediaQuery} from "common/utils";
import {HomePageSection} from "pages/Home/Home";

enum DetailKey {
    SHIPPED_DATE = "shippedDate",
    TEAM_SIZE = "teamSize",
    GENRE = "genre",
    PLATFORM = "platform",
}

const DETAIL_KEY_TO_PREFIX_MAP: {[key in DetailKey]: string} = {
    [DetailKey.SHIPPED_DATE]: "Shipped:",
    [DetailKey.TEAM_SIZE]: "Team Size:",
    [DetailKey.GENRE]: "Genre:",
    [DetailKey.PLATFORM]: "Platform:",
};

type Details = {
    [K in DetailKey]: string;
};

interface ProjectInfo {
    title: string;
    details: Details;
    position: string;
    skills: string[];
    thumbnailImage: string;
    downloadLink: string;
}

const PROJECT_INFO: ProjectInfo[] = [
    {
        title: "Aegis Initiative",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2021",
            [DetailKey.TEAM_SIZE]: "20",
            [DetailKey.GENRE]: "Shooter",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Lead Systems Engineer, mentored and directed systems team, worked on enemy movement",
        downloadLink: "https://heatwave-studios.itch.io/aegis-initiative",
        thumbnailImage: AEGIS_INITIATIVE,
    },
    {
        title: "My Little Dark Lord",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2019",
            [DetailKey.TEAM_SIZE]: "4",
            [DetailKey.GENRE]: "RPG",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Gameplay engineer, focused on combat, enemy AI, and connecting various Unity Store assets",
        downloadLink: `${ITCHIO_PROFILE_LINK}/my-little-dark-lord`,
        thumbnailImage: MY_LITTLE_DARK_LORD,
    },
    {
        title: "Night in the Woods",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2020",
            [DetailKey.TEAM_SIZE]: "3",
            [DetailKey.GENRE]: "Shooter",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Team Lead/Gameplay Engineer, worked on the player, enemy AI, sound, and level details",
        downloadLink: `${ITCHIO_PROFILE_LINK}/night-in-the-woods`,
        thumbnailImage: NIGHT_IN_THE_WOODS,
    },
    {
        title: "Adventure Tim(e)",
        skills: [Language.GML, Tool.GM_STUDIO_2],
        details: {
            [DetailKey.SHIPPED_DATE]: "2019",
            [DetailKey.TEAM_SIZE]: "1",
            [DetailKey.GENRE]: "Action",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Sole creator",
        downloadLink: `${ITCHIO_PROFILE_LINK}/adventure-time`,
        thumbnailImage: ADVENTURE_TIME,
    },
    {
        title: "Lunchbox",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2021",
            [DetailKey.TEAM_SIZE]: "4",
            [DetailKey.GENRE]: "Adventure",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Gameplay Engineer, created main menu and helped with ship physics for floating on water with waves",
        downloadLink: `${ITCHIO_PROFILE_LINK}/lunchbox`,
        thumbnailImage: LUNCHBOX,
    },
    {
        title: "HyperLoop",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2020",
            [DetailKey.TEAM_SIZE]: "5",
            [DetailKey.GENRE]: "Platformer",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Gameplay Engineer, created power-ups and traps for the player as well as the main/pause menus",
        downloadLink: "https://cg115.itch.io/hyperloop",
        thumbnailImage: HYPER_LOOP,
    },
    {
        title: "The Blob",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2019",

            [DetailKey.TEAM_SIZE]: "2",
            [DetailKey.GENRE]: "Platformer",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Gameplay Engineer, created moving obstacles and the general gameplay loop of collecting gems before the timer runs out",
        downloadLink: `${ITCHIO_PROFILE_LINK}/the-blob`,
        thumbnailImage: THE_BLOB,
    },
    {
        title: "Wrong Turn",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2020",
            [DetailKey.TEAM_SIZE]: "3",
            [DetailKey.GENRE]: "Survival",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Team Lead/Gameplay Engineer, worked on enemy AI, player health system, level creation, and animations",
        downloadLink: `${ITCHIO_PROFILE_LINK}/wrong-turn`,
        thumbnailImage: WRONG_TURN,
    },
    {
        title: "CyBob",
        skills: [Language.C_SHARP, Tool.UNITY],
        details: {
            [DetailKey.SHIPPED_DATE]: "2020",
            [DetailKey.TEAM_SIZE]: "3",
            [DetailKey.GENRE]: "RPG",
            [DetailKey.PLATFORM]: "PC",
        },
        position: "Gameplay Engineer, created the enemy guard patrol/detection system, interactable objects, and shooting",
        downloadLink: `${ITCHIO_PROFILE_LINK}/cybob`,
        thumbnailImage: CYBOB,
    },
];

const Projects = () => {
    const isWide = useMediaQuery(SMALL_SCREEN_MEDIA_QUERY);

    return (
        <section>
            {!isWide && <h2 className="section_header mb-8">{HomePageSection.PROJECTS}</h2>}

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(300px,_100%),_1fr))] gap-4">
                {PROJECT_INFO.map(({title, skills, details, position, downloadLink, thumbnailImage}) => (
                    <TiltElement key={title} enableGlare>
                        <a
                            href={downloadLink}
                            target={"_blank"}
                            rel="noreferrer"
                            aria-label={`View more about ${title}`}
                            className="block h-full"
                        >
                            <div className="bg-lightest-space-cadet/50 inset-ring-red-pantone/50 flex h-full flex-col rounded-xl inset-ring-1">
                                <div className="ring-red-pantone/50 aspect-[6/3] overflow-hidden p-3.5 md:aspect-[16/9]">
                                    <img
                                        src={thumbnailImage}
                                        alt={`${title} thumbnail`}
                                        className="ring-red-pantone/30 h-full w-full rounded-xl object-cover ring-1"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col px-4 pb-4">
                                    <h5 className="text-anti-flash-white mb-1">{title}</h5>

                                    <ul className="grid grid-cols-2">
                                        {Object.entries(details).map(([detailKey, detail], index) => {
                                            const text = `${DETAIL_KEY_TO_PREFIX_MAP[detailKey as DetailKey]} ${detail}`;

                                            return (
                                                <BulletListItem key={`${detailKey}-${index}`}>
                                                    <p className="overflow-x-hidden text-sm/7 whitespace-nowrap" title={text}>
                                                        {text}
                                                    </p>
                                                </BulletListItem>
                                            );
                                        })}
                                    </ul>

                                    <div className="flex flex-1 flex-col place-content-between">
                                        <p className="text-cadet-gray text-sm">{position}</p>

                                        <SkillsList skills={skills} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </TiltElement>
                ))}
            </div>
        </section>
    );
};

export default Projects;
