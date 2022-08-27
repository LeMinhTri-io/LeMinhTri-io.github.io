// BACK TO TOP
function backtotop() {
    document.querySelector('.footer__backtotop img').addEventListener('click', () => {
        window.scrollTo({
            'top': 0,
            behavior: 'smooth'
        });
    })
}
// LANGUAGE
function lang() {
    let lang = document.querySelector('.header__right-lang'),
        langselect = document.querySelector('.select'),
        langselectclick = document.querySelectorAll('.select ul li'),
        currenttext = document.querySelector('.current');
    lang.addEventListener('click', (e) => {
        e.stopPropagation();
        langselect.classList.toggle('active');
    })
    langselectclick.forEach((item) => {
        item.addEventListener('click', () => {
            let temp = currenttext.textContent;
            currenttext.innerHTML = item.textContent;
            item.textContent = temp;
        })
    })
    document.addEventListener('click', () => {
        langselect.classList.remove('active');
    })
}
//SLIDER BANNER
function sliderbanner() {
    let elem = document.querySelector('.slider__wrap'),
        next = document.querySelector('.next'),
        pre = document.querySelector('.pre');
    var flkty = new Flickity(elem, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 1500,
    });
    next.addEventListener('click', () => {
        flkty.next(true);
    })
    pre.addEventListener('click', () => {
        flkty.previous(true);
    })
}
// BACKGROUND HEADER
function backgroundhd() {
    let headerheight = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > headerheight.clientHeight) { headerheight.classList.add('bgr'); }
        else { headerheight.classList.remove('bgr'); }
    })
}
// SCROLL WINDOW
function srcollwd() {
    let headerload = document.querySelector('.header__load'),
        heightwindow = window.innerHeight,
        temp = document.body.offsetHeight - heightwindow;
    window.addEventListener('scroll', () => {
        headerload.style.width = `${(window.pageYOffset / temp) * 100}%`;
    })
}
// NAV MOBILE
function navmobile() {
    const hamburger = document.querySelectorAll('.nav');
    hamburger.forEach(item => {
        item.addEventListener('click', (event) => {
            item.classList.toggle("open");
        });
    });
}
// HAMBURGER
function openhamburger() {
    let nav = document.querySelector('.header__right-wrapper .nav');
    let opennav = document.querySelector('.header__hamburger');
    nav.addEventListener('click', () => {
        opennav.classList.toggle('active');
    })
}
// SLIDER EVENT
function sliderevent() {
    var el = document.querySelector('.event__slider-carousel');
    var flkty = new Flickity(el, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        autoPlay: 1500,
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true

    });
}
// SLIDER SERVICE
function sliderservice() {
    let sli = document.querySelector('.services__sliderwrap');
    var flkty = new Flickity(sli, {
        // options
        cellAlign: 'left',
        contain: true,
        // pageDots: false,
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true

    });
}

// TABS
let tabs = document.querySelectorAll('.library__content-tabs .item');
let list = document.querySelectorAll('.library__content-list .item');
tabs.forEach(item => {
    item.addEventListener('click', () => {
        tabs.forEach(e => {
            e.classList.remove('active');
        })
        item.classList.add('active');
        let id = item.getAttribute('data-tab');
        list.forEach(e => {
            e.classList.remove('active');
        })
        document.querySelector(`.item-${id}`).classList.add('active');
    })
})
// WINDOWLOAD
let loading = document.querySelector('.loading');
window.addEventListener('load', () => {
    loading.classList.add('hiden');
})
window.addEventListener('load', () => {
    backtotop();
    lang();
    backgroundhd();
    navmobile();
    openhamburger();
    sliderevent();
    sliderservice();
    sliderbanner();
    srcollwd();
})
/// ROTATE
let rotateimg = document.querySelector('.imgblog');
function rotate() {
    setInterval(() => {
        rotateimg.style.transform += `rotate(${45}deg)`;
    }, 50);
}
rotate();
// DOW
function dow() {
    let clickitem = document.querySelectorAll('.listitem .item');
    clickitem.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        })
    })
}
dow();
// MODAL VIDEO
let video = document.querySelector('.video__content'),
    popup = document.querySelector('.modalvideo'),
    iframemodal = document.querySelector('.modalvideo__inner-iframe iframe'),
    close = document.querySelector('.modalvideo__inner-close');
function modalvideo() {
    video.addEventListener('click', (item) => {
        item.stopPropagation();
        popup.classList.add('active');
        let id = video.getAttribute("data-video");
        iframemodal.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
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