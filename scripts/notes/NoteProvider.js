// hold our array of notes
// have a useNotes that returns a copy of array (slice)

// have a getNotes from the database. Also be able to add a note to the database.

const eventHub = document.querySelector(".container__main");

let notesArray = [];

const dispatchNoteStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged");
    console.log("NOTE STATE CHANGED")
    eventHub.dispatchEvent(noteStateChangedEvent);
}

export const useNotes = () => notesArray.slice();

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedNotes => {
        notesArray = parsedNotes;
    })
}

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