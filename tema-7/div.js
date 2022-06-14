let onClickedDiv = function() {
    let clickedDiv = document.querySelector('.divDimensions');
    
    if (clickedDiv.classList.contains('divFirstPosition')) {
        clickedDiv.classList.remove('divFirstPosition');
        clickedDiv.classList.add('divSecondPosition');
    } else {
        clickedDiv.classList.add('divFirstPosition');
        clickedDiv.classList.remove('divSecondPosition');
    }
}

let myDiv = document.querySelector('.divDimensions');
myDiv.addEventListener('click', onClickedDiv);

/*let mediaQuery = window.matchMedia('(min-width: 500px)');
if (mediaQuery.matches) {
    let onClickedDiv500 = function(){
        let clickedDiv500 = document.querySelector('.divDimensions');
        clickedDiv500.style.bottom = '0';
        clickedDiv500.style.right = '0';
        clickedDiv500.style.margin = '0px 5px 5px 0px'
    }
    myDiv.addEventListener('click', onClickedDiv500);
}*/