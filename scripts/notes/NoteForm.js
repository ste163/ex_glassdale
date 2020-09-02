const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    renderNoteForm();
}

const renderNoteForm = () => {
    contentTarget.innerHTML += `
    <label class="note-label" for="note-date">Date</label>
    <input type="date" id="note-date">
    <label class="note-label" for="note-text-title">Title</label>
    <input type="text" id="note-text-title">
    <label class="note-label" for="note-text-body">Note</label>
    <textarea rows="4"id="note-text-body"></textarea>
    `
}