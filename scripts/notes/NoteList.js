// Module goal: render all stored notes

import { getNotes, useNotes } from "./NoteProvider.js"
import { NoteHTML } from "./NoteHTML.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container__main");

//Listen for when the noteState changes then re-render notes
eventHub.addEventListener("noteStateChanged", () => {
    renderNotes(useNotes(), useCriminals());
})

//Initially getting all saved notes and displaying them on page.
export const ListNotes = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notes = useNotes();
        const suspects = useCriminals()
        renderNotes(notes, suspects);
    })
}

//Take Notes array and Suspect (criminal) array, match the suspect ID to one stored
    //in Notes array, then store the matched suspect object as a new property in the note.
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