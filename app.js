//select calculator btn
const btn = document.querySelector(".submit-btn");

//callback funtion onclick event
btn.addEventListener("click", function () {
  //select input values
  const mass = document.querySelector("#weight").value;
  const height = document.querySelector("#Height").value;
  const Pointer = document.querySelector(".pointer");
  const comment = document.querySelector(".comment");

  //calculate BMI
  const BMI = mass / (height * height);

  // round the BMI decimal number into one decimal place
  const result = BMI.toFixed(1);

  //Output BMI result
  document.querySelector("#output").innerHTML = "Your BMI is " + " " + result;

  // conditionals underweight
  if (result < 18.5) {
    Pointer.classList.add("underweight");
    comment.innerHTML = "Underweight";
    comment.style.color = "#FFCC00";
  } else {
    Pointer.classList.remove("underweight");
  }

  // conditionals Normal
  if (result >= 18.5 && result <= 25) {
    Pointer.classList.add("normal");
    comment.innerHTML = "Normal Weight";
    comment.style.color = "#3ACB02";
  } else {
    Pointer.classList.remove("normal");
  }

  // conditionals overweight
  if (result > 25 && result <= 30) {
    Pointer.classList.add("overweight");
    comment.innerHTML = "Overweight";
    comment.style.color = "#F85407";

  } else {
    Pointer.classList.remove("overweight");
  }

  // conditionals obese
  if (result > 30) {
    Pointer.classList.add("obese");
    comment.innerHTML = "Obese";
    comment.style.color = "#EF3F2C";

  } else {
    Pointer.classList.remove("obes");
  }
});
