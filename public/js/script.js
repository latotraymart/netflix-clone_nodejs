let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})


// setting owl carousel


$('#top-movies-slide').owlCarousel({
    items: 6,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        500: {
            items: 3
        },
        1280: {
            items: 4
        },
        1600: {
            items: 6
        }
    }
})
