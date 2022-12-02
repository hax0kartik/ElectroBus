let pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

slide = () => {
pages = document.querySelectorAll(".page");
translate !== translateAmount ? translate = 100 : translate = 0;
pages.forEach(
    page => (page.style.transform = `translateX(-${translate}%)`)
  );
}

setInterval(slide, 10000)