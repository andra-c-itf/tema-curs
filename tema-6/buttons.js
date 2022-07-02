function press() {
    alert("The first button was pressed.");
}

let button2 = document.getElementById("button2");
let Button2 = document.createElement("button");
Button2.innerHTML = "Second";
button2.appendChild(Button2);

Button2.addEventListener("click", alertFunction); 
function alertFunction(){  
    alert("The second button was pressed.");
};

let createButton = function (Button) {
    let newButton = document.createElement("button");
    newButton.innerHTML = Button;
    return newButton;
};

let button3 = createButton("Start!");
let Button3 = document.getElementById("button3");
Button3.appendChild(button3);
  
let Step1 = createButton("Step 1");
button3.addEventListener("click", function () {
    Button3.appendChild(Step1);
});
  
let Step2 = createButton("Step 2");
Step1.addEventListener("click", function () {
    Button3.appendChild(Step2);
});

let Step3 = createButton("Step 3");
Step2.addEventListener("click", function () {
    Button3.appendChild(Step3);
});

let Step4 = createButton("Step 4");
Step3.addEventListener("click", function () {
    Button3.appendChild(Step4);
});
  
let Step5 = createButton("Step 5");
Step4.addEventListener("click", function () {
    Button3.appendChild(Step5);
});
Step5.addEventListener("click", function () {
    alert("You have reached the end, there are no more buttons!");
});

/*let n = prompt('Write the number of buttons you want: ')
n = parseInt(n);
let buttons = [];
buttons.length = n;
let text = ' '
let divButton4 = document.getElementById('button4')
for (let i = 1; i <= n; i++) {
    i = parseInt(i)
    buttons[i] = createButton('Button' + i)
    if (i === 1) {
        divButton4.appendChild(buttons[i])
        buttons[i].addEventListener('click', function () {
        divButton4.appendChild(buttons[i + 1])
        })
        } else {
            if (i < n) {
            buttons[i].addEventListener('click', function () {
                divButton4.appendChild(buttons[i + 1])
        })
            } else {
                buttons[i].addEventListener('click', function () {
                alert('You have reach the end, there are no more buttons')
                })
            }
    }
}
*/

let createAnotherButton = function(name, action) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.addEventListener('click', action);
    return button;
};
