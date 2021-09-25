let hamburger = document.getElementById('hamburger');
let links = document.getElementById('links');
hamburger.addEventListener('click',function(){
    if(links.style.display != 'block'){
        links.style.display = 'block';
    }
    else{
        links.style.display = 'none';
    }
})



    
