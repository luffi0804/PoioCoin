import { tag_languajes } from './data.js'
let ejecutar = document.getElementById('btn-languaje');
//let ejecutar2 = document.getElementById('btn-esp');
let imgLnaguaje = document.querySelector('#btn-languaje img');

function getUrlPage() {
    let sPath = window.location.pathname;
    let sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    return sPage;
}

function setContentHtml(tagId,tagHtml){
    let tag = document.getElementById(tagId);
    tag.innerHTML=tagHtml;
}

function setTextContent(tagId,tagContent){
    let tag = document.getElementById(tagId);
    tag.textContent=tagContent;
}


function translateHeaderFooter(languaje,tag_languajes) {
    tag_languajes.forEach(item =>{
        if(item.pagina=="header" || item.pagina=="footer"){
            if(languaje==1)
                item.tipo=="inner" ? setContentHtml(item.etiqueta,item.esp) : setTextContent(item.etiqueta,item.esp);
            if(languaje==2)
                item.tipo=="inner" ? setContentHtml(item.etiqueta,item.eng) : setTextContent(item.etiqueta,item.eng);
        }
    })
}

function translateContent(languaje,tag_languajes,pagina) {
    tag_languajes.forEach(item =>{
        if(item.pagina==pagina){
            if(languaje==1)
                item.tipo=="inner" ? setContentHtml(item.etiqueta,item.esp) : setTextContent(item.etiqueta,item.esp);
            if(languaje==2)
                item.tipo=="inner" ? setContentHtml(item.etiqueta,item.eng) : setTextContent(item.etiqueta,item.eng);
        }
    })
}


ejecutar.onclick=()=>{
    let languaje=localStorage.getItem("languaje");
    let page = getUrlPage();
    if(languaje==1){
        imgLnaguaje.src='/assets/img/eeuu.png';
        localStorage.setItem("languaje",2);
        translateHeaderFooter(2,tag_languajes)
        translateContent(2,tag_languajes,page);
    }else{
        if(languaje==2){
            imgLnaguaje.src='/assets/img/espain.png';
            localStorage.setItem("languaje",1);
            translateHeaderFooter(1,tag_languajes);
            translateContent(1,tag_languajes,page);
        }
    }
}

const init = () =>{
    let languaje = localStorage.getItem("languaje");
    let page = getUrlPage();
        if(languaje==null){
            console.log('Entre al null de idioma');
            translateHeaderFooter(1,tag_languajes);
            translateContent(1,tag_languajes,page);
            localStorage.setItem("languaje",1)
        }else{
            translateHeaderFooter(languaje,tag_languajes);
            translateContent(languaje,tag_languajes,page);
        }
}

init();



