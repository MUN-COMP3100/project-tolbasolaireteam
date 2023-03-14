import validator from 'validator';

let _validate_first_name = (name) => {
	return new Promise((resolve, reject) => {
		name = name.split(' ').join(''); //Removing blanks
		let is_valid = validator.isAlpha(name);
		if (is_valid){
			resolve('The first name is valid.');
		} else {
			reject('The first name is invalid.');
		}
	});
};

let _validate_last_name = (name) => {
	return new Promise((resolve, reject) => {
		name = name.split(' ').join(''); //Removing blanks
		let is_valid = validator.isAlpha(name);
		if (is_valid){
			resolve('The last name is valid.');
		} else {
			reject('The last name is invalid.');
		}
	});
};

let _validate_email = (email) => {
	return new Promise((resolve, reject) => {
		let is_valid = validator.isEmail(email);
		if (is_valid){
			resolve('The email is valid.');
		} else {
			reject('The email is invalid.');
		}
	});
};

// let _validate_phone = (phone) => {
// 	return new Promise((resolve, reject) => {
// 		let is_valid = validator.isMobilePhone(phone);
// 		if (is_valid){
// 			resolve('The phone is valid.');
// 		} else {
// 			reject('The phone is invalid.');
// 		}
// 	});
// };

// let _validate_address = (address) =>{
// 	return new Promise((resolve, reject) => {
// 		let is_valid = true;
// 		if (is_valid){
// 			resolve('The address is valid.');
// 		} else {
// 			reject('The address is invalid.');
// 		}
// 	});
// };

export function validate_fields(firstName, lastName, email) {
	return Promise.all([_validate_first_name(firstName), _validate_last_name(lastName), _validate_email(email)])
		.then((values) => {
			return true;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
}