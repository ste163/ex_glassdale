import { getConvictions, useConvictions } from "./ConvictionProvider.js"

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