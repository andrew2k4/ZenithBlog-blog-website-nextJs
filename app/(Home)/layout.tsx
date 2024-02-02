import { Header } from "@/components/layouts/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={inter.className}>
      <Header />
      <div
        className="flex-1 m-auto py-12 max-w-screen-xl mx-auto"
        style={{ width: "80%" }}
      >
        {children}
      </div>
    </body>
  );
}
