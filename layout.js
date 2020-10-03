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
const footer = document.querySelector('footer');


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

        console.log(result);


        if(result[0] && !mobileNav.classList.contains('hidden')){
            spacer.classList.add('hidden');
            mobileNav.classList.add('hidden');   
            footer.classList.add('hidden');
            // console.log('one');
        
        }else if(result[0]){
            spacer.classList.add('hidden');
            mobileNav.classList.remove('hidden');
            // result[0].classList.remove('hidden');
            footer.classList.remove('hidden');
            // console.log('two');


       }else if(!result[0]){
        spacer.classList.remove('hidden');
        mobileNav.classList.remove('hidden');
        footer.classList.remove('hidden');
        // console.log('three');

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
    
        if(footer.classList[0] === 'hidden'){
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');        
        }

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
    footer.classList.add('hidden');

    
    // const result = [...hiddenElements].filter(element => !element.classList.contains('hidden'));
    // if(!result[0] && footer.classList[0] === 'hidden'){
    // }else if(result[0]){
    //     footer.classList.add('hidden');        
    // } 

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

    if(footer.classList[0] === 'hidden'){
        footer.classList.remove('hidden');
    }

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

    if(footer.classList[0] === 'hidden'){
        footer.classList.remove('hidden');
    }

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








const addImage = (image) => {
    let html = `
    <div class="${image.divClass}">
        <img src="${image.src}" alt="">        
        <span class="${image.spanClass}">
            <p class="title">${image.title}</p>
            <p class="dimensions">${image.dimensions}</p>
        </span>
    </div>
    `;
    
    if(image.category === "originalFlowers"){
        originalFlowers.innerHTML += html;
    }else if(image.category === "originalAnimals"){
        originalAnimals.innerHTML += html;
    }else if(image.category === "originalPlaces"){
        originalPlaces.innerHTML += html;
    }else if(image.category === "printFlowers"){
        printFlowers.innerHTML += html;
    }else if(image.category === "printAnimals"){
        printAnimals.innerHTML += html;
    }else if(image.category === "printPlaces"){
        printPlaces.innerHTML += html;
    }
};

db.collection('images').get().then((snapshot) => {
    // console.log(snapshot.docs[1].data());
    snapshot.docs.forEach(doc => {
        addImage(doc.data());
    })
}).catch(err => {
    console.log(err);
});
