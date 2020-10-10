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
    form.reset();
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





/* Header Slideshow editing*/
const editSlideshow = document.querySelector('h2');
const container = document.querySelector('.slideShow');
// const form = document.querySelector('.new-image');
const defaultImg = document.querySelector('.default');


    /* Delete Slides */

    container.addEventListener('click', e => {
        if(e.target.parentElement.classList.contains('deleteSlide')){
           const id = e.target.parentElement.parentElement.getAttribute('data-id');
           e.target.parentElement.parentElement.remove(); 
           console.log(id);
            db.collection('images').doc(id).delete();
            // console.log('img deleted?');
            const allSlideImgs = document.querySelectorAll('.header');
            allSlideImgs.forEach(item => {
                const id = item.getAttribute('data-id');
                const src = item.firstElementChild.getAttribute('src');
                const totalproxy = item.getAttribute('total');
                const total = Number(totalproxy);
                console.log(id, src, typeof(total));
                db.collection('images').doc(id).update({
                    "header": true,
                    "src": src,
                    "total": total - 1
                })
            });
        }
    });




editSlideshow.addEventListener('click', () => {
        
        
    container.classList.remove('hide');
    
    const EXIT = document.querySelector('.close');
    EXIT.addEventListener('click', () => {
        container.classList.add('hide');
        const addSlidePop = document.querySelector('.addSlidePop');
        addSlidePop.classList.add('hide');
    });

});

     







const headerImgs = (doc) => {
    

    // console.log(doc[0].data().header);
    const template = (doc, id) => {
        let html = `
        <div class="header" data-id="${id}" total=${doc.total}>
            <img src="${doc.src}" alt="">        
            <div class="deleteSlide">
                <h3>Delete Image</h3>
                
            </div>
        </div>
        `;
        // container.innerHTML = "";
        container.innerHTML += html;
        // console.log(html);
       
    };
    // console.log(Array.isArray(doc),doc.src);
    
    if(Array.isArray(doc)){
        // console.log('hi');
        doc.forEach(doc =>{
            const allSlides = document.querySelectorAll('.header');
            allSlides.forEach(slide => {
                const id = slide.getAttribute('data-id');
                if(doc.id == id){
                    slide.remove();
                } 
            });

            template(doc.data(), doc.id);
        });
    } else {
            const id = doc.id;
            const defaultImg = document.querySelector('.default');

            let html = `
            <div class="headerDefault" data-id="${doc.id}">
                <img src="${doc.data().src}" alt="">        
            </div>
            `;
            defaultImg.innerHTML += html;

            
            // console.log(id);
    }

 
     /* ADD a Slide */
                
     const addSlideForm = document.querySelector('.addNewSlide');
     
    // console.log(addSlideForm);
    
    
     addSlideForm.addEventListener('submit', e => {
         e.preventDefault();
         let newSlideSrc = addSlideForm.src.value;
         const allSlides = document.querySelectorAll('.header');
    
         console.log(newSlideSrc, 'hi', allSlides);
    
         const readyShip = {
             header: true,
             src: newSlideSrc,
             total: allSlides.length + 1
         }
         // console.log(allSlides);
    
         db.collection('images').add(readyShip).then(()=>{
             addSlideForm.reset();
            //  console.log('sent img');
         }).catch(err => {
             console.log(err);
             
         });

        // const allSlides = document.querySelectorAll('.header');
        allSlides.forEach(slide => {
            const id = slide.getAttribute('data-id');
            const src = slide.firstElementChild.getAttribute('src');
            // console.log(id, src);
            db.collection('images').doc(id).update({
                "total": allSlides.length + 1,
                "src": src
            });

            // db.collection('images').doc(id).delete();
        });
        const imageSent = document.querySelector('.imageSent');

    
         imageSent.classList.remove('hide');
         setTimeout(() => {
            const addSlidePop = document.querySelector('.addSlidePop');
           
             addSlidePop.classList.add('hide');
             imageSent.classList.add('hide');
             console.log('timer');
  
            const EXIT = document.querySelector('.close');
            EXIT.addEventListener('click', () => {
                 container.classList.add('hide');
                const addSlidePop = document.querySelector('.addSlidePop');
                 addSlidePop.classList.add('hide');
             });    
         },3000);
    
    
         /* This is if modified*/
        //  const allSlides = document.querySelectorAll('.header');
    
        //  allSlides.forEach(slide => {
        //      const id = slide.getAttribute('data-id');
        //      const src = slide.getAttribute('src');
            //  db.collection('images').doc(id).update({
            //          "total": allSlides.length,
            //          "src": src
            //  });
        //  });
    

   
    
     });


   



    const formDefaultImage = document.querySelector('form.defaultImg');
    formDefaultImage.addEventListener('submit', e => {
        e.preventDefault();

        const defaultImgDOM = document.querySelector('.headerDefault');
        const defaultID = defaultImgDOM.getAttribute('data-id');
    
        console.log(defaultImgDOM.remove());
        db.collection('images').doc(defaultID).delete();
    
        const newSRC = formDefaultImage.newDefaultImg.value;
        console.log(newSRC);


        let image = {
            "headerDefault": true,
            "src": newSRC
        }
        
        db.collection('images').add(image);
        setTimeout(() => {
            changeImageDIV.classList.add('hide');
            formDefaultImage.reset();
        }, 3000);
        
    });

 /* Change Default Image */
 const changeImageBTN = document.querySelector('.change');
 const changeImageDIV = document.querySelector('.changeImage');
 console.log(changeImageDIV);
 
 changeImageBTN.addEventListener('click', e => {
    e.stopImmediatePropagation();
    changeImageDIV.classList.toggle('hide');
 });
 

};






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
            <p class="divClass"> ${image.divClass}</p>
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



let testArray = [];
// console.log(testArray, Array.isArray(testArray));

/* EVENT LISTENER ON THE DATABASE */
db.collection('images').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        // console.log(change);
        const doc = change.doc
        // console.log(doc);
      
        if(change.type === 'added'){
            if (doc.data().header === true){
                testArray.push(doc)
                
                let totalSlides = doc.data().total;
                // console.log(totalSlides, testArray);
                // console.log(doc.data());
                if(testArray.length == totalSlides){
                    headerImgs(testArray);
                    // console.log(testArray[0].data(), testArray[0].id);
                };
            } 
            else if (doc.data().headerDefault){
                /* Deafult Header */
                // console.log(doc.data());
                // headerImgs(doc.data());
                // console.log(typeof(doc), doc.data(), doc.id);
                headerImgs(doc);
            } 
            else {
                 addImage(doc.data(), doc.id);
            }
            // console.log(doc.data());
        } else if (change.type === 'removed'){
            deleteImage(doc.id);
        } else if (change.type === 'modified' && doc.data().header){
            // console.log('hi');
        } else if (change.type === 'modified'){
            /* Modifided content just affects DOM  */
     //     const docCategory = doc.data().category;
            const docTitle = doc.data().title;
            const docDimensions = doc.data().dimensions;
            const docSrc = doc.data().src;
            const docId = doc.id;
            const docPosition = doc.data().divClass;
            


        //     console.log(docCategory,docTitle,docDimensions,docSrc, docId);

        const imgDEMO = document.querySelectorAll('.tidy div');
        imgDEMO.forEach(image => {
            if(image.getAttribute('data-id') === docId){
                image.children[0].setAttribute('src', docSrc);
                image.children[1].children[0].innerText = docTitle;
                image.children[1].children[1].innerText = docDimensions;
                image.children[1].children[2].innerText = docPosition;

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
    })

        /* counts for category */

        const OFDivs = originalFlowers.children.length -2;
        const OFspan = document.querySelector('.numberOF');

        const OADivs = originalAnimals.children.length -2;
        const OAspan = document.querySelector('.numberOA');

        const OPDivs = originalPlaces.children.length -2;
        const OPspan = document.querySelector('.numberOP');

        const PFDivs = printFlowers.children.length -2;
        const PFspan = document.querySelector('.numberPF');

        const PADivs = printAnimals.children.length -2;
        const PAspan = document.querySelector('.numberPA');

        const PPDivs = printPlaces.children.length -2;
        const PPspan = document.querySelector('.numberPP');

// numberPF
// numberPA
// numberPP
        OFspan.innerText = OFDivs;
        OAspan.innerText = OADivs;
        OPspan.innerText = OPDivs;
        PFspan.innerText = PFDivs;
        PAspan.innerText = PADivs;
        PPspan.innerText = PPDivs;






        // /* *****AUtomats the feilds*******/
        const radio1 = document.querySelector('.radio1');
        const radios = document.querySelectorAll('.radio');

        const numberOF = document.querySelector('span.numberOF');
        const numberOA = document.querySelector('span.numberOA');
        const numberOP = document.querySelector('span.numberOP');
        const numberPF = document.querySelector('span.numberPF');
        const numberPA = document.querySelector('span.numberPA');
        const numberPP = document.querySelector('span.numberPP');

        const OF = Number(numberOF.innerText) + 1;
        const OA = Number(numberOA.innerText) + 1;
        const OP = Number(numberOP.innerText) + 1;
        const PF = Number(numberPF.innerText) + 1;
        const PA = Number(numberPA.innerText) + 1;
        const PP = Number(numberPP.innerText) + 1;

        function isEven(value){
            if (value%2 == 0){
                return true;
            } else {
                return false;
            }
        }


        radios.forEach((radio) => {
            radio.addEventListener('click', radio => {
            if(radio.target.parentElement.classList[0] === 'radio1'){
                // console.log("img" + numberOF.innerText);
                form.divClass.value = "img" + OF;
                if(isEven(OF)){
                    form.spanClass.value = 'even';
                } else {
                    form.spanClass.value = 'odd';
                }
            } else if(radio.target.parentElement.classList[0] === 'radio2'){
                form.divClass.value = "img" + OA;
                if(isEven(OA)){
                    form.spanClass.value = 'even';
                } else {
                    form.spanClass.value = 'odd';
                }
            } else if(radio.target.parentElement.classList[0] === 'radio3'){
                form.divClass.value = "img" + OP;
                if(isEven(OP)){
                    form.spanClass.value = 'even';
                } else {
                    form.spanClass.value = 'odd';
                }
            } else if(radio.target.parentElement.classList[0] === 'radio4'){
                form.divClass.value = "img" + PF;
                if(isEven(PF)){
                    form.spanClass.value = 'even';
                } else {
                    form.spanClass.value = 'odd';
                }
            } else if(radio.target.parentElement.classList[0] === 'radio5'){
                form.divClass.value = "img" + PA;
                if(isEven(PA)){
                    form.spanClass.value = 'even';
                } else {
                    form.spanClass.value = 'odd';
                }
            } else if(radio.target.parentElement.classList[0] === 'radio6'){
                form.divClass.value = "img" + PP;
                if(isEven(PP)){
                    form.spanClass.value = 'even';
                } else {
                    form.spanClass.value = 'odd';
                }
            } 
            });
        });
    });
// );





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
    const dimensions = e.target.nextElementSibling.firstElementChild.nextElementSibling.innerText;
    const position = e.target.nextElementSibling.lastElementChild.innerText;
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
        <input name="newDimensions" type="text" id="newDimensions" value='${dimensions}' required><br>
       <small> NOTE: Use <code>&lt;br&gt;</code> between sets of sizes (inserting a break)</small>
    </div>
    <div class="newInfo">
    <label for="newPosition"> position: </label>
    <input name="newPosition" type="text" id="newPosition" value="${position}">
    </div>
    <div class="newInfo">
        <label for="newCategory"> category: </label>
       
        <small>if you want to edit a category, delete & reconstruct</small>
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
    // const categoryPop = formPopup.newCategory.value;
    let positionPop = formPopup.newPosition.value;
    let copyPositionPop = positionPop.split('');
    copyPositionPop.splice(0,4);
    const goldenNumber = copyPositionPop.join('');


        function isEven(value){
            if (value%2 == 0){
                return 'even';
            } else {
                return 'odd';
            }
        }


    const spanClass = isEven(goldenNumber);
        // console.log(spanClass);

    const id = document.querySelector('img.demo').getAttribute('data-id');
    // console.log(id);
    db.collection('images').doc(id).update({
        "title": titlePop,
        "src": srcPop,
        "dimensions": dimensionsPop,
        // "category": categoryPop,
        "divClass": positionPop,
        "spanClass": spanClass
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










//* CALLED FROM INSIDE HTML*/
const addSlideFunction = () => {
    const addSlidePop = document.querySelector('.addSlidePop');
    addSlidePop.classList.toggle('hide');
};




