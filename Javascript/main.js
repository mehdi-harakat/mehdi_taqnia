const services = document.querySelector("header .container .services");
const digital = document.querySelector("header .container .digital");
const web = document.querySelector("header .container .web");
const photo = document.querySelector("header .container .photo");

let arrayNav = [services, digital, web, photo];

arrayNav.forEach((el) => {
	el.addEventListener("mouseover", () => {
		el.classList.add("active");
	});

	el.addEventListener("mouseout", () => {
		el.classList.remove("active");
	});
});

// ---------------------------------------------------------------------------------------------
const searchingOpen = document.querySelector("header .container .search > i");
const searchBar = document.querySelector("header .search .sear-wind");
const searchExit = document.querySelector("header .search .sear-wind .lab i");

searchingOpen.addEventListener("click", () => {
	searchBar.classList.add("active");
});

searchExit.addEventListener("click", () => {
	searchBar.classList.remove("active");
});

window.addEventListener("click", (e) => {
	let beatit = true;
	let catcher = [searchBar, searchingOpen];
	let hoold = Array.from(searchBar.children);
	hoold.forEach((elem) => {
		let secondHold = Array.from(elem.children);
		catcher.push(elem);
		secondHold.forEach((elellel) => {
			catcher.push(elellel);
		});
	});

	catcher.forEach((elementfin) => {
		if (elementfin === e.target) {
			beatit = false;
		}
	});

	if (beatit) {
		searchBar.classList.remove("active");
	}
});

// ----------------------------------------------------------------------------------------------

window.addEventListener("scroll", () => {
	if (scrollY >= 160) {
		document.querySelector("header").classList.add("active");
	} else {
		document.querySelector("header").classList.remove("active");
	}
});

// ----------------------------------------------------------------------------

const headerTwo = document.querySelector(".header-two");
const burgerIcon = document.querySelector("header .fa-bars");

const servicesTwo = document.querySelector(".header-two .services");
const allList = document.querySelectorAll(".header-two .second-nav > li");

burgerIcon.addEventListener("click", () => {
	headerTwo.classList.add("active");
});

window.addEventListener("click", (e) => {
	if (e.target.classList.contains("services")) {
		e.target.classList.toggle("active");
	} else if (e.target.classList.contains("header-two")) {
		headerTwo.classList.remove("active");
	}
});

allList.forEach((e) => {
	e.addEventListener("click", () => {
		if (
			e.classList.contains("digital") ||
			e.classList.contains("web") ||
			e.classList.contains("photo")
		) {
			allList.forEach((el) => {
				if (el.className === e.className) {
					el.classList.toggle("active");
				} else {
					el.classList.remove("active");
				}
			});
		}
	});
});

// -------------------------------------------------------
const mainSection = document.querySelector("main");
const shapes = document.querySelector("main .shapes");
mainSection.addEventListener("mousemove", (e) => {
	shapes.style.transform = `translate(-${e.pageX / 80}px ,-${e.pageY / 50}px)`;
	// shapes.style.transform = `translateX(-${e.pageX / 80}px)`;
	// shapes.style.top = `-${e.pageY / 50}px`;
	// shapes.style.left = `-${e.pageX / 80}px`;
});

mainSection.addEventListener("mouseout", () => {
	shapes.style.transform = `translate(0)`;
});
