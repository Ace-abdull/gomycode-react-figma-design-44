export const SunBackground = () => {
    return (
        <div className="absolute -left-10 top-10 top-5 relative w-72 h-72 flex items-center justify-center">

            {/* Dim sun (background) */}
            <img
                src="/sun-dimmed.png"
                className="absolute left-10 top-10 w-52 h-52 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 blur-3xl opacity-70"
                alt="Dim sun"
            />

            {/* Bright sun (foreground) */}
            <img
                src="/sun-bright.png"
                className="absolute w-32"
                alt="Bright sun"
            />

        </div>
    );
};