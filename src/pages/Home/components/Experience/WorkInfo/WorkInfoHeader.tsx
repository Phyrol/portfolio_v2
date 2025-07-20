import {useMemo, useState} from "react";
import {WorkInfo} from "../Experience";
import UP_RIGHT_ARROW_ICON from "assets/icons/up_right_arrow_icon.svg";

interface WorkHeaderProps extends Pick<WorkInfo, "currentRole" | "company" | "link" | "dateRange"> {
    shouldUseLink?: boolean;
}

const WorkInfoHeader = ({currentRole, company, link, dateRange, shouldUseLink}: WorkHeaderProps) => {
    // This is needed so we can ensure the external link arrow is always next to the last word in the text
    const [companyWords] = useState(() => {
        const allWords = company.trim().split(" ");

        const lastWord = allWords.pop();
        const remainingWords = allWords.join(" ");

        return {
            lastWord,
            remainingWords,
        };
    });

    const titleContent = useMemo(
        () => (
            <h3 className="group-hover/experience-info:text-red-rojo flex flex-wrap space-x-2 leading-snug">
                <span className="font-medium">{currentRole}</span>
                <span className="self-center text-sm">&bull;</span>

                <span className="relative inline">
                    {!!companyWords.remainingWords && `${companyWords.remainingWords} `}
                    <span className="inline-flex">
                        {companyWords.lastWord}
                        <UP_RIGHT_ARROW_ICON className="ml-1 h-4 w-4 self-center group-hover/experience-info:self-start group-hover/info-link:self-start" />
                    </span>
                </span>
            </h3>
        ),
        []
    );

    return (
        <div className="flex justify-between gap-2 md:justify-start md:gap-4">
            <div className="text-anti-flash-white flex">
                {shouldUseLink ? (
                    <a href={link} target={"_blank"} rel="noreferrer" className="hover:text-red-rojo group/info-link">
                        {titleContent}
                    </a>
                ) : (
                    titleContent
                )}
            </div>

            <p className="self-start text-sm md:whitespace-nowrap">{dateRange}</p>
        </div>
    );
};

export default WorkInfoHeader;
