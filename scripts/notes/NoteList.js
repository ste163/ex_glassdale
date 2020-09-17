// Will eventually show all the notes that we have created.
import { getNotes, useNotes } from "./NoteProvider.js"
import { NoteHTML } from "./NoteHTML.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";


const eventHub = document.querySelector(".container__main");


//Listen for when the noteState changes then re-render notes
eventHub.addEventListener("noteStateChanged", () => {
    renderNotes(useNotes(), useCriminals());
})

export const ListNotes = () => {
    getNotes()
    .then(getCriminals())
    .then(() => {
        const notes = useNotes();
        const suspects = useCriminals()
        renderNotes(notes, suspects);
    })
}

const renderNotes = (notesArr, suspectsArr) => {
    const domElement = document.querySelector(".note__container--cards")

    let HTMLArray = notesArr.map(note => {
        //we are declaring a new property on the note object that is suspectObj.
        note.suspectObj = suspectsArr.find(suspect => {
            //change current suspect to suspectID
            return suspect.id === parseInt(note.suspectId)
        })
        return NoteHTML(note)
    });
    domElement.innerHTML = HTMLArray.join("");
}