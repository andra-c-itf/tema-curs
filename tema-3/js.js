
let premise = 'What a nice day for ';
let activity1 = 'science';
let activity2 = 'running';
let activity3 = 'learning';
console.log (premise + activity3 + ' the ' + activity1 + ' of ' + activity2 + '.');


let a = 'Jane Smith has $12,450 in her bank account.\n';
let b = '$12,450 is a lot of money.\n';
let c = 'Jane Smith plans to buy a Toyota Yaris.\n';
let d = 'Jane Smith will use her $12,450 to buy a Toyota Yaris.\n';
let e = '$12,450 is a lot of money for a Toyota Yaris.\n';
let brake = '=============================================';

let firstPageElement = document.getElementById ('paragraph1');
let firstP = document.createElement('p');
firstP.innerHTML = a + "<br/>"+ b + "<br/>" + c + "<br/>"+ d + "<br/>"+ e +"<br/>"+ "<br/>"+ brake;
firstPageElement.appendChild(firstP);

let thePageElement2 = document.getElementById ('paragraph2');
let secondP = document.createElement('p');
secondP.innerHTML = b + "<br/>"+ e + "<br/>" + c + "<br/>"+ a + "<br/>"+ d +"<br/>"+ "<br/>"+ brake;
thePageElement2.appendChild(secondP);

let thePageElement3 = document.getElementById ('paragraph3');
let thirdP = document.createElement('p');
thirdP.innerHTML = c + "<br/>"+ e + "<br/>" + d + "<br/>"+ a + "<br/>"+ b;
thePageElement3.appendChild(thirdP);


