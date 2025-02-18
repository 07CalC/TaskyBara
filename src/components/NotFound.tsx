import Image from "next/image";

type props = {
  title: string;
};

export const NotFound = ({ title }: props) => {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center">
      <p className="text-3xl dark:text-white text-black font-bold">{title}</p>
      <Image
        src="/notFound.png"
        width={1000}
        height={1000}
        alt="No Projects Found"
        className="h-[300px] w-[300px]"
      />
    </div>
  );
};
