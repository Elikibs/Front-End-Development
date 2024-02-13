const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatepassEl = document.getElementById("generatepass-el")
let firstpassEl = document.getElementById("firstpass-el")
let secondpassEl = document.getElementById("secondpass-el")
let passwordValueEl = document.getElementById("password-length")

let password = ""

function populatePass(){
    generatePass()
    firstpassEl.textContent = password
    password = ""
    generatePass()
    secondpassEl.textContent = password
    password = ""
    passwordValueEl.value = ""
}
function generatePass(){
    let passLength = passwordValueEl.value;
    for (let i = 0; i < passLength; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]
    }
    return password
}

