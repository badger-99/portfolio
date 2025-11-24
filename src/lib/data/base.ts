const firstName = 'Alfred';
const lastName = 'Makongoro';
const initials = 'AM'
const title = 'Software Developer';
const about =
	"I build web applications with front-end interfaces and back-end systems that integrate seamlessly. Sometimes it's over a cup of coffee, or with music playing in the background, or both — but always with one goal; bringing ideas to life for the world to see.";

const BaseData = {
	firstName,
	lastName,
	initials,
	title,
	get fullName() {
		return `${firstName} ${lastName}`;
	},
	about,
};

export default BaseData;
