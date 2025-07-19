import {useCallback, useEffect, useState} from "react";

// The rootMargin for the observer when scrolling to determine which tab should be active
// e.g. top -50% means shrink the top boundary of the viewport down by 50%, so an element must be much closer to the center to be "visible"
// top, right, bottom, left
const OBSERVER_ROOT_MARGIN = "-20% 0px -80% 0px";

interface NavBarProps {
    ids: string[];
    className?: string;
}

const NavBar = ({ids, className = ""}: NavBarProps) => {
    const [activeId, setActiveId] = useState<string | null>(null);

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

        const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
        elements.forEach(el => observer.observe(el!));

        return () => {
            elements.forEach(el => observer.unobserve(el!));
        };
    }, [ids]);

    const handleClick = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
        setActiveId(id);
    }, []);

    return (
        <ol className={className}>
            {ids.map(id => (
                <li key={id} onClick={() => handleClick(id)}>
                    <a className="group relative">
                        <span
                            className={` ${activeId === id ? "text-anti-flash-white" : "group-hover:text-anti-flash-white"} duration-200`}
                        >
                            {id}
                        </span>
                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                                activeId === id ? "bg-red-rojo w-full" : "bg-red-rojo w-0 group-hover:w-full"
                            }`}
                        />
                    </a>
                </li>
            ))}
        </ol>
    );
};

export default NavBar;
