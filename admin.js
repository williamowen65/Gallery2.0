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

    // console.log(image);

    db.collection('images').add(image).then(() => {
    // console.log('image added');
    // form.clear();
    }).catch(err => {
        console.log(err);
    });

    const imgSent = document.querySelector('.imgSent');
    imgSent.setAttribute('style','display: block;');
    setTimeout(() => {
        imgSent.setAttribute('style','display: none;');
        form.reset();
    },2500);


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

const deleteImage = (id) => {
    const imgDEMO = document.querySelectorAll('.tidy div');
    imgDEMO.forEach(image => {
        if(image.getAttribute('data-id') === id){
            image.remove()
        }
    });
  
};

db.collection('images').onSnapshot(snapshot => {
    console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        console.log(change);
        const doc = change.doc
        console.log(doc);
        if(change.type === 'added'){
            addImage(doc.data(), doc.id);
        } else if (change.type === 'removed'){
            deleteImage(doc.id);
        } else if (change.type === 'modified'){
        //     const docCategory = doc.data().category;
            const docTitle = doc.data().title;
            const docDimensions = doc.data().dimensions;
            const docSrc = doc.data().src;
            const docId = doc.id;
            

        //     console.log(docCategory,docTitle,docDimensions,docSrc, docId);

        const imgDEMO = document.querySelectorAll('.tidy div');
        imgDEMO.forEach(image => {
            if(image.getAttribute('data-id') === docId){
                image.children[0].setAttribute('src', docSrc);
                image.children[1].children[0].innerText = docTitle;
                image.children[1].children[1].innerText = docDimensions;
        //         const currentCat = image.parentElement.classList[0];
        //         if(currentCat !== docCategory){
        //             if(docCategory === "originalFlowers"){
        //                 /* UNFINSISHED */
        //                 originalFlowers.innerHTML += image;
        //             } else if(docCategory === "originalAnimals"){
        //                 originalAnimals.innerHTML += image;
        //             } else if(docCategory === "originalPlaces"){
        //                 originalPlaces.innerHTML += image;
        //             } else if(docCategory === "printFlowers"){
        //                 printFlowers.innerHTML += image;
        //             } else if(docCategory === "printAnimals"){
        //                 printAnimals.innerHTML += image;
        //             } else if(docCategory === "printPlaces"){
        //                 printPlaces.innerHTML += image;
        //             } 
            };
        }
        );
        }
    });
});





// db.collection('images').get().then((snapshot) => {
//     // console.log(snapshot.docs[1].data());
//     snapshot.docs.forEach(doc => {
//         // console.log(doc.id);
//         addImage(doc.data(), doc.id);
//     })
// }).catch(err => {
//     console.log(err);
// });



/* deleting and editing */

const allIMG = document.querySelector('.grid');

allIMG.addEventListener('dblclick', e => {
    // console.log(e.target.parentElement);
    


    const image = e.target.getAttribute('src');
    const id = e.target.parentElement.getAttribute('data-id');
    const title = e.target.nextElementSibling.firstElementChild.innerText;
    const dimensions = e.target.nextElementSibling.lastElementChild.innerText;
    const category = e.target.parentElement.parentElement.classList[0];
    // console.log(dimensions, e);
    const editForm = document.querySelector('.editor');
    const backdrop = document.querySelector('.backdrop');


    if(backdrop.getAttribute('style') === "display: none;"){
        


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
        <br>
        <small>if you edit category, reload page to see the change</small>
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
// console.log(deleteImg);
deleteImg.addEventListener('dblclick', () => {
if(confirm('are you sure?')){
    const id = document.querySelector('img.demo').getAttribute('data-id');
    db.collection('images').doc(id).delete();
    backdrop.setAttribute('style','display: none;');
    editForm.innerHTML ='';
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
    // console.log(id);
    db.collection('images').doc(id).update({
        "title": titlePop,
        "src": srcPop,
        "dimensions": dimensionsPop,
        "category": categoryPop
    });

    const editForm = document.querySelector('.editor');
    const backdrop = document.querySelector('.backdrop');
    const sent = document.querySelector('.sent');

    sent.setAttribute('style','display: block;');
    setTimeout(() => {
        sent.setAttribute('style','display: none;');
    }, 3000);
    setTimeout(() => {
        backdrop.setAttribute('style','display: none;');
        editForm.innerHTML = '';

    },3500);
});




 