/* const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
});
*/
var flkty = new Flickity('.main-carousel', {
    cellAlign: 'left',
    contain: true
});

// vanilla JS
var flkty = new Flickity('.carousel', {
    on: {
        ready: function () {
            console.log('Flickity is ready');
        },
        change: function (index) {
            console.log('Slide changed to' + index);
        }
    }
});