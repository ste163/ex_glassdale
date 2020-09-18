//Module Goals:
    //Fetch saved notes from Database
    //Post new notes to Database
    //Delete selected note
    //Use a copy of notes without affecting database

const eventHub = document.querySelector(".container__main");

let notesArray = [];

//Lets the eventHub know user has changed a note.
const dispatchNoteStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged");
    eventHub.dispatchEvent(noteStateChangedEvent);
}

//Returns a copy of fetched notes
export const useNotes = () => notesArray.slice();

//Fetches notes from database then converts it to JSON
export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedNotes => {
        notesArray = parsedNotes;
    })
}

//Posts a new note to database then informs eventHub of change
export const saveNote = noteObj => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObj)
    })
    //When you update the database, the next step is to get
    //the whole database again. Make the getNote function right here
    //.then expects a function, so you do not need to use the () to invoke
    //the function you're passing in. If you add the () it will not call the function
    // in the correct order.
    .then(getNotes)
    .then(dispatchNoteStateChangeEvent)
}

//Delete note from database
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
        .then(dispatchNoteStateChangeEvent)
}