import { CardList } from "./components/CardList";
import { Galaxy } from "./components/galaxy";
import { SunBackground } from "./components/sunBackground";
import { TextContent } from "./components/TextContent";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto bg-black min-h-screen p-5">
      {/* upper section */}
      <section className="relative">
        {/* sun goes here */}
        <SunBackground />
        {/* text content goes here */}
        <TextContent />

        {/* this is the galaxy */}
        <Galaxy>
          <div className="relative">
            <div className="absolute top-50 right-15">
              <h3 className="text-4xl">256B+</h3>
              <p> Lorem ipsum dolor sit</p>
            </div>
            <div className="absolute top-120 left-40">
              <h3 className="text-4xl ">986k+</h3>
              <p> Lorem ipsum dolor sit</p>
            </div>
          </div>
        </Galaxy>
      </section>
      {/* lower section */}

      <CardList />
    </div>
  );
}
