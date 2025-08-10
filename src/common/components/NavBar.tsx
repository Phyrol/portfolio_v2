import {useCallback, useEffect, useState} from "react";
import resumePDF from "assets/files/Bradley Potzka Resume.pdf";
import {RESUME_TEXT} from "common/constants";

// The rootMargin for the observer when scrolling to determine which tab should be active
// e.g. top -50% means shrink the top boundary of the viewport down by 50%, so an element must be much closer to the center to be "visible"
// top, right, bottom, left
const OBSERVER_ROOT_MARGIN = "-20% 0px -80% 0px";

export interface NavBarProps {
    ids: string[];
}

const NavBar = ({ids}: NavBarProps) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    // This handles updating the active tab automatically when scrolling through the page depending on which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: OBSERVER_ROOT_MARGIN,
                threshold: 0,
            }
        );

        const elements = ids.map(id => document.getElementById(id)).filter(el => !!el);
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, [ids]);

    const handleClick = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
        setActiveId(id);
    }, []);

    return (
        <div className="space-y-8">
            <ol className="space-y-4">
                {ids.map(id => (
                    <li key={id}>
                        <button className="group relative hover:cursor-pointer" onClick={() => handleClick(id)}>
                            <span
                                className={`${activeId === id ? "text-anti-flash-white" : "group-hover:text-anti-flash-white"} duration-200`}
                            >
                                {id}
                            </span>
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                                    activeId === id ? "bg-red-rojo w-full" : "bg-red-rojo w-0 group-hover:w-full"
                                }`}
                            />
                        </button>
                    </li>
                ))}
            </ol>

            <a href={resumePDF} target={"_blank"} rel="noreferrer">
                <button className="hover:text-anti-flash-white rounded-md border-2 p-2 hover:cursor-pointer">
                    <p>{RESUME_TEXT}</p>
                </button>
            </a>
        </div>
    );
};

export default NavBar;
