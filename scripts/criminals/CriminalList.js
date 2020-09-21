import { CriminalHTML } from "./CriminalHTML.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"

const eventHub = document.querySelector(".container__main");


eventHub.addEventListener("crimeChosen", e => {
    if ("chosenCrime" in e.detail) {
        const criminalArray = useCriminals();
        const filteredArray = criminalArray.filter(each => {
            return each.conviction === e.detail.chosenCrime;
        })
        
        renderCriminals(filteredArray);
    }
})

eventHub.addEventListener("officerSelected", e => {
    if ("officer" in e.detail) {
        const criminalArray = useCriminals();
        const filteredArray = criminalArray.filter(each => {
            return each.arrestingOfficer === e.detail.officer
        })

        renderCriminals(filteredArray);
    }
})

// Get all the criminal data before rendering
export const ListCriminals = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
            const facilitiesArr = useFacilities();
            const crimFacArr = useCriminalFacilities();
            const criminalArray = useCriminals();

            renderCriminals(criminalArray, facilitiesArr, crimFacArr);
        })
}

// Render criminal HTML by mapping over all arrays to retrieve and connect data
// The Criminal Facilities Array contains the IDs that match Facilities with Criminals, it's the join table.
const renderCriminals = (criminalsArr, facilitiesArr, crimFacArr) => {
    const domElement = document.querySelector(".card__criminal-container");
    // First, iterate over each criminal in array
    domElement.innerHTML = criminalsArr.map(
        (criminalObj) => {
            // For each criminal, match the criminal's ID with the ID for the facility listed on the Criminal Facility array.
                // This will allow us to match the facility ID to the facility table and get the facility's name.
            const facilityRelationshipForCriminal = crimFacArr.filter(crimFac => crimFac.criminalId === criminalObj.id)

            // Convert the related IDs to facilities
            const facilities = facilityRelationshipForCriminal.map(crimFac => {
                const matchingFacilityIds = facilitiesArr.find(facility => facility.id === crimFac.id)
                return matchingFacilityIds;
            })
            return CriminalHTML(criminalObj, facilities)
        }
    ).join("")
}