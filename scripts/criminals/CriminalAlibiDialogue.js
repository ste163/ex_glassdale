import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container__main");


eventHub.addEventListener("associatesClicked", e => {
    //display all of clicked criminal's associates

    const targetCriminal = useCriminals().find(criminal => criminal.id === parseInt(e.detail.chosenCriminal))

    const alibiTarget = document.querySelector(`.alibiDialogue--${targetCriminal.id}`);

    const alibiHeadingTarget = document.querySelector("h6")
    
    if (alibiTarget.contains(alibiHeadingTarget)) {
        alibiTarget.innerHTML = ""        
    } else {
        alibiTarget.innerHTML = `${
            targetCriminal.known_associates.map(associate => {
                return `
                <h6>${associate.name}</h6>
                <p>${associate.alibi}</p>
                `
            }).join("")
        }`
    }
})

//We want this separate from the Criminal HTML, because this way
//we can place the alibi ANYWHERE
export const AlibiDialogueHTML = (criminalId) => {
    return `
    <span class="alibiDialogue--${criminalId}"></span>
    `
}