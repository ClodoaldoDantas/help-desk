import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <SignUp />
    </main>
  );
}
