const contact = document.querySelector('.contact');
const spacer = document.querySelector('.spacer');
const hidden = document.querySelectorAll('.hidden');
const homeBTN = document.querySelector('.homeBTN');
const originalsBTN = document.querySelector('.originalsBTN');
const printsBTN = document.querySelector('.printsBTN');
const homeBTNDD = document.querySelector('.homeBTNDD');
const originalsBTNDD = document.querySelector('.originalsBTNDD');
const printsBTNDD = document.querySelector('.printsBTNDD');
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
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const hiddenElements = document.querySelectorAll('.hide');



hamburger.addEventListener('click', () => {
 
    // originals.classList.add('hidden');
    // prints.classList.add('hidden');
    // flowersObtn.classList.add('hidden');
    // animalsPeopleObtn.classList.add('hidden');
    // placesThingsObtn.classList.add('hidden');
    // flowersPbtn.classList.add('hidden');
    // animalsPeoplePbtn.classList.add('hidden');
    // placesThingsPbtn.classList.add('hidden');
    // originalFlowers.classList.add('hidden');
    // originalAnimals.classList.add('hidden');
    // originalPlaces.classList.add('hidden');
    // printFlowers.classList.add('hidden');
    // printAnimals.classList.add('hidden');
    // printPlaces.classList.add('hidden');
   
    // if(!spacer.classList.contains('hidden')) {
    //     spacer.classList.add('hidden');
    //     mobileNav.classList.add('hidden');
    // } else {
    //     spacer.classList.remove('hidden');
    //     mobileNav.classList.remove('hidden');
    // }




    const result = [...hiddenElements].filter(element => !element.classList.contains('hidden'));


        if(result[0] && !mobileNav.classList.contains('hidden')){
            spacer.classList.add('hidden');
            mobileNav.classList.add('hidden');
        }else if(result[0]){
            spacer.classList.add('hidden');
            mobileNav.classList.remove('hidden');
            // result[0].classList.remove('hidden');
       }else if(!result[0]){
        spacer.classList.remove('hidden');
        mobileNav.classList.remove('hidden');
       } 
   

 
       
});


homeBTNDD.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    originalFlowers.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');
    
});

originalsBTNDD.addEventListener('click', () => {
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    originalFlowers.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    originals.classList.remove('hidden');
    flowersObtn.classList.remove('hidden');
    animalsPeopleObtn.classList.remove('hidden');
    placesThingsObtn.classList.remove('hidden');
});

printsBTNDD.addEventListener('click', () => {
    originals.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalFlowers.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    prints.classList.remove('hidden');
    flowersPbtn.classList.remove('hidden');
    animalsPeoplePbtn.classList.remove('hidden');
    placesThingsPbtn.classList.remove('hidden');

});



homeBTN.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    originalFlowers.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');
    
});

originalsBTN.addEventListener('click', () => {
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    originalFlowers.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    originals.classList.remove('hidden');
    flowersObtn.classList.remove('hidden');
    animalsPeopleObtn.classList.remove('hidden');
    placesThingsObtn.classList.remove('hidden');
});

printsBTN.addEventListener('click', () => {
    originals.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalFlowers.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    prints.classList.remove('hidden');
    flowersPbtn.classList.remove('hidden');
    animalsPeoplePbtn.classList.remove('hidden');
    placesThingsPbtn.classList.remove('hidden');

});






flowersObtn.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    originalFlowers.classList.remove('hidden');
});

animalsPeopleObtn.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalPlaces.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    originalAnimals.classList.remove('hidden');
});

placesThingsObtn.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    originalPlaces.classList.remove('hidden');
});
flowersPbtn.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    printAnimals.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    printFlowers.classList.remove('hidden');
});

animalsPeoplePbtn.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printPlaces.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    printAnimals.classList.remove('hidden');
});

placesThingsPbtn.addEventListener('click', () => {
    originals.classList.add('hidden');
    prints.classList.add('hidden');
    flowersPbtn.classList.add('hidden');
    animalsPeoplePbtn.classList.add('hidden');
    placesThingsPbtn.classList.add('hidden');
    flowersObtn.classList.add('hidden');
    animalsPeopleObtn.classList.add('hidden');
    placesThingsObtn.classList.add('hidden');
    originalAnimals.classList.add('hidden');
    printFlowers.classList.add('hidden');
    printAnimals.classList.add('hidden');
    spacer.classList.add('hidden');
    mobileNav.classList.add('hidden');

    printPlaces.classList.remove('hidden');
});



