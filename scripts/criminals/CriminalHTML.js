import { AlibiDialogueHTML } from "./CriminalAlibiDialogue.js"

const eventHub = document.querySelector(".container__main");

//Alibi button click
eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = e.target.id.split("--")
        
        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(alibiEvent);
    }
})

export const CriminalHTML = (criminalObj, facilities) => {
    const startDate = new Date(criminalObj.incarceration.start).toLocaleDateString('en-US');
    const endDate = new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')
    return `
    <section id="criminal-${criminalObj.id}" class="card card__criminal">
        <h5>${criminalObj.name}</h5>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction} </p>
        <p>Term start: ${startDate}</p>
        <p>Term end: ${endDate}</p>
        <div class="criminal__facilities">
            <h6>Facilities</h6>
            <ul>
                ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
        </div>
        <button class="associates__btn" id="associates--${criminalObj.id}">Associate Alibis</button>
        ${AlibiDialogueHTML(criminalObj.id)}
    </section>
    `
}