import styles from "./NewNote.css";
import { LinksFunction } from '@remix-run/node';
const NewNote = () => {
    return (
        <form method="post" id="note-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" rows="5" required />
            </p>
            <div className="form-actions">
                <button>Add Note</button>
            </div>
        </form>
    )
}

export default NewNote
export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}