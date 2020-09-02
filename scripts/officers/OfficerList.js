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
        renderOfficers(officerArray);
    })
};

const renderOfficers = (officerArr) => {
    const domElement = document.querySelector(".officersContainer");
    let HTMLArray = officerArr.map(officer => OfficerHTML(officer))
    domElement.innerHTML = HTMLArray.join("");
}