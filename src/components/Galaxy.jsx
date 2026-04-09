import bgImage from "/galaxybg.png"

export function Galaxy({ children }) {
  return (
    // fragments
    <>
      {/* container */}
      <div
        style={{ background: `url(${bgImage})`, backgroundPosition:"center", backgroundSize:"cover"}}
        className="text-white size-[600px] bg-cover bg-center absolute right-0 -top-30 "
      >
        {children}
      </div>
    </>
  );
}
``;
