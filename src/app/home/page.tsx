import { CardContainer } from "@/components/card/types";
import Card from "@/components/card";
import { cartData } from "../../../utils/constants/mockData";

export default function HomePage(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col p-5 md:p-24">
      <div className="flex justify-between items-center flex-wrap gap-10">
        {cartData.map((e: CardContainer, index: number) => (
          <Card
            key={index}
            data={{
              title: e.title,
              description: e.description,
              image: e.image,
            }}
          />
        ))}
      </div>
    </div>
  );
}
