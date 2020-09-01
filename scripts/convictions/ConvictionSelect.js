import { getConvictions, useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", e => {
    if (e.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                chosenCrime: e.target.value
            }
        })
        eventHub.dispatchEvent(customEvent);
    }
})

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictionArray = useConvictions();
            convictionRenderer(convictionArray);
        })
}

const convictionRenderer = (convictionArr) => {
    const domTarget = document.querySelector(".filters__crime");
    return domTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${
        convictionArr.map(conviction => {
            return `
            <option>${conviction.name}</option>
            `
        }).join("")
        }
    </select>
    `
}