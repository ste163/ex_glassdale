import { ListOfficers } from "./officers/OfficerList.js"
import { ListCriminals } from "./criminals/CriminalList.js"
import { ListWitnesses } from "./witnesses/WitnessList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ListNotes } from "./notes/NoteList.js";
import { createUiAccordion } from "./ui/AccordionMenu.js"

ListOfficers();
ListCriminals();
ListWitnesses();
ConvictionSelect();
OfficerSelect();
NoteForm();
ListNotes();
createUiAccordion();