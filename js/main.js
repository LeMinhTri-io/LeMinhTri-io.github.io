let header = document.querySelector('.header');
function bgrheader() {
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > header.clientHeight) header.classList.add('bgr');
        else header.classList.remove('bgr');
    })
}
bgrheader();
///language
let choose = document.querySelector('.header__right-lang'),
    current = document.querySelector('.current .lang'),
    select = document.querySelectorAll('.select ul li a');
function language() {
    choose.addEventListener('click', (e) => {
        e.stopPropagation();
        choose.classList.toggle('active');
    })
    select.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentText = current.textContent;
            current.innerHTML = this.textContent;
            this.innerHTML = currentText;
        })
    })
    document.addEventListener('click', () => {
        choose.classList.remove('active');
    })
}
language();
////menu-mobile
let nav = document.querySelector('.header__right-nav');
function navmb() {
    nav.addEventListener('click', () => {
        nav.classList.toggle('block');
    })
}
navmb();
///slider
// let sliders = document.querySelectorAll('.slider__wrap-item'),
//     next = document.querySelector('.arrow.--next'),
//     pre = document.querySelector('.arrow.--pre'),
//     number = document.querySelector('.slider__content-number .number'),
//     dots = document.querySelectorAll('.slider__content-number .dot ol li'),
//     numberslider = 0;
// function sliderclick() {
//     sliders.forEach((e, index) => {
//         if (e.classList.contains('slider-act')) {
//             numberslider = index;
//         }
//     })
//     next.addEventListener('click', () => {
//         if (numberslider < sliders.length - 1) slider(numberslider + 1)
//         else slider(0);
//     })
//     pre.addEventListener('click', () => {
//         if (numberslider > 0) slider(numberslider - 1)
//         else slider(sliders.length - 1);
//     })
//     dots.forEach((item, e) => {
//         item.addEventListener('click', () => {
//             slider(e);
//         })
//     })
// }
// function slider(index) {
//     sliders[numberslider].classList.remove('slider-act');
//     sliders[index].classList.add('slider-act');
//     dots[numberslider].classList.remove('active');
//     dots[index].classList.add('active');
//     numberslider = index;
//     number.innerHTML = (numberslider + 1).toString().padStart(2, '0');
// }
// sliderclick();
////
//scroll to section
let sc = document.querySelectorAll('.header__menu a');
function scrolltosection(temp) {
    temp.forEach((e) => {
        e.addEventListener('click', (item) => {
            item.preventDefault();
            let classname = e.getAttribute('href').replace('#', '');
            let section = document.querySelector(`.${classname}`);
            window.scrollTo({
                'top': section.offsetTop - header.clientHeight + 1,
                'behavior': 'smooth'
            })
        })
    })
}
scrolltosection(sc);
//scroll to section nav
let scnav = document.querySelectorAll('.hamburger__block a');
scrolltosection(scnav);

// back to top
function backtotop() {
    document.querySelector('.backtotop').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            'top': 0,
            'behavior': 'smooth'
        })
    })
}
backtotop();
///header-scroll
function headerscroll() {
    let scrollheader = document.querySelector('.header__scroll'),
        bodyheight = document.querySelector("body").offsetHeight,
        temp = bodyheight - window.innerHeight;
    window.addEventListener('scroll', () => {
        scrollheader.style.width = `${(window.pageYOffset / temp) * 100}%`;
        // console.log((window.pageYOffset / temp) * 100);
    })
}

//modalvideo
let circle = document.querySelectorAll('.quality__video .quality__video-item .circle'),
    popup = document.querySelector('.modalvideo'),
    iframemodal = document.querySelector('.modalvideo__inner-iframe iframe'),
    close = document.querySelector('.modalvideo__inner-close');
function modalvideo() {
    circle.forEach((e) => {
        e.addEventListener('click', (temp) => {
            temp.stopPropagation();
            popup.classList.add('active');
            let id = e.getAttribute('data-video');
            iframemodal.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`)
        })
    })
}
function closevideo() {
    close.addEventListener('click', () => {
        popup.classList.remove('active');
        iframemodal.setAttribute('src', ``);
    })
    document.addEventListener('click', () => {
        popup.classList.remove('active');
        iframemodal.setAttribute('src', ``);
    })
}
window.addEventListener('load', modalvideo);
closevideo();
//slider bottom
function sliderbottom() {
    let sliders = document.querySelector('.galleryslider');
    let flk = new Flickity(sliders, {
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false
    });
}
////galerry fancybox
Fancybox.bind("[data-fancybox", {
    infinite: false,
})
///new list
let tabs = document.querySelectorAll('.news__tabs-item');
let newslist = document.querySelectorAll('.news__list');
function TabsNew() {
    tabs.forEach((e) => {
        e.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.classList.remove('active');
            })
            e.classList.add('active');
            let id = e.getAttribute('data-tab');
            newslist.forEach((list) => {
                list.classList.remove('active');
            })
            document.querySelector('.news__list-' + id).classList.add('active');
        })
    })
}
////////
window.addEventListener("load", function () {
    sliderbottom();
    TabsNew();
    headerscroll();
})
///////////////
let elem = document.querySelector('.slider__wrap'),
    next = document.querySelector('.arrow.--next'),
    pre = document.querySelector('.arrow.--pre');
let flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    autoPlay:1500,
    on: {
        change: function (index) {
            numberslider(index);
        }
    }
});
next.addEventListener('click', () => {
    flkty.next(true);
})
pre.addEventListener('click', () => {
    flkty.previous(true);
})
function numberslider(index) {
    let number = document.querySelector('.slider__content-number .number');
    number.innerHTML = (index + 1).toString().padStart(2, '0');
}
function dots(){
    let slidernumber = document.querySelector('.slider__content-number');
    let flktdot = document.querySelector('.flickity-page-dots');
    slidernumber.appendChild(flktdot);
}
dots();