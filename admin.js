/* FORM CONTROLS */

const form = document.querySelector('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const image = {
        title: form.title.value,
        category: form.category.value,
        dimensions: form.dimensions.value,
        src: form.src.value,
        divClass: form.divClass.value,
        spanClass: form.spanClass.value
    };

    console.log(image);

db.collection('images').add(image).then(() => {
    console.log('image added');
    // form.clear();
    }).catch(err => {
        console.log(err);
    });
});





/* dashboard, see which files are where and their info, be able to edit */


const originalFlowers = document.querySelector('.originalFlowers');
const originalAnimals = document.querySelector('.originalAnimals');
const originalPlaces = document.querySelector('.originalPlaces');
const printFlowers = document.querySelector('.printFlowers');
const printAnimals = document.querySelector('.printAnimals');
const printPlaces = document.querySelector('.printPlaces');







const addImage = (image, id) => {
    let html = `
    <div class="${image.divClass}" data-id="${id}">
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
        // console.log(doc.id);
        addImage(doc.data(), doc.id);
    })
}).catch(err => {
    console.log(err);
});



/* deleting and editing */

const allIMG = document.querySelector('.grid');

allIMG.addEventListener('dblclick', e => {
    // console.log(e.target.parentElement);
    
    const id = e.target.parentElement.getAttribute('data-id');
    console.log(db.collection('images').doc(id).update({
       "title": "Made it to Shi Shi"
    }));
});