import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import homeStyles from "../styles/home.css";
export const meta: MetaFunction = () => {
  return [
    { title: "Programmers Books" },
    { name: "description", content: "Must read Books" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>Collection of must read books</h1>
      <p>This are the books i enjoy most and help me in my career growth</p>
      <p id="cta">
        <Link to="/books">
          Add more books!
        </Link>
      </p>
    </main>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: homeStyles,
    }
  ]
}