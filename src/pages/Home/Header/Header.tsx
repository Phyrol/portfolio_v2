const Header = () => {
    return (
        <section className="space-y-2">
            <div className="space-y-3">
                <p className="text-sm">Hi, my name is</p>
                <h1 className="text-anti-flash-white">Bradley Potzka</h1>
                <h2 className="text-cadet-gray">Software Developer, Game Developer</h2>
            </div>

            <div className="[&>*]:after:text-cadet-gray [&>a]:text-red-rojo [&>*]:hover:text-red-pantone space-x-2 [&>*]:after:ml-2 [&>*]:after:content-['|']">
                <a href="mailto:bradleypotzka39@gmail.com">bradleypotzka39@gmail</a>
                <span>(480) 440-5081</span>
                <a href="https://github.com/Phyrol" target={"_blank"} rel="noreferrer">
                    GitHub
                </a>
                <a href="https://phyrol.itch.io/" target={"_blank"} rel="noreferrer">
                    itch.io
                </a>
                <a href="https://www.linkedin.com/in/bradleypotzka/" target={"_blank"} rel="noreferrer">
                    LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Header;
