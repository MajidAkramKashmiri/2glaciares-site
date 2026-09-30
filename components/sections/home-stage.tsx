export function HomeStage({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative isolate overflow-hidden bg-navy-950 text-white">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-[30rem] left-1/2 aspect-square w-[90rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(47_171_239_/_0.35),transparent)]" />
                <div className="absolute right-[-20%] bottom-[-20%] aspect-square w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgb(143_216_255_/_0.16),transparent)]" />
                <div className="absolute inset-0 dot-grid opacity-[0.12] [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
            </div>
            {children}
        </div>
    );
}
