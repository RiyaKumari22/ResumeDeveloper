// Work Exp.
function AddWEfield() {
    // console.log("adding new work exp field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('wefield')
    newNode.classList.add('mt-2')

    newNode.setAttribute("placeholder", 'Enter here')


    let weOb = document.getElementById('we')
    let weAddButtonOb = document.getElementById('weAddButton')
    weOb.insertBefore(newNode, weAddButtonOb)
}
// Academic Qualifications
function Addeqfield() {
    let newNode2 = document.createElement('textarea')
    newNode2.classList.add('form-control')
    newNode2.classList.add('eqfield')
    newNode2.classList.add('mt-2')

    newNode2.setAttribute('placeholder', 'Enter here')
    let eqob = document.getElementById('eq')
    let AddeqfieldButtonOb = document.getElementById('eqAddButton')
    eqob.insertBefore(newNode2, AddeqfieldButtonOb)
}

// Skills

function AddSkill() {
    let newNode3 = document.createElement('textarea')
    newNode3.classList.add('form-control')
    newNode3.classList.add('skill')

    newNode3.classList.add('mt-2')
    newNode3.setAttribute('rows', 1)

    newNode3.setAttribute('placeholder', 'Enter here')
    let skOb = document.getElementById('sk')
    let skillsb = document.getElementById('skills')
    skOb.insertBefore(newNode3, skillsb)
}
// Languages
function Addlang() {
    let newNode4 = document.createElement('textarea')
    newNode4.classList.add('form-control')
    newNode4.classList.add('lg')

    newNode4.classList.add('mt-2')
    newNode4.setAttribute('rows', 1)

    newNode4.setAttribute('placeholder', 'Enter here')
    let lgOb = document.getElementById('lg')
    let langOb = document.getElementById('lang')
    lgOb.insertBefore(newNode4, langOb)
}
//Generate CV
function generateCV(){
    let name=document.getElementById('name').value;
    let nameT=document.getElementById('nameT')
    nameT.innerHTML=name;
    let nameT2=document.getElementById('nameT2')
    nameT2.innerHTML=name
let contact=document.getElementById('contact').value;
let contactT=document.getElementById('contactT')
contactT.innerHTML=contact
let email=document.getElementById('email').value;
let emailT=document.getElementById('emailT')
emailT.innerHTML=email
let address=document.getElementById('address').value;
let addressT=document.getElementById('addressT')
addressT.innerHTML=address
let fb=document.getElementById('Facebook').value;
let fbt=document.getElementById('fbT')
fbt.innerHTML=fb
let insta=document.getElementById('insta').value;
let instaT=document.getElementById('instaT')
instaT.innerHTML=insta
let link=document.getElementById('linked').value;
let linkT=document.getElementById('linkedT')
linkT.innerHTML=link
let obj=document.getElementById('obj').value
let objT=document.getElementById('objT')
objT.innerHTML=obj

// WE
let wes=document.getElementsByClassName('wefield')
let str=""
for (let e of wes) {
    str=str+ `<li> ${e.value} </li>`;
}
document.getElementById('weT').innerHTML=str;


//eq
let aqs=document.getElementsByClassName('eqfield')
let str1=""
for (let e of aqs) {
    str1=str1+ `<li> ${e.value} </li>`;
}
document.getElementById('eqT').innerHTML=str1;
//skills
let sks=document.getElementsByClassName('skill');
let str2="";
for (let e of sks) {
    str2= str2+ `<li> ${e.value} </li>`;
}
document.getElementById('skT').innerHTML=str2;
//lang
let lgs=document.getElementsByClassName('lg')
let str3=""
for (let e of lgs) {
    str3=str3+ `<li> ${e.value} </li>`;
}
document.getElementById('lgT').innerHTML=str3;
let file=document.getElementById('img').files[0]
console.log(file)

let reader=new FileReader()
console.log(reader.result)

reader.readAsDataURL(file)
reader.onloadend=function(){
document.getElementById('pic2').src=reader.result
}
document.getElementById('form').style.display='none'
document.getElementById('template').style.display='block'
document.getElementById('home').style.display='none'
document.getElementById('container1').style.display='none'


}
// generateCV
function printCV(){
    window.print()
}


          