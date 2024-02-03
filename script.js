const input = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const first = /1 [0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
const second = /1 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
const third = /1\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
const fourth = /1 [0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]/;
const fifth = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
const sixth = /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
const seventh = /\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;

const acceptable = [first, second, third, fourth, fifth, sixth, seventh];

const validate = () => {
  if (input.value === '') {
    alert("Please provide a phone number");
    return
  }
  
};

check.addEventListener("click", validate);

clear.addEventListener("click", () => result.textContent = "");