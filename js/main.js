(()=>{
console.log('fired');

const ageCheck = document.querySelector("#ageCheck");

let ageChecked = () => {
    console.log("age checked");
    ageCheck.style.display="none";
}

document.addEventListener("click", ageChecked);
})();