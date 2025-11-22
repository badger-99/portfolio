const firstName = 'Alfred';
const lastName = 'Makongoro';
const title = 'Software Engineer';

const BaseData = {
	firstName,
	lastName,
	title,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
