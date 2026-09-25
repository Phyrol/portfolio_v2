import {Language, Framework, Library, RuntimeEnv, Tool, GameEngine} from "common/constants";

export enum HomePageSection {
    ABOUT = "About",
    EXPERIENCE = "Experience",
    PROJECTS = "Projects",
}

export interface WorkInfo {
    currentRole: string;
    company: string;
    link: string;
    dateRange: string;
    responsibilities: string[];
    skills: string[];
    previousRoles?: string[];
}

export const WORK_HISTORY: WorkInfo[] = [
    {
        currentRole: "Frontend Engineer II",
        company: "AWS, Direct Connect Console",
        link: "https://aws.amazon.com/directconnect/",
        dateRange: "2025 - Present",
        responsibilities: [
            "Owned end-to-end frontend delivery for AWS Interconnect, building customer-facing Multicloud and Last Mile Cloud Connectivity experiences from scratch, including workflows, resource management, and API integrations.",
            "Drove modernization of a mature console by migrating React 16 → 18, enabling strict TypeScript, replacing deprecated testing infrastructure, and reducing build time from 24 minutes to 4 minutes (83%).",
            "Diagnosed and fixed a race condition that fanned out API calls to inaccessible opt-in regions, triggering invalid-region 4xx errors on every page load; gated the calls behind a region-readiness check, eliminating that error class entirely (~180K/hour to 0).",
            "Owned accessibility remediation for 107+ audit findings, resolving all high-severity violations and implementing scalable accessibility and internationalization improvements.",
            "Led BGP Insights delivery, building a filterable and paginated BGP Routes experience and driving testing, UX review, rollout, and launch across multiple global AWS regions, including China.",
            "Built new create and management workflows for two major billing and resiliency features, including cross-resource associations.",
            "Adopted a spec-driven, AI-assisted development workflow to accelerate delivery — generating unit tests across 8 modules and converting 6+ legacy modules to TypeScript — and documented the patterns for team-wide adoption.",
        ],
        skills: [
            Language.TYPESCRIPT,
            Language.JAVASCRIPT,
            Framework.REACT,
            Library.REDUX,
            Language.SQL,
            RuntimeEnv.NODE_JS,
            Tool.CYPRESS,
            Tool.PUPPETEER,
        ],
    },
    {
        currentRole: "Frontend Engineer II",
        previousRoles: ["Frontend Engineer I"],
        company: "AWS, Fault Injection Service Console",
        link: "https://aws.amazon.com/fis/",
        dateRange: "2024 - 2025",
        responsibilities: [
            "Led a large-scale refactor of the experiment-template creation workflow to React Hook Form, replacing 4+ years of tightly coupled state management with centralized validation, stronger type safety, and substantially improved extensibility.",
            "Owned the initial FIS Console expansion into new isolated AWS regions (air-gapped partitions), building deployment infrastructure and monitoring from scratch and establishing reusable patterns and documentation for future regional expansion.",
            "Took ownership of the Safety Lever launch with only 2 weeks of runway, driving the operational readiness review, feature sign-off, change management, UX approval, E2E testing, and rollout to completion ahead of the deadline.",
            "Identified a deployment monitoring gap where a bad change could finish deploying before its canary alarm had time to fire and implemented bake-time alarm coverage across staging and production stages to enable automatic rollback throughout the full bake period.",
        ],
        skills: [
            Language.TYPESCRIPT,
            Language.JAVASCRIPT,
            Framework.REACT,
            Library.REDUX,
            Language.SQL,
            RuntimeEnv.NODE_JS,
            Tool.CYPRESS,
            Tool.PUPPETEER,
        ],
    },
    {
        currentRole: "Frontend Engineer I",
        company: "AWS, SageMaker JumpStart",
        link: "https://aws.amazon.com/sagemaker/ai/jumpstart/",
        dateRange: "2022 - 2024",
        responsibilities: [
            "As one of two frontend engineers, built core SageMaker JumpStart experiences for the organization’s migration from a monolithic frontend to micro-frontends, including model discovery, hub/model pages, search, sorting, filtering, and reusable UI components shared across the SageMaker organization.",
            "Designed a regionalized integration-test client that dynamically selects available models, root-causing an SDK compilation issue that several senior engineers had been unable to resolve and coordinating compatibility changes across 5+ partner teams; the change saved dozens of developer hours by preventing recurring test failures.",
            "Automated Hugging Face model URL validation during metadata generation, using Python multithreading and caching to reduce validation time from 1.5 minutes to 5 seconds and eliminate a recurring manual process.",
            "Built a CloudWatch-style training log viewer with automatic polling, bidirectional log fetching, search, and virtualized rendering for thousands of variable-height log entries.",
        ],
        skills: [
            Language.TYPESCRIPT,
            Language.JAVASCRIPT,
            Framework.REACT,
            Library.REDUX,
            Library.GRAPHQL,
            Language.SQL,
            Language.CSS,
            Language.PYTHON,
            RuntimeEnv.NODE_JS,
            Tool.CYPRESS,
        ],
    },
    {
        currentRole: "Software Engineer Intern",
        company: "Garmin, AeroData",
        link: "https://www.aerodata.co/en-US/",
        dateRange: "2021",
        responsibilities: [
            "Used ASP.NET Core MVC to develop a web application to exercise the functionality in an existing library that is currently utilized by a console application.",
            "Utilized NuGet packages, JSON serialization/deserialization, and EF Core database access.",
            "Extended functionality of current enterprise logging that utilizes Log4Net by modifying the existing library to use a TCP connection with serialization/deserialization to log events.",
            "Followed agile development with daily stand-up meetings to discuss sprint tasks and roadblocks.",
        ],
        skills: [Language.JAVASCRIPT, Language.C_SHARP, Language.HTML, Framework.ASP_NET],
    },
    {
        currentRole: "Systems Engineer",
        company: "Heatwave Studio",
        link: "https://heatwave-studios.itch.io/",
        dateRange: "2019 - 2022",
        responsibilities: [
            "Followed agile development standards, fixed bugs during development and in production.",
            "Worked with design, sound, and art teams across the studio to ensure successful design and implementation of core game mechanics.",
            "Communicated effectively to game directors during agile planning meetings.",
            "Coordinated with other engineers to implement desired game mechanics efficiently.",
        ],
        skills: [Language.C_SHARP, GameEngine.UNITY],
    },
    {
        currentRole: "IT Intern",
        company: "Mesa Public Schools",
        link: "https://www.mpsaz.org/",
        dateRange: "2016 - 2018",
        responsibilities: [
            "Worked with peers to diagnose and repair laptops and projectors.",
            "Researched challenging issues to find a satisfactory solution.",
            "Excelled in effective and positive communication with faculty to resolve technical issues.",
            "Exhibited time management to complete project requirements.",
        ],
        skills: [],
    },
];
