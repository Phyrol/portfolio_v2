import {PropsWithChildren, useCallback, useRef} from "react";

export interface TiltElementProps {
    enableGlare?: boolean;
}

const TiltElement = ({children, enableGlare}: PropsWithChildren<TiltElementProps>) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const glareRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            const el = elementRef.current;

            if (!el) {
                return;
            }

            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const offsetX = (x / rect.width - 0.5) * 2;
            const offsetY = (y / rect.height - 0.5) * 2;

            const rotateX = offsetY * -10;
            const rotateY = offsetX * 10;

            el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            if (enableGlare) {
                const glare = glareRef.current;

                if (!glare) {
                    return;
                }

                // Glare angle and opacity
                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.05), transparent 40%)`;
            }
        },
        [enableGlare]
    );

    const resetTransform = useCallback(() => {
        if (elementRef.current) {
            elementRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
        if (glareRef.current) {
            glareRef.current.style.background = "none";
        }
    }, []);

    return (
        <div className="h-full perspective-distant">
            <div
                ref={elementRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTransform}
                className="h-full rounded-lg transition-transform duration-200 ease-out hover:scale-105"
            >
                {enableGlare && <div ref={glareRef} className="pointer-events-none absolute inset-0 z-0" />}
                {children}
            </div>
        </div>
    );
};

export default TiltElement;
