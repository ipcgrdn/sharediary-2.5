import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <hr className="border border-black/15" />
      <div className="flex items-center w-full p-3 bg-background z-50">
        <div className="hidden md:flex">
          <p className="my-2 pr-2 flex items-center justify-center">
            <Image
              src="/Sharediary_logo.png"
              width={35}
              height={35}
              alt="logo"
            />
            <span className="text-xl pl-2"> 𝑺𝒉𝒂𝒓𝒆𝑫𝒊𝒂𝒓𝒚 </span>
          </p>
        </div>
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
