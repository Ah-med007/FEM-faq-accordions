const first = document.querySelector(".firstH2");
const second = document.querySelector(".secondH2");
const third = document.querySelector(".thirdH2");
const fourth = document.querySelector(".fourthH2");

first.addEventListener("click", (event) => {
    const minusIcon = document.querySelector(".minusIcon");
    const plusIcon = document.querySelector(".plusIcon");
    const para = document.querySelector(".para");

    plusIcon.classList.toggle("hide");
    minusIcon.classList.toggle("hide");
    para.classList.toggle("hide")
});
second.addEventListener("click", (event) => {
    const minusIcon = document.querySelector(".minusIcon2");
    const plusIcon = document.querySelector(".plusIcon2");
    const para2 = document.querySelector(".para2");

    plusIcon.classList.toggle("hide");
    minusIcon.classList.toggle("hide");
    para2.classList.toggle("hide")
});
third.addEventListener("click", (event) => {
    let minusIcon = document.querySelector(".minusIcon3");
    let plusIcon = document.querySelector(".plusIcon3");
    let para3 = document.querySelector(".para3");

    plusIcon.classList.toggle("hide");
    minusIcon.classList.toggle("hide");
    para3.classList.toggle("hide")
});
fourth.addEventListener("click", (event) => {
    let minusIcon = document.querySelector(".minusIcon4");
    let plusIcon = document.querySelector(".plusIcon4");
    let para4 = document.querySelector(".para4");

    plusIcon.classList.toggle("hide");
    minusIcon.classList.toggle("hide");
    para4.classList.toggle("hide")
});





/* myH2.forEach(myH2 =>{myH2.addEventListener("click", (event) =>{
    
})
}) */

