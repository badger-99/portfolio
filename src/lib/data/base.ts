const firstName = 'Alfred';
const lastName = 'Makongoro';
const initials = 'AM'
const meta = 'Alfred M.'
const title = 'Software Engineer';
const about =
	"I'm a full-stack engineer who likes building things that just work — where the interface feels right and the systems behind it hold up. My goal is always the same: turning ideas into something real";

const BaseData = {
	firstName,
	lastName,
	initials,
	meta,
	title,
	get fullName() {
		return `${firstName} ${lastName}`;
	},
	about,
};

export default BaseData;
