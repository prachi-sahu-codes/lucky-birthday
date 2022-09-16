const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerHTML = "Your birthday is Lucky!!🤩";
  } else {
    outputBox.innerHTML = "Your birthday is not Lucky!!🥺";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function checkBirthdayLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && luckyNo.value) {
    compareValues(sum, luckyNo.value);
  } else {
    outputBox.innerHTML = "Please enter both the fields!!🙄";
  }
}

checkBtn.addEventListener("click", checkBirthdayLucky);

function toggle() {
  const blur = document.getElementById("blur");
  blur.classList.toggle("hide");
  const popup = document.getElementById("popup");
  popup.classList.toggle("hide");
}
