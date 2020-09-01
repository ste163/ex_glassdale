import { getOfficers, useOfficers } from './OfficerProvider.js'

const eventHub = document.querySelector(".container");



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