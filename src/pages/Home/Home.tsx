import {ReactNode} from "react";
import {AboutMe} from "pages/Home/components/AboutMe/AboutMe";
import {Projects} from "pages/Home/components/Projects/Projects";
import {Experience} from "pages/Home/components/Experience/Experience";
import {NavBar} from "common/components/NavBar";
import {SocialLinkNav} from "common/components/SocialLinkNav";
import {GITHUB_PROFILE_LINK, SMALL_SCREEN_MEDIA_QUERY} from "common/constants";
import {useMediaQuery} from "common/utils";
import {HomePageSection} from "./constants";

const SECTION_TO_ELEMENT_MAP: {[section in HomePageSection]: ReactNode} = {
    [HomePageSection.ABOUT]: <AboutMe />,
    [HomePageSection.EXPERIENCE]: <Experience />,
    [HomePageSection.PROJECTS]: <Projects />,
};

export const Home = () => {
    const isWide = useMediaQuery(SMALL_SCREEN_MEDIA_QUERY);

    return (
        <main className={`${isWide ? "grid grid-cols-[1fr_3fr] gap-4" : ""} [&>*]:py-8 [&>*]:sm:py-13 [&>*]:md:py-18`}>
            {isWide && (
                <div className="sticky top-0 flex h-screen flex-col justify-between">
                    <NavBar navIds={Object.values(HomePageSection)} />

                    <SocialLinkNav />
                </div>
            )}

            <div className="flex flex-col space-y-14">
                <div className="flex flex-col space-y-24">
                    {Object.entries(SECTION_TO_ELEMENT_MAP).map(([section, el]) => (
                        <div key={section} id={section} data-testid={section} className="scroll-mt-18">
                            {el}
                        </div>
                    ))}
                </div>

                <footer className="self-center">
                    <a href={`${GITHUB_PROFILE_LINK}/portfolio_v2`} target={"_blank"} rel="noreferrer" className="hover:text-red-rojo">
                        <p className="text-base">Built by Bradley Potzka</p>
                    </a>
                </footer>
            </div>
        </main>
    );
};
