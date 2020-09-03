// Will eventually show all the notes that we have created.
import { getNotes, useNotes } from "./NoteProvider.js"
import { NoteHTML } from "./NoteHTML.js"


const eventHub = document.querySelector(".container__main");

//We will be listening for the noteStateChanged event. Once that
//once that happens, we update our notes.
eventHub.addEventListener("noteStateChanged", e => {
    console.log("HEARD NOTE STATE CHANGED")
    const notesArray = useNotes();
    renderNotes(notesArray);
})

export const ListNotes = () => {
    getNotes()
    .then(() => {
        const notesArray = useNotes();
        renderNotes(notesArray);
    })
}

const renderNotes = (notesArr) => {
    const domElement = document.querySelector(".note__container--cards")
    let HTMLArray = notesArr.map(note => NoteHTML(note));
    domElement.innerHTML = HTMLArray.join("");
}