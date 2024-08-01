import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import Provider from "./libs/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth",
  description: "Autentikasi login menggunakan Next Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <div className="">
            <NavBar />
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
