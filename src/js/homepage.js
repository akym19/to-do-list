import { createElem, newButton } from "./functions";
import { generateFooter } from "./functions";
import { newPTButton } from "./functions";
import projects from "./sampleDB.json";
import { generateProjects } from "./functions";

const sideNavContents = [
	{
		item: "Home",
		id: "nav-home",
		img: "./images/home.png",
	},
	{
		item: "Today",
		id: "nav-today",
		img: "./images/today.png",
	},
	{
		item: "Week",
		id: "nav-week",
		img: "./images/week.png",
	},
	{
		item: "Projects",
		id: "nav-projects",
		img: "./images/projects.png",
	},
];

const generateNav = (navItem) => {
	const nav = createElem("li", {
		id: navItem.id,
	});

	const navIcon = createElem("img", {
		src: navItem.img,
		alt: navItem.item,
	});

	const navH1 = createElem("h1", {});
	navH1.textContent = navItem.item;

	nav.appendChild(navIcon);
	nav.appendChild(navH1);

	return nav;
};

const homepage = () => {
	const body = document.body;

	const header = createElem("header", {});

	const logo = createElem("img", {
		id: "logo",
		src: "./images/to-do-logo-black.png",
		alt: "Logo",
	});

	const doBetter = createElem("h1", {
		id: "title",
	});
	doBetter.textContent = "Do Better";

	const greetUser = createElem("p", {
		id: "user-greet",
	});
	greetUser.textContent = "Hello, user";

	header.appendChild(logo);
	header.appendChild(doBetter);
	header.appendChild(greetUser);

	body.appendChild(header);

	const sideNav = createElem("nav", {
		id: "side-nav",
	});

	const mainProj = createElem("ul", {
		id: "main-projects",
	});

	sideNavContents.forEach((navItem) => {
		const li = generateNav(navItem);
		mainProj.appendChild(li);
	});

	const projectsHTML = generateProjects(projects);

	mainProj.appendChild(projectsHTML);
	sideNav.appendChild(mainProj);

	const newPTBtn = newPTButton();
	sideNav.appendChild(newPTBtn);
	body.appendChild(sideNav);

	const main = createElem("main", {});
	const todoContainer = createElem("div", {
		id: "todo-container",
	});

	main.appendChild(todoContainer);
	body.appendChild(main);

	const pageFooter = generateFooter();
	body.appendChild(pageFooter);
};

export const generateHomepage = () => {
	document.title = "Do Better";
	homepage();
};
