import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 text-zinc-600">
        Create a post
      </h1>
      <Form />
      <LogoutLink>Log Out</LogoutLink>
    </main>
  );
}
