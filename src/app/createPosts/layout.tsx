import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Post",
  description: "Generated by create next app",
};

export default function CreatePostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
