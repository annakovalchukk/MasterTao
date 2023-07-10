$(document).ready(function() {

    $('.first-screen-slider').slick({
        dots: true,
        infinite: true,
        appendArrows: '.first-screen-slider__arrows',
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
            }
        }, ]
    });

});

const checkbox = document.querySelectorAll('[type="checkbox"]')

console.log(checkbox);

checkbox.forEach(item => {
    item.closest('.input-box').classList.add('has-checkbox')
    item.closest('.input-column').classList.add('padding')
})

document.getElementById('myfile').onchange = function() {
    document.getElementById('file-name').innerHTML = this.value;
}