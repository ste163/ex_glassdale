import { CriminalHTML } from "./CriminalHTML.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

export const ListCriminals = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals();
        addCriminalsToDOM(criminalArray);
    })
}

const addCriminalsToDOM = (criminalsArr) => {
    const domElement = document.querySelector(".criminalsContainer");
    let HTMLArray = criminalsArr.map(criminal => CriminalHTML(criminal));
    domElement.innerHTML = HTMLArray.join("");
}