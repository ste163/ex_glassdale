//Module Goals
    //Render HTML for form
    //Once user clicks form's save button, save entered object
    
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container__criminals")
const contentTarget = document.querySelector(".note__form")

//When user clicks note save button, save entered note
eventHub.addEventListener("click", e => {
    if (e.target.id === "note-save") {
        const noteTitle = document.querySelector("#note-text-title");
        const noteText = document.querySelector("#note-text-body");
        const noteSuspect = document.querySelector("#noteForm--suspect");

        //Create object to store in JSON database
        const newNote = {
            date: Date.now(),
            suspectId: parseInt(noteSuspect.value),
            textTitle: noteTitle.value,
            textBody: noteText.value
        }
        //Invokes saveNote function in CriminalProvider.js
        saveNote(newNote)
    }
})

//Adds the form to DOM with latest list of suspects (criminals)
export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals();
        renderNoteForm(criminalArray);
    })
}

//Prepares HTML to render to DOM
const renderNoteForm = (criminalArr) => {
    contentTarget.innerHTML += `
        <header class="form__header">
            <h4>Enter a Criminal Note</h4>
        </header>
        <form class="form__body">
            <label class="note-label" for="note-text-title">Title</label>
            <input type="text" id="note-text-title" placeholder="Enter title here.">
            <label class="note-label" for="note-text-body">Note</label>
            <textarea rows="4" id="note-text-body" placeholder="Enter note here."></textarea>
            <label class="note-label" for="noteForm--suspect">Known criminals</label>
            <select class="dropdown" id="noteForm--suspect">
                <option value="0">Please select a suspect...</option>
                ${
                    criminalArr.map(criminal => {
                        return `
                            <option value="${criminal.id}">${criminal.name}</option>
                        `
                    }).join("")
                    }
            </select>
            <button type="button" id="note-save">Save Note</button>
        </form>
    `
}