import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import homeStyles from "../styles/home.css";
export const meta: MetaFunction = () => {
  return [
    { title: "Sticky Notes" },
    { name: "description", content: "Welcome to Sticky Notes" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>Having sticky notes will save your time a lot</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorem.</p>
      <p id="cta">
        <Link to="/notes">
          Try Now!
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