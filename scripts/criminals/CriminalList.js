import { CriminalHTML } from "./CriminalHTML.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container");


eventHub.addEventListener("crimeChosen", e => {
    if ("chosenCrime" in e.detail) {
        const criminalArray = useCriminals();
        const filteredArray = criminalArray.filter(each => {
            return each.conviction === e.detail.chosenCrime;
        })
        
        renderCriminals(filteredArray);
    }
})

export const ListCriminals = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals();
        renderCriminals(criminalArray);
    })
}

const renderCriminals = (criminalsArr) => {
    const domElement = document.querySelector(".criminalsContainer");
    let HTMLArray = criminalsArr.map(criminal => CriminalHTML(criminal));
    domElement.innerHTML = HTMLArray.join("");
}