import ProjectCard from "./projectCard";

const projects = [
    {
        title: "WikiTok",
        description: "It's a scrollable Wikipedia works like TikTok.",
        image: "/projects/WikiTok.png",
        livesite: "https://wikitok-mu.vercel.app/",
        github: "https://github.com/Mohiudin282/WikiTok.git",
        techstack: ["React", "TypeScript", "Tailwind", "Vite"],

    },

    {
        title: "Pattern",
        description: "Your daily habbit tracker.",
        image: "/projects/Habits.png",
        github: "https://github.com/Mohiudin282/habbit-tracker.git",
        techstack: ["React", "TypeScript", "Tailwind", "Mongo"],
    },
];

export function Projects() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Check out the Projects.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={{...project, livesite: project.livesite ?? null}}/>
                    ))}
                </div>
            </div>
        </section>
    );
}