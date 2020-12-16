let nav = document.querySelector("#menu_div")
let icon_div1 = document.querySelector("#icon_div_small1")
let icon_div2 = document.querySelector("#icon_div_small2")
let icon_div3 = document.querySelector("#icon_div_small3")
let nkar_div_h1 = document.querySelector("#nkar_div_h1")
let div_text_h2 = document.querySelectorAll(".div_text_h2")
let div_text_h2_2 = document.querySelector("#div_text_h2_2")
let text_p = document.querySelector("#text_p")
let hover_div_small = document.querySelectorAll(".hover_div_small")
let nkar_div_text_small = document.querySelectorAll(".nkar_div_text_small")
let italic_p = document.querySelectorAll(".italic_p")
window.addEventListener("scroll",()=>{
    if(scrollY>120){
        nav.style.backgroundColor="white"
        nav.style.height="60px"
        nav.style.boxShadow="0px 3px 6px lightblue"
    }
    if(scrollY<120){
        nav.style.backgroundColor="rgb(255, 255, 255,0)"
        nav.style.height="100px"
        nav.style.boxShadow="none"
    }
    if(scrollY>140){
        icon_div2.style.transform="scale(1)"
        icon_div1.style.left="0"
        icon_div3.style.left="0"

    }
    if(scrollY<140){
        icon_div2.style.transform="scale(1)"
        icon_div1.style.left="0"
        icon_div3.style.left="0"
    }
    if(scrollY>634){
        nkar_div_h1.style.transform="translate(0)"
        nkar_div_h1.style.opacity="1"
    }

    if(scrollY>1106){
        let i = 0;
        while(i<2){
            div_text_h2[i].style.transform="translate(0px)"
            i++
        }

        div_text_h2_2.style.transform="translate(0px)"

        text_p.style.transform="scale(1)"
    }
    if(scrollY>1750){
        let f = 0;
        while(f<hover_div_small.length){
            hover_div_small[f].style.transform="scale(1)"
            f++
        }
    }

    if(scrollY>2622){
        let y = 0;
        while(y<nkar_div_text_small.length){
            nkar_div_text_small[y].style.transform="rotate(360deg)"
            nkar_div_text_small[y].style.opacity="1"

            y++
        }
    }
    if(scrollY>3243){
        let s = 0;
        while(s<italic_p.length){
            italic_p[s].style.transform="scale(1)"
            s++
        }
    }
    console.log(scrollY);
})