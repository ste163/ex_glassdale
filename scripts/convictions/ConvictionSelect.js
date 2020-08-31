import { getConvictions, useConvictions } from "./ConvictionProvider.js"

export const ConvictionSelect = () => {
    const domTarget = document.querySelector(".filters__crime");
    getConvictions()
    .then(() => {
        const convictionArray = useConvictions();
        const rendered = convictionRenderer(convictionArray);
        domTarget.innerHTML = rendered;
    })
}

const convictionRenderer = (convictionArr) => {
    return `
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