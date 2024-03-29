import Image from "next/image";

const Heroes = () => {
  return (
    <div className="hidden md:flex flex-col w-full h-full items-center justify-center">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image src="/vintage.png" fill className="object-contain" alt="pen" />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
