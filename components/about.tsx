export default function About() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About me</h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hey! I&apos;m Mohiudin. I&apos;m very enthusiastic about my web development career and continuously evolving myself according to innovations in the world of web development. The technologies I&apos;m currently working with are <span className="font-bold text-red-500 "> TypeScript, JavaScript, React, and Node.js.</span>

                        <br />
                        <br />
                        love making sites that look good and work great.
                    </p>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-1">
                        <h2 className="text-xl font-bold">Background</h2>
                        <p className="text-muted-foreground">
                            I&apos;m a final&dash;year <span className="font-bold">Computer Science</span> student. I&apos;m kickstarting my career as a web developer because the web is becoming more diverse day by day.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h2 className="text-xl font-bold">Skills</h2>
                        <p className="text-muted-foreground">
                            My main skills? i&apos;m really good with Typescript, Javascript, React, and Node.js. I also know my way around Nextjs, Expressjs, and a bunch of other cool libraries. I can make websites look great on any device. Oh, and i&apos;m pretty handy with git for keeping track of all my code changes.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}