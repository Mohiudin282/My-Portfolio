import RetroGrid from "./magicui/retro-grid";
export function MainSection() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <RetroGrid/>
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                Mohiudin
            </span>
            <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight mt-10">full-stack developer.</h1>
                <p className="text-lg md:text-xl text-center">
                    crafting seamless experiences with expertise in both frontend and backend development.
                </p>
            </div>
        </div>
    );
}