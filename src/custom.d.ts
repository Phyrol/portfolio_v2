declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

// This is needed for React to recognize .svg files during import - https://webpack.js.org/guides/typescript/#importing-other-assets
declare module "*.svg" {
    const content: React.ComponentClass<React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement>>;

    export default content;
}
