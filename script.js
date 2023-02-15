//INTERNAL FUNCTION
// var addbtn = document.querySelector('button');
// addbtn.addEventListener('click',function(){
//     alert('added');
// });

//EXTERNAL FUNCTION
var addbtn = document.querySelector('button');
var input = document.querySelector('.myinput');
var ul = document.querySelector('.order');
var h2 = document.querySelector('h2');
var mybody = document.querySelector('body');
// var li = document.querySelector('li');


function additem(){
    if(input.value.length > 0){
    var newinput = document.createElement('li');
    newinput.className = 'title';
    newinput.appendChild(document.createTextNode(input.value));
    ul.appendChild(newinput);
    var span = document.createElement('span');
    span.className = 'close';
    span.textContent = 'X';
    newinput.appendChild(span);
    input.value = "";
    }
    else{
        swal({
            text: "Text field cannot be empty",
            icon: "warning",
        });
    }
}

function keys(e){
    if(e.keyCode === 13){
        additem();
    }
        
}
function removeitem(e){
    if(e.target.classList.contains('close')){
        e.target.parentElement.remove();
    }
}
function markdone(e){
    if(e.target.classList.contains('title')){
        document.querySelector('li').classList.toggle("done");
        // e.target.parentElement.classList.toggle('done');
        // getElementsByClassName('title').toggle('done');
        
    }
}



addbtn.addEventListener('click',additem);
input.addEventListener('keydown',keys);
ul.addEventListener('click',removeitem);
ul.addEventListener('click',markdone);
// ul.addEventListener('click',removedone);






