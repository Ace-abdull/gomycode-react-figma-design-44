export const SunBackground = () => {
    return (
        <div className="relative w-64 h-64">
            {/* Dim sun (behind) */}

           
            {/* Bright Sun (front) */}
            {/* <img
                src="/sun-bg-brightness.png"
                alt="bright sun"
                className="absolute top-1/2 left-1/2 w-32 
                   -translate-x-1/2 -translate-y-1/2 z-50"
            />

            <img
                src="/sun.png"
                alt="Dim Sun"
                className="absolute top-1/2 left-1/2 w-52 opacity-30 blur-md 
                   -translate-x-1/2 -translate-y-1/2 z-0"
            /> */}

            <div className="relative w-72 h-72">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src="/sun.png" className="w-52 opacity-30 blur-md" />
                    <img src="/sun-bg-brightness.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 z-10" />
                </div>
            </div>


        </div>
    )
}
