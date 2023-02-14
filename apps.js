document.getElementById('boldId').addEventListener('click', function(){
    if(textarea.style.fontWeight == 'bold'){
        textarea.style.fontWeight = 'normal';
    }else{
        textarea.style.fontWeight = 'bold';
    }
})
document.getElementById('italic').addEventListener('click', function(){
    if(textarea.style.fontStyle == 'italic'){
        textarea.style.fontStyle = 'normal';
    }else{
        textarea.style.fontStyle = 'italic';
    }
})
document.getElementById('under-line').addEventListener('click', function(){
    if(textarea.style.textDecoration == 'underline'){
        textarea.style.textDecoration = 'none'
    }else{
        textarea.style.textDecoration = 'underline'
    }
})
// function f2(){
//     if(textarea.style.textDecoration == 'none'){
//         textarea.style.textDecoration = 'underline';
//     }else{
//         textarea.style.textDecoration = 'none';
//     }
// }
function f3(){
    textarea.style.textAlign = 'left';
}
function f4(){
    textarea.style.textAlign = 'center';
}
function f5(){
    textarea.style.textAlign = 'right';
}
function f6(){
    textarea.style.textAlign = 'justify';
}
function f7(){
    if(textarea.style.textTransform == 'uppercase'){
        textarea.style.textTransform = 'lowercase';
    }else{
        textarea.style.textTransform = 'uppercase';
    }
}
function f8(e){
    let eValue = e.value;
    textarea.style.color = eValue;
}
function f16(e){
    let value = e.value;
    textarea.style.fontSize = value + 'px';
}