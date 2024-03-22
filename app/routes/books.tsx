import { ActionFunctionArgs } from '@remix-run/node';
import NewBook, { links as newBookLinks } from '~/component/NewBook';
import BookList, { links as BookListLinks } from '~/component/BookList';
import { redirect } from '@remix-run/node';
import { createBook, getBooks } from '~/api/Book';
import { useLoaderData } from '@remix-run/react';
import { DateTime } from 'luxon';
const books = () => {
    const books = useLoaderData();
    return (
        <div>
            <NewBook />
            <BookList books={books} />
        </div>
    )
}

export async function loader() {
    const books = await getBooks();
    return books;
}


export async function action({ request }: ActionFunctionArgs) {
    try {
        const formData = await request.formData();
        const title = String(formData.get('title'));
        const author = String(formData.get('author'));
        const description = String(formData.get('description'));
        const publishedDateString = formData.get('publishedDate');
        const publishedDate = publishedDateString ? DateTime.fromISO(publishedDateString.toString(), { zone: 'utc' }) : null;
        const bookData = {
            Title: title,
            Author: author,
            Description: description,
            publishedDate: publishedDate
        }
        console.log(bookData);
        await createBook(bookData);
        return redirect("/books");
    } catch (err) {
        // Log and handle errors
        console.error("Error creating book:", err);
        return null; // Return null in case of error
    }
}



export function links() {
    return [...newBookLinks(), ...BookListLinks()];
}

export default books

