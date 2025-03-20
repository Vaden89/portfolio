import "./globals.css";
import { Chakra_Petch } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NavBar } from "./components/NavBar";

const chakra_petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Vaden - Portfolio",
  description: "The personal portfolio for Isaac Shosanya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`max-w-[1440px] w-full h-full mx-auto ${chakra_petch.className}`}
      >
        <NavBar />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
