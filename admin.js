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
    


    const image = e.target.getAttribute('src');
    const id = e.target.parentElement.getAttribute('data-id');
    const title = e.target.nextElementSibling.firstElementChild.innerText;
    const dimensions = e.target.nextElementSibling.lastElementChild.innerText;
    const category = e.target.parentElement.parentElement.classList[0];
    console.log(dimensions, e);
    const editForm = document.querySelector('.editor');
    const backdrop = document.querySelector('.backdrop');


    if(backdrop.getAttribute('style') === "display: none;"){
        console.log('so');
        


    let html = ` <p class="exit">X</p>
    <img src="${image}" class="demo" data-id="${id}">
    <div class="newInfo">
        <label for="newTitle"> Title: </label>
        <input name="newTitle" type="text" id="newTitle" value="${title}" required>
    </div>
    <div class="newInfo">
        <label for="newImg"> SRC: </label>
        <input name="newImg" type="text" id="newImg" value="${image}" required>
    </div>
    <div class="newInfo">
        <label for="newDimensions"> dimensions: </label>
        <input name="newDimensions" type="text" id="newDimensions" value="${dimensions}" required><br>
        <small>NOTE: Use single quotes twice, not double quotes</small><br>
       <small> Use <code>&lt;br&gt;</code> between sets of sizes (inserting a break)</small>
    </div>
    <div class="newInfo">
        <label for="newCategory"> category: </label>
        <input name="newCategory" type="text" id="newCategory" value="${category}" required>
    </div>

    <input type="submit" class="button" value="send">
    <br>
    <h4 class="delete">Delete</h4>
    <small class="sent" style="display: none;">Update Completed</small>
    `;

editForm.innerHTML += html;
backdrop.setAttribute('style','display: block;');

/* double click out of box to exit */
setTimeout(() => {
const exit = document.querySelector('.exit');
exit.addEventListener('click', e => {
    // console.log(e.target.offsetParent.className);
    // console.log(e);
    
        // console.log('hi');
        backdrop.setAttribute('style','display: none;');
        editForm.innerHTML ='';
    
 
});
}, 5);



const deleteImg = document.querySelector('.delete');
console.log(deleteImg);
deleteImg.addEventListener('dblclick', () => {
if(confirm('are you sure?')){
    const id = document.querySelector('img.demo').getAttribute('data-id');
    db.collection('images').doc(id).delete();
};
});



    };

});


/* EDIT OR DELETE Backend */
const formPopup = document.querySelector('form.editor');

formPopup.addEventListener('submit', e => {
    e.preventDefault();
    // console.log('hi');
    const titlePop = formPopup.newTitle.value;
    const srcPop = formPopup.newImg.value;
    const dimensionsPop = formPopup.newDimensions.value;
    const categoryPop = formPopup.newCategory.value;

    const id = document.querySelector('img.demo').getAttribute('data-id');
    console.log(id);
    db.collection('images').doc(id).update({
        "title": titlePop,
        "src": srcPop,
        "dimensions": dimensionsPop,
        "category": categoryPop
    });

    const sent = document.querySelector('.sent');

    sent.setAttribute('style','display: block;');
    setTimeout(() => {
        sent.setAttribute('style','display: none;');
    }, 3000);
});




 