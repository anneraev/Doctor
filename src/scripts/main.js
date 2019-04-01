const createDoctor = function(name, specialty, address){
    return {
        "name": name,
        "specialty": specialty,
        "address": address
    }
}

const createPet = function(petName, petBreed){
    return {
    name: petName,
    breed: petBreed
    }
}

console.log(createDoctor("Jane Wienberg", "General", "2933 Berry Hill Dr, Nashville, TN 37204"));

console.log(createPet("Sparky", "Corgi"));