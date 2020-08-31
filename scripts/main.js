console.log("MAIN.JS LOADED");
import { ListOfficers } from "./officers/OfficerList.js"
import { ListCriminals } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

ListOfficers();
ListCriminals();
ConvictionSelect();