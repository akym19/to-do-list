import { createElem } from "./functions";

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

// continue this
const generateNav = (navArray) => {
	const navTabs = [];

	for (const nav of navArray) {
		const navTabElem = createElem("li");
	}
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

	const sideNav = createElem("nav", {
		id: "side-nav",
	});

	const mainProj = createElem("ul", {
		id: "main-projects",
	});
};

export const generateHomepage = () => {
	document.title = "Do Better";
	homepage();
};
