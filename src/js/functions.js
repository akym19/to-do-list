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

export const newPTButton = () => {
	const newPTButtonDiv = createElem("div", {
		id: "new-button",
	});
	const newPTButton = createElem("button", {
		type: "button",
	});
	newPTButton.textContent = "+";
	newPTButtonDiv.appendChild(newPTButton);
	return newPTButtonDiv;
};

export const generateProjects = (jsonProjects) => {
	const projectsArray = jsonProjects.projects;
	const projectsUL = createElem("ul", {
		id: "projects",
	});
	projectsArray.forEach((project) => {
		const projectList = createElem("li", {
			class: "nav-projects-entry",
		});
		const projectListH2 = createElem("h2", {});
		projectListH2.textContent = project.title;
		projectList.appendChild(projectListH2);
		projectsUL.appendChild(projectList);
	});
	return projectsUL;
};
