import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="">
        <SignedOut>
          <SignUpButton mode="modal">Sign Up</SignUpButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton>Logout</SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
}
