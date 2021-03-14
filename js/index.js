/* SELECTED HTML ELEMENTS */

const language = document.querySelector('.language');
const userInput = document.querySelector('.input');
const translation = document.querySelector('.output');
const pastInputs = document.querySelector('.cont_b');
const btn = document.querySelector('.convert')

let mem = [];

window.onload = () => {
    if(localStorage.getItem('projectData') != null) {
        let dataJSON = JSON.parse(localStorage.getItem('projectData'));
        mem = dataJSON;
        history(mem)
    } else {
        mem = [];
        pastInputs.innerHTML = 'No Previous translations Made'
    }
} 

btn.addEventListener('click', () => {

    save(language.value, userInput.value, translation.value);

})

let save = (...args) => {

    let obj = {
        "language" : args[0],
        "userInput" : args[1],
        "transition" : args[2]
    }
    mem.push(obj);
    let dataJSON = JSON.stringify(mem)
    localStorage.setItem('projectData', dataJSON);

}

let history = () => {
    console.log(mem);
    for(let i in mem) {
       let info = document.createTextNode(mem[i].language)
       pastInputs.appendChild(info)
    }
}
 