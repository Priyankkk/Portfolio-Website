import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: 'Priyank Vora',
	authors: {
		name: "Priyank Vora",
	},

	description:
		"Based in Ontario, I am a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Priyank Vora",
		description:
			"Based in Ontario, I am a Fullstack developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000/",
		siteName: "Priyank Vora",
		images: "my_website.PNG",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
