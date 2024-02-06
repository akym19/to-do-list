export const createElem = (type, attributes = {}) => {
	const elem = document.createElement(type);

	for (const attr in attributes) {
		if (attributes.hasOwnProperty(attr)) {
			elem.setAttribute(attr, attributes[attr]);
		}
	}
	return elem;
};

export const generateFooter = () => {
	const pageFooter = createElem("footer", {});
	pageFooter.textContent = "A To-Do List App Project for The Odin Project";
	return pageFooter;
};
