export const isStringEmpty = (str) => {
	if (str !== undefined && str !== null && str !== "") {
		return true;
	}
	return false;
};

export const logger = (msg) => {
	console.log(msg);
};
