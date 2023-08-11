import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "topics", {
    cache: "no-store",
  });
  const topics = await resp.json();

  return (
    <html>
      <body>
        <h1>
          <Link href="/">Web</Link>
          <ol>
            {topics.map((topic) => {
              return (
                <li key={topic.id}>
                  <Link href={`/read/${topic.id}`}>{topic.title}</Link>
                </li>
              );
            })}
          </ol>
          {children}
          <Control />
        </h1>
      </body>
    </html>
  );
}
