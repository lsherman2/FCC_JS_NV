const input = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const first = /(?:^|\s)1 [0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const second = /(?:^|\s)1 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const third = /(?:^|\s)1\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const fourth = /(?:^|\s)1 [0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9](?:$|\s)/;
const fifth = /(?:^|\s)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9](?:$|\s)/;
const sixth = /(?:^|\s)[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const seventh = /(?:^|\s)\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;

const acceptable = [first, second, third, fourth, fifth, sixth, seventh];

const isCorrect = (num) => acceptable.some((regex) => regex.test(num));

const validate = () => {
  if (input.value === '') {
    alert("Please provide a phone number");
    return
  }

  result.textContent = isCorrect(input.value)
    ? `Valid US number: ${input.value}`
    : `Invalid US number: ${input.value}`;
  input.value = "";
};

check.addEventListener("click", validate);

clear.addEventListener("click", () => result.textContent = "");