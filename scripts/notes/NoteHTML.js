// Take notes NoteForm created and prepares the HTML for them.
// Takes an array of objects (notes) and returns an HTML string
//Our note data contains:
//date, enteringOfficer, currentSuspect, textTitle, textBody


//To convert the millisecond dates into normal date format. Use the following at the bottom.
export const NoteHTML = (noteObj) => {
    return `
    <section class="card card__note">
        <h3>${noteObj.textTitle}</h3>
        <p>Date entered: ${new Date(noteObj.date).toLocaleDateString('en-US')}</p>
        <p>Created by Officer: ${noteObj.enteringOfficer}</p>
        <p>Suspected criminal: ${noteObj.currentSuspect}</p>
        <p>${noteObj.textBody}</p>
    </section>
    `
}