function makeSquare(){
    var items = document.querySelectorAll('.catigory_parnt .catigory');
    items.forEach(item => {

        item.style.height = item.offsetWidth + "px"; 
    });
};
makeSquare();
window.onresize  = makeSquare;

var product_sliders = document.querySelectorAll(".slider_imgs .imgs .img");
var main_img = document.querySelector(".product_img .main_img img");

product_sliders.forEach(function(element){
    element.onclick = function(){
        var el = element.closest('.img');
        product_sliders.forEach(item => {
            item.classList.remove("active");
        });
        el.classList.add('active');
        var el_img_src = el.getElementsByTagName('img')[0].src;

        main_img.src = el_img_src
    }
});

