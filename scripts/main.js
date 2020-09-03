console.log("MAIN.JS LOADED");
import { ListOfficers } from "./officers/OfficerList.js"
import { ListCriminals } from "./criminals/CriminalList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ListNotes } from "./notes/NoteList.js";

ListOfficers();
ListCriminals();
ConvictionSelect();
OfficerSelect();
NoteForm();
ListNotes();