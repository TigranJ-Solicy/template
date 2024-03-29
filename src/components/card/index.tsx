import Image from "next/image";
import { CardProps } from "./types";

export default function Card({ data }: CardProps): JSX.Element {
  return (
    <div className=" md:max-w-[300px] w-[100%] min-h-[250px] bg-gray-200 p-4 rounded-[20px]">
      <div className="flex items-center mb-5 gap-5">
        <Image src={data.image} alt="cart_logo" width={60} height={60} />
        <h1>{data.title}</h1>
      </div>
      <p>{data.description}</p>
    </div>
  );
}
