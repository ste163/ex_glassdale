import { getOfficers, useOfficers } from './OfficerProvider.js'

const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", e => {
    if (e.target.id === "officerSelect") {
        const selectedOfficer = e.target.value;
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        eventHub.dispatchEvent(customEvent);
    }
})

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        const officerArray = useOfficers();
        renderOfficers(officerArray);
    })
}

const renderOfficers = (officersArr) => {
    const domTarget = document.querySelector(".filters__incarceration");
    return domTarget.innerHTML = `
    <label for "officerSelect">Show criminal by convicting officer: <label>
    <select class="dropdown" id="officerSelect">
    <option value="0">Please select an officer...</option>
    ${
        officersArr.map(officer => {
            return `
            <option>${officer.name}</option>
            `
        })
    }
    `
}