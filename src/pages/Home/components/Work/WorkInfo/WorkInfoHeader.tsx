import {useState} from "react";
import {WorkInfo} from "../Work";
import UP_RIGHT_ARROW_ICON from "assets/icons/up_right_arrow.svg";

interface WorkHeaderProps extends Pick<WorkInfo, "currentRole" | "company" | "link" | "dateRange"> {}

const WorkInfoHeader = ({currentRole, company, link, dateRange}: WorkHeaderProps) => {
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

    return (
        <div className="flex flex-wrap gap-x-3 gap-y-2">
            <h3 className="text-anti-flash-white flex max-w-fit leading-snug">
                <a href={link} target={"_blank"} rel="noreferrer" className="hover:text-red-rojo flex flex-wrap space-x-2">
                    <span className="font-medium">{currentRole}</span>
                    <span>&mdash;</span>

                    <span className="relative inline">
                        {!!companyWords.remainingWords && `${companyWords.remainingWords} `}
                        <span className="inline-flex">
                            {companyWords.lastWord}
                            <UP_RIGHT_ARROW_ICON className="stroke-anti-flash-white ml-1 h-4 w-4 self-center" />
                        </span>
                    </span>
                </a>
            </h3>

            <p className="self-center text-sm md:whitespace-nowrap">{dateRange}</p>
        </div>
    );
};

export default WorkInfoHeader;
