import { CriminalHTML } from "./CriminalHTML.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container__main");


eventHub.addEventListener("crimeChosen", e => {
    if ("chosenCrime" in e.detail) {
        const criminalArray = useCriminals();
        const filteredArray = criminalArray.filter(each => {
            return each.conviction === e.detail.chosenCrime;
        })
        
        renderCriminals(filteredArray);
    }
})

eventHub.addEventListener("officerSelected", e => {
    if ("officer" in e.detail) {
        const criminalArray = useCriminals();
        const filteredArray = criminalArray.filter(each => {
            return each.arrestingOfficer === e.detail.officer
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
    const domElement = document.querySelector(".card__criminal-container");
    let HTMLArray = criminalsArr.map(criminal => CriminalHTML(criminal));
    domElement.innerHTML = HTMLArray.join("");
}