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
      <div className="flex flex-col m-auto py-12 items-center w-full lg:w-1/2  mt-8 ">
        {children}
      </div>
    </body>
  );
}
