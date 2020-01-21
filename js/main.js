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

})