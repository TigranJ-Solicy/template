"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { imagesPNG } from "../../../utils/constants/images";
import {
  HeaderList,
  headerList,
} from "../../../utils/constants/headerNavigation";

export default function Header(): JSX.Element {
  const router = useRouter();

  const handleNavigate = (path: string): void => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-between px-5 md:px-24 py-0">
      <div className="w-full  flex justify-between items-center">
        <Image src={imagesPNG.logo} alt="header_logo" width={150} height={50} />
        <div className="flex justify-center items-center gap-20">
          {headerList.map((el: HeaderList, index: number) => (
            <div key={index} onClick={() => handleNavigate(el.path)}>
              <p className="cursor-pointer">{el.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
