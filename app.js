//select calculator btn
const btn = document.querySelector(".submit-btn");

//callback funtion onclick event
btn.addEventListener('click', function(){
    //select input values
    const mass = document.querySelector("#weight").value
    const height = document.querySelector("#Height").value
    const Pointer = document.querySelector(".pointer");

    //calculate BMI
    const BMI = mass / (height * height);
     
    // round the BMI decimal number into one decimal place
     const result = BMI.toFixed(1);


    //Output BMI result
    document.querySelector("#output").innerHTML = "Your BMI is " + " " + result;

    // conditionals
    if(result < 18.5){
        Pointer.classList.add("underweight");
    }

});