import NewNote, { links as newNoteLinks } from '~/component/NewNote';
const notes = () => {
    return (
        <div>
            <NewNote />
        </div>
    )
}

export function action() {

}

export function links() {
    return [...newNoteLinks()]
}

export default notes

