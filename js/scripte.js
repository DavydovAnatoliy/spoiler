let items = document.querySelectorAll('.item');

for (let item of items) {
    item.addEventListener('click', function () {
        let childs = this.children;
        console.log(this.parentElement);
        if (this.parentElement.classList.contains('one')){
            let colActive = document.querySelectorAll('.active');
            for (let active of colActive) {
                console.log(active);
                active.classList.remove('active');
            }
        }
for (let child of childs) {
            child.classList.toggle('active');
        }

    })
}