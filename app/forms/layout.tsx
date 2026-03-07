import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withly | Get in Touch",
  description: "Fill in your details and we'll reach out on WhatsApp to set everything up.",
};

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
