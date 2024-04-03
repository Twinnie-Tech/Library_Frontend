import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/main.css";
import type { LinksFunction } from "@remix-run/node";
import MainNavigation from "./component/MainNavigation";
import { AuthProvider } from "./component/AuthProvider";
import SiteHeader from "./component/SiteHeader";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AuthProvider>
          <header>
            <MainNavigation />
          </header>
          <SiteHeader />
          {children}
        </AuthProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    }
  ]
}



export default function App() {
  return <Outlet />;
}
