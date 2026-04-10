import { Card } from "./Card";

export function CardList() {
  return (
    <div className="text-white mt-54 bottom-0 grid grid-cols-4 gap-4">
      {/* Card1 */}
      <Card
        title={"Title"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum.`}
      />

      {/* Card2 */}
      <Card
        title={"Title"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum.`}
      />

      {/* card3 */}
      <Card
        title={"Title"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum.`}
      />

      {/* card4 */}
      <Card
        title={"Title"}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum.`}
      />
    </div>
  );
}
