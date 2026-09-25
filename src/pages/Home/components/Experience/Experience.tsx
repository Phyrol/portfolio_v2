import {BulletListItem} from "common/components/BulletListItem";
import {SkillsList} from "common/components/SkillsList";
import {SMALL_SCREEN_MEDIA_QUERY} from "common/constants";
import {WorkInfoHeader} from "./WorkInfo/WorkInfoHeader";
import {useMediaQuery} from "common/utils";
import {useCallback, useState} from "react";
import {HomePageSection, WORK_HISTORY} from "pages/Home/constants";

const EXPERIENCE_GROUP_NAME = "experience-info";

export const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isWide = useMediaQuery(SMALL_SCREEN_MEDIA_QUERY);

    const Wrapper = isWide ? "a" : "div";

    const handleMouseEnter = useCallback(
        (index: number) => {
            if (!isWide) {
                return;
            }

            setHoveredIndex(index);
        },
        [isWide]
    );

    const handleMouseLeave = useCallback(() => {
        if (!isWide) {
            return;
        }

        setHoveredIndex(null);
    }, [isWide]);

    return (
        <section>
            {!isWide && <h2 className="section-header mb-3">{HomePageSection.EXPERIENCE}</h2>}

            {WORK_HISTORY.map(({previousRoles, responsibilities, skills, ...headerInfo}, index) => {
                const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

                return (
                    <Wrapper
                        key={`${headerInfo.company}-info`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        {...(isWide ? {href: headerInfo.link, target: "_blank", rel: "noreferrer"} : {})}
                        className={`block ${isWide ? `hover:bg-space-cadet/60 hover:cursor-pointer group/${EXPERIENCE_GROUP_NAME} hover:inset-shadow-lightest-space-cadet hover:inset-shadow-sm` : ""} ${isOtherHovered ? "opacity-50 duration-200" : ""} mb-1 space-y-1 rounded-md p-4`}
                    >
                        <WorkInfoHeader {...headerInfo} shouldUseLink={!isWide} />

                        {previousRoles?.map(role => (
                            <p key={`${headerInfo.company}-${role}`} className="text-cadet-gray/70" aria-hidden>
                                {role}
                            </p>
                        ))}

                        <ul>
                            {responsibilities.map((responsibility, index) => (
                                <BulletListItem key={`responsibility-${index}`}>
                                    <p className="text-base">{responsibility}</p>
                                </BulletListItem>
                            ))}
                        </ul>

                        <SkillsList skills={skills} />
                    </Wrapper>
                );
            })}
        </section>
    );
};
