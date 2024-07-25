import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <SignInButton>
        <Button>Entrar na sua conta</Button>
      </SignInButton>
    </main>
  );
}
