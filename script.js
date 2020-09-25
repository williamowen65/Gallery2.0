const contact = document.querySelector('.contact');
const spacer = document.querySelector('.spacer');
const hidden = document.querySelectorAll('.hidden');
const homeBTN = document.querySelector('.homeBTN');
const originalsBTN = document.querySelector('.originalsBTN');
const printsBTN = document.querySelector('.printsBTN');
const originals = document.querySelector('.originals');
const prints = document.querySelector('.prints');
const flowersObtn = document.querySelector('.flowers-O');
const animalsPeopleObtn = document.querySelector('.animals-people-O');
const placesThingsObtn = document.querySelector('.places-things-O');
const flowersPbtn = document.querySelector('.flowers-P');
const animalsPeoplePbtn = document.querySelector('.animals-people-P');
const placesThingsPbtn = document.querySelector('.places-things-P');
const originalFlowers = document.querySelector('.originalFlowers');
const originalAnimals = document.querySelector('.originalAnimals');
const originalPlaces = document.querySelector('.originalPlaces');
const printFlowers = document.querySelector('.printFlowers');
const printAnimals = document.querySelector('.printAnimals');
const printPlaces = document.querySelector('.printPlaces');


console.log(printAnimals);
console.log(printPlaces);


homeBTN.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
   
});

originalsBTN.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    originals.classList.remove('hidden');
});

printsBTN.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    prints.classList.remove('hidden');
});

flowersObtn.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    originalFlowers.classList.remove('hidden');
});

animalsPeopleObtn.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    originalAnimals.classList.remove('hidden');
});

placesThingsObtn.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    originalPlaces.classList.remove('hidden');
});
flowersPbtn.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    printFlowers.classList.remove('hidden');
});

animalsPeoplePbtn.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    printAnimals.classList.remove('hidden');
});

placesThingsPbtn.addEventListener('click', () => {
    hidden.forEach(object => {
        object.classList.add('hidden');
    });
    printPlaces.classList.remove('hidden');
});



