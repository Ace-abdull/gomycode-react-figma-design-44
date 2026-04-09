import { CTAButton } from "./CTAButton";

export function TextContent() {
  return (
    <div className="w-2/5 flex flex-col gap-10 text-white absolute top-30 bg-transparent left-5">
      <h1 className=" text-4xl font-black ">
        Go beyond and <br /> create your space
      </h1>
      <p className="p-2 text-lg font-semibold ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        imperdiet sed idt.
      </p>
      {/* button */}
      <div>
        <CTAButton>Get Started</CTAButton>
      </div>
    </div>
  );
}
