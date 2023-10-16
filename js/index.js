// 메뉴 hover
const menu_el = document.querySelectorAll(".menu-title");
console.log(menu_el);


menu_el.forEach((menu, index) => {
    let child = menu.lastElementChild;
    console.log(child);
    menu.addEventListener('mouseover', ()=>{
        let submenus = document.querySelector('.dropdown');
        console.log(submenus);
        if (submenus) {
            submenus.classList.remove('dropdown');
        }
        child.classList.add('dropdown');
    });
    child.addEventListener('mouseout',()=>{
        child.classList.remove('dropdown');
    });
});


// hover시 위치에 따라 좌 우로 이동
// slide-wrapper
let slide_wrapper = document.querySelector('.slide-wrapper');
let slide_active = document.querySelector('.slide.active');

let slide_left = slide_active.previousElementSibling;
let slide_right = slide_active.nextElementSibling;
// 왼쪽 슬라이드 호버
slide_left.addEventListener('mouseover', ()=> {
    slide_wrapper.style.left='-99%';
});
slide_left.addEventListener('mouseout',()=>{
    slide_wrapper.style.left='-100%';
});
// 오른쪽 슬라이드 호버
slide_right.addEventListener('mouseover', ()=> {
    slide_wrapper.style.left='-101%';
 });
 slide_right.addEventListener('mouseout',()=>{
    slide_wrapper.style.left='-100%';
 });
