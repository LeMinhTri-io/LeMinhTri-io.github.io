$(document).ready(()=>{
    $(".counter").counterUp({
        delay:10,
        time:1200
    });
});
window.addEventListener('scroll',()=>{
    const heading=document.documentElement('.heading');
    if(heading.documentElement.scrollTop>0)
    {
    
    }
})