import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { WitnessHTML } from "./WitnessHTML.js"


const eventHub = document.querySelector(".container__main");

export const ListWitnesses = () => {
    getWitnesses()
    .then(() => {
        const witnessArray = useWitnesses();
        renderWitnesses(witnessArray);
    })
}

const renderWitnesses = (witnessArray) => {
    const domElement = document.querySelector(".card__witness-container")
    let HTMLArray = witnessArray.map(witness => WitnessHTML(witness));
    domElement.innerHTML = HTMLArray.join("")
}