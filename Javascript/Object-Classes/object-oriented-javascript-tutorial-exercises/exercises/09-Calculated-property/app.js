class Person {
	//the constructor receives 3 params
	constructor(year, month, date) {
		this._birthday = new Date(year, month, date);
	}

	getAge() { // birthday is a date
		let ageDifMs = Date.now() - this._birthday.getTime();
		let ageDate = new Date(ageDifMs); // milliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	canDrinkAlcohol() {
		let age = this.getAge()
		if (age >= 21) {
			return true;
		}
		return false;
	}


}

let mario = new Person(1985, 10, 20);
let menoria = new Person(2010, 11, 25);
console.log(`Mario puede beber alcohol?:${mario.canDrinkAlcohol()}`);
console.log(`Menoria puede beber alcohol?:${menoria.canDrinkAlcohol()}`);
