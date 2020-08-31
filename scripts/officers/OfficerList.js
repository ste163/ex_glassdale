import { OfficerHTML } from "./OfficerHTML.js";
import { getOfficers, useOfficers } from "./OfficerProvider.js";

export const ListOfficers = () => {
    // You have to use the .then, or else
    // The function will continue running BEFORE
    // all the browser can fetch all the data.
    // Once it's fully received the data, then
    // we run useOfficers() and it can run correctly.
    getOfficers()
    .then(() => {
        const officerArray = useOfficers();
        addOfficersToDOM(officerArray);
    })
};

const addOfficersToDOM = (officerArr) => {
    const domElement = document.querySelector(".officersContainer");
    //could do either map or forEach
    let HTMLArray = officerArr.map(officer => {
        return OfficerHTML(officer);
    })
    
    domElement.innerHTML = HTMLArray.join("");
}