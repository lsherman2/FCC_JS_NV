const input = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const first = /(?:^|\s)([1-9])+ [0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const second = /(?:^|\s)1 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const third = /(?:^|\s)1\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const fourth = /(?:^|\s)1 [0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9](?:$|\s)/;
const fifth = /(?:^|\s)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9](?:$|\s)/;
const sixth = /(?:^|\s)[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const seventh = /(?:^|\s)\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;

const acceptable = [first, second, third, fourth, fifth, sixth, seventh];

const checkCountry = (num) => {
  const regex = /(?:^)[0-9][0-9]?[\s\(]/;
  const country = num.slice().match(regex);
  if (country !== null) {
    const countryNum = parseInt(country[0]);
    if (countryNum !== 1) {
      return false;
    }
  }
  return true;
};

const isCorrect = (num) => {
  if (checkCountry(num)) {
    return acceptable.some((regex) => regex.test(num))
  } else {
    return false
  }
};

const validate = () => {
  if (input.value === '') {
    alert("Please provide a phone number");
    return
  }

  checkCountry(input.value);

  result.textContent = isCorrect(input.value)
    ? `Valid US number: ${input.value}`
    : `Invalid US number: ${input.value}`;
  input.value = "";
};

check.addEventListener("click", validate);

clear.addEventListener("click", () => result.textContent = "");