import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

import illustrationImg from "@/assets/illustration.svg";
import { LogInIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4 px-4">
        <div className="max-w-[320px]">
          <Image src={illustrationImg} alt="" />
        </div>

        <p className="text-center text-muted-foreground max-w-xl">
          Plataforma de help desk especializada em conserto de equipamentos e
          notebooks, oferecendo suporte técnico rápido e eficiente.
        </p>

        <SignInButton>
          <Button>
            <LogInIcon className="mr-2 size-4" />
            Acesse a nossa plataforma
          </Button>
        </SignInButton>
      </div>
    </main>
  );
}
