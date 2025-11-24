const firstName = 'Alfred';
const lastName = 'Makongoro';
const initials = 'AM'
const title = 'Software Developer';
const about =
	"I build web applications with front-end interfaces and back-end systems that fit together naturally, making sure everything feels smooth and works the way it should. Most days it's with a cup of coffee nearby, sometimes with music in the background — but always with the same goal: turning ideas into something real.";

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
