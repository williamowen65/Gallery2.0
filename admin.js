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