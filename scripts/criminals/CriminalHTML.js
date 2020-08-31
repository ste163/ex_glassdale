export const CriminalHTML = (criminalObj) => {
    return `
    <section id="criminal-${criminalObj.id}>
        <h2>${criminalObj.name}</h2>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.incarceration} </p>
        <p>Term start: ${criminalObj.incarceration.start}</p>
        <p>Term end: ${criminalObj.incarceration.end}</p>
    </section>
    `
}