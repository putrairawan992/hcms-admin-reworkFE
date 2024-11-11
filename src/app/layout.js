import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Scala by Metranet",
  icons: {
    icon: "/images/scala.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
