export const WitnessHTML = (witnessObj) => {
    return `
    <section id="witness-${witnessObj.id}" class="card card__witness">
        <h5>${witnessObj.name}</h5>
        <p>Statement: ${witnessObj.statements}</p>
    </section>
    `
}