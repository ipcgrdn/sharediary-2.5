"use client";

import { useConvexAuth } from "convex/react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 w-full flex flex-col items-center justify-center">
      <p className="mb-3 pr-2 flex items-center justify-center">
        <Image src="/Sharediary_logo.png" width={40} height={40} alt="logo" />
        <span className="text-xl pl-2 dark:text-black"> 𝑺𝒉𝒂𝒓𝒆𝑫𝒊𝒂𝒓𝒚 </span>
      </p>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold dark:text-black">
        Welcome to <br /> <span className="text-rose-400"> ShareDiary:</span>
      </h1>
      <h3 className="text-base sm:text-xl font-medium dark:text-black">
        Write and Share your Day
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button variant="second" asChild>
          <Link href="/documents">
            Get Started!
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button variant="second">
            Try For Free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
