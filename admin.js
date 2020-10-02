const originalFlowersContainer = document.querySelector('.originalFlowers');


console.log(originalFlowersContainer);




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
        originalFlowersContainer.innerHTML += html;
    }
};

db.collection('images').get().then((snapshot) => {
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        addImage(doc.data());
    })
}).catch(err => {
    console.log(err);
});
