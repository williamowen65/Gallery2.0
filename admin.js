const originalFlowersContainer = document.querySelector('.originalFlowers');
const form = document.querySelector('form');









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
    // console.log(snapshot.docs[1].data());
    snapshot.docs.forEach(doc => {
        addImage(doc.data());
    })
}).catch(err => {
    console.log(err);
});




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
    form.clear();
    }).catch(err => {
        console.log(err);
    });
});