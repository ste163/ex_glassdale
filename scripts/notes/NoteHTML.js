//Module goal: generate HTML string of the note object

//To convert the millisecond dates into normal date format. Use the following at the bottom.
//by having the "type='button'" the page will not refresh itself.
export const NoteHTML = (noteObj) => {
    return `
    <section class="card card__note">
        <h3>${noteObj.textTitle}</h3>
        <p>Date entered: ${new Date(noteObj.date).toLocaleDateString('en-US')}</p> 
        <p>Suspected criminal: ${noteObj.suspectObj.name}</p>
        <p>${noteObj.textBody}</p>
        <button type="button" id="deleteNote--${noteObj.id}">Delete</button>
    </section>
    `
}