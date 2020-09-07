import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container__criminals")
const contentTarget = document.querySelector(".note__form")

eventHub.addEventListener("click", e => {
    if (e.target.id === "note-save") {
        console.log("NOTE SAVED BUTTON PRESSED");

        const noteTitle = document.querySelector("#note-text-title");
        const noteText = document.querySelector("#note-text-body");
        const noteSuspect = document.querySelector("#noteForm--suspect");

        //Create what the database is expecting.
        const newNote = {
            date: Date.now(),
            enteringOfficer: "NOT YET ADDED",
            currentSuspect: noteSuspect.value,
            textTitle: noteTitle.value,
            textBody: noteText.value
        }

        saveNote(newNote)
    }
})

export const NoteForm = () => {
    // To ensure we have the array to populate the suspect dropdown, get criminals
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals();
        renderNoteForm(criminalArray);
    })
}

//WE DON"T HAVE TO PUT A DATE FIELD. The save button handles that.
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
            <label class="note-label" id="noteForm--suspect">Known criminals</label>
            <select class="dropdown" id="noteForm--suspect">
                <option value="0">Please select a suspect...</option>
                ${
                    criminalArr.map(criminal => {
                        return `
                        <option value="${criminal.name}">${criminal.name}</option>
                        `
                    }).join("")
                    }
            </select>
            <button id="note-save">Save Note</button>
        </form>
    `
}