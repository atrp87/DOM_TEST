document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#name-form');
  form.addEventListener('submit', handleFormSubmit);

const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

// const radioButton = document.querySelector('');
//   radioButton.addEventListener('check', formSubmit)  
})

const handleFormSubmit = function(e) {
  e.preventDefault();
    
  const list = document.querySelector('#user-log');
  const li = document.createElement('li');
  li.textContent = `${this.fname.value} ${this.lname.value} ${this.country.value}`
  list.appendChild(li);

  document.getElementById('name-form').reset();
}

const handleDeleteAllClick = function (e) {
  const list = document.querySelector('#user-log');
  list.innerHTML = ''; 
}

// const formSubmit = function() {
//  document.querySelector('input[name="gender"]:checked');
//  fromSubmit.value
// }


function myFunction() {
  var x = document.getElementById("Radio").required;
  document.getElementById("submit").innerHTML = x;
}
