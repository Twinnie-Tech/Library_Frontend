import moment from "moment";
import BookStyle from "./BookList.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu } from "@headlessui/react";
import MyDropdown from "./MyDropdown";

export const buttonLink: string[] = ["update Book", "Delete Book"];

interface BookType {
    title: string;
    author: string;
    description: string;
    publishedDate: string | null;
}
const BookList = ({ books }: any) => {
    return (
        <ul id="book-list">
            {books.map((book: BookType, index: number) => (
                <li key={index} className="book">
                    <article>
                        <header>
                            <ul className="book-meta">
                                <li>#{index + 1}</li>
                                <li>
                                    <time>
                                        {moment(book.publishedDate).format('MMMM Do YYYY, h:mm:ss a')}
                                    </time>
                                </li>
                                <li className="dots">
                                    <MyDropdown />
                                    {/* <Menu>
                                        <Menu.Button>
                                            <BsThreeDotsVertical />
                                        </Menu.Button>
                                        <Menu.Items>
                                            {buttonLink?.map((link: any, index: number) => (
                                                <Menu.Item key={index}>
                                                    {link.label}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Menu> */}
                                </li>
                            </ul>
                            <h2>{book.title}</h2>
                            <h2>{book.author}</h2>
                        </header>
                        <p>{book.description}</p>
                    </article>
                </li>
            ))}
        </ul>
    )
}

export default BookList
export function links() {
    return [
        {
            rel: "stylesheet",
            href: BookStyle
        }
    ]
}
