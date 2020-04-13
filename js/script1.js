'use strict';
//<input id="age" value="30">


let age = document.getElementById('age');

function showUser(surname, name) {
 // console.log(this);
	alert("Пользователь " + surname + " " + name + ", его возраст " + /*this.value*/);
}

 console.log(showUser.apply(age, ["Smith", "Adam"]));
 