import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
}
