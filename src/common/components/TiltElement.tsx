import {JSX, useCallback, useRef} from "react";

export interface TiltElementProps {
    children: JSX.Element;
}

const TiltElement = ({children}: TiltElementProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const el = elementRef.current;

        if (!el) {
            return;
        }

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const offsetX = (x / rect.width - 0.5) * 2;
        const offsetY = (y / rect.height - 0.5) * 2;

        // Tilt toward the cursor
        const rotateX = -offsetY * 10;
        const rotateY = offsetX * 10;

        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, []);

    const resetTransform = useCallback(() => {
        if (elementRef.current) {
            elementRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    }, []);

    return (
        <div className="perspective-distant">
            <div
                ref={elementRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTransform}
                className="transition-transform duration-200 ease-out hover:scale-105"
            >
                {children}
            </div>
        </div>
    );
};

export default TiltElement;
