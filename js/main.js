let btn = document.querySelector('.generatePESEL');
let strongPESEL = document.querySelector('.peselNumber');
let strongName = document.querySelector('.name');



btn.addEventListener('click', function () {
  let nameSurname = document.querySelector('.nameSurname').value;
  let birthDate = document.querySelector('.birthDate');
  strongName.innerHTML = nameSurname;

  let peselYear = birthDate.value.substring(2, 4);


  let peselMonth;
  if ((birthDate.value.substring(0, 4) < 2000)) {
    peselMonth = birthDate.value.substring(5, 7);

  } else {
    peselMonth = (parseInt(birthDate.value.charAt(5) + 2, 10)).toString() + birthDate.value.substring(6, 7);

  }
  let peselDay = birthDate.value.substring(8, 10);
  let orderNumber = (Math.floor(Math.random() * 10)).toString() + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
  let femaleNumber = Math.floor(Math.random() * 5) * 2;
  let maleNumber = Math.floor((Math.random() * 5)) * 2 + 1;


  let peselWihtoutControlNumber;

  if (document.querySelector('.woman').checked) {
    peselWithoutControlNumber = peselYear + peselMonth + peselDay + orderNumber + femaleNumber;
    console.log(peselWithoutControlNumber);



  } else {
    peselWithoutControlNumber = peselYear + peselMonth + peselDay + orderNumber + maleNumber;
    console.log(peselWithoutControlNumber);
  }

  let numberArray = peselWithoutControlNumber.toString().split("")
  let factors = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let numArr = 0;
  let sumArr = 0;

  for (let i = 0; i < 10; i++) {
    numArr = numberArray[i] * factors[i];

    if (numArr < 10) {
      sumArr += numArr;
    } else {
      sumArr += parseInt(numArr.toString().charAt(1), 10)

    }

    let lastDigit;
    if (sumArr.toString().charAt(1) == 0) {
      lastDigit = 0;
    } else {
      lastDigit = 10 - parseInt(sumArr.toString().charAt(1), 10);
    }

    let pesel = peselWithoutControlNumber + lastDigit;

    strongPESEL.innerHTML = pesel;


  }
})