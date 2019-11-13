for(let i = 0; i < 1024; i++){
    document.querySelector(".app").innerHTML += '<div></div>';
}
document.body.addEventListener('click', event => {
    event.target.style.backgroundColor = '#fff';
    event.target.style.border = '1 px dotted #111';
})
document.addEventListener('keydown', event => {
    if(event.key === 'a'){
        document.querySelector(".app").style.backgroundColor = '#00f';
    }
    if(event.key === 'b'){
        document.querySelector(".app").style.backgroundColor = '#f0f';
    }
    if(event.key === 'c'){
        document.querySelector(".app").style.backgroundColor = '#0ff';
    }
    if(event.key === 'd'){
        document.querySelector(".app").style.backgroundColor = '#ff0';
    }
    if(event.key === 'e'){
        document.querySelector(".app").style.backgroundColor = '#0f0';
    }
    if(event.key === 'f'){
        document.querySelector(".app").style.backgroundColor = '#604';
    }
    if(event.key === 'g'){
        document.querySelector(".app").style.backgroundColor = '#f00';
    }
    if(event.key === 'h'){
        document.querySelector(".app").style.backgroundColor = '#008';
    }
    if(event.key === 'i'){
        document.querySelector(".app").style.backgroundColor = '#f08';
    }
    if(event.key === 'j'){
        document.querySelector(".app").style.backgroundColor = '#6ff';
    }
    if(event.key === 'k'){
        document.querySelector(".app").style.backgroundColor = '#9f8';
        }
    if(event.key === 'l'){
        document.querySelector(".app").style.backgroundColor = '#3f8';
        }
    if(event.key === 'm'){
        document.querySelector(".app").style.backgroundColor = '#317';
        }
    if(event.key === 'n'){
        document.querySelector(".app").style.backgroundColor = '#31f';
        }
    if(event.key === 'o'){
        document.querySelector(".app").style.backgroundColor = '#d1f';
        }
    if(event.key === 'q'){
        document.querySelector(".app").style.backgroundColor = '#ddf';
        }
    if(event.key === 'r'){
        document.querySelector(".app").style.backgroundColor = '#dd1';
        }
    if(event.key === 's'){
        document.querySelector(".app").style.backgroundColor = '#0db';
        }
    if(event.key === 't'){
        document.querySelector(".app").style.backgroundColor = '#b0b';
        }
    if(event.key === 'u'){
        document.querySelector(".app").style.backgroundColor = '#b01';
        }
    if(event.key === 'v'){
        document.querySelector(".app").style.backgroundColor = '#e86';
        }
    if(event.key === 'w'){
        document.querySelector(".app").style.backgroundColor = '#e80';
        }
    if(event.key === 'x'){
        document.querySelector(".app").style.backgroundColor = '#180';
        }
    if(event.key === 'y'){
        document.querySelector(".app").style.backgroundColor = '#0ea';
        }
    if(event.key === 'z'){
        document.querySelector(".app").style.backgroundColor = '#0aa';
    }
})

document.querySelector('.clear').addEventListener('click', event => {
    window.location = window.location;
})