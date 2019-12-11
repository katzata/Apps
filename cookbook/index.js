//
//
//

const assets = {
	defaultImages: [],
	src: ["img/meat1.svg"]
}

const elements = {
	mainTitle: document.querySelector("h1"),
	form: document.querySelector("form"),
	formTop: document.querySelector(".formTop"),
	formMiddle: document.querySelector(".formMiddle"),
	formBottom: document.querySelector(".formBottom"),
	signIn: document.querySelector(".signIn"),
	signInExit: document.querySelector(".signInExit"),
	signInInput: document.querySelector(".signInInput"),
	signUpHide: document.querySelectorAll(".signUpHide"),
	signInCheckBox1: document.querySelector(".checkBox1"),
	signInCheckBox2: document.querySelector(".checkBox2"),
	submit: document.querySelector(".submit"),
	searchForm: document.querySelector(".searchForm"),
	searchFormExit: document.querySelector(".searchFormExit"),
	searchText: document.querySelector("#searchText"),
	searchField: document.querySelector("#searchField"),
	searchFiltersContainer: document.querySelector(".searchFiltersContainer"),
	filtersText: document.querySelector(".filtersText"),
	arrowContainer: document.querySelector(".arrowContainer"),
	arrows: document.querySelectorAll(".arrows"),
	searchFilters: document.querySelector(".searchFilters"),
	searchOptionsContainer: document.querySelector(".searchOptionsContainer"),
	searchOptions1: document.querySelectorAll(".searchOptions1"),
	searchOptions2: document.querySelectorAll(".searchOptions2"),
	ingredientsToggle: document.querySelector(".ingredientsToggle"),
	searchButton: document.querySelector(".searchButton"),
	browse: document.querySelector(".browse"),
	browseExit: document.querySelector(".browseExit"),
	browseInternal: document.querySelector(".browseInternal"),
	browseInternalItems: document.querySelectorAll(".browseInternalItems"),
	mainSections: document.querySelectorAll(".mainSections"),
	previewSection: document.querySelector(".previewSection"),
	previewSectionImg: document.querySelector(".previewImage"),
	previewRecipesName: document.querySelector(".previewRecipesName"),
	foodTypeSections: document.querySelectorAll(".foodTypeSections"),
	foodTypeSectionsInternal: document.querySelectorAll(".foodTypeSectionsInternal"),
	foodSectionTitle: document.querySelectorAll(".foodSectionTitle"),
	meatSection: document.querySelector(".meatSection"),
	footer: document.querySelector("footer"),
	footText: document.querySelector(".footText")
}

const mechanics = {
	textClicked: false,
	appendPreview: function () {
		elements.previewSectionImg.src = assets.src[0]
	},
	signInMechanics: function () {
		elements.signIn.addEventListener("click", () => {
			if (elements.signInCheckBox2.checked != true) {
				elements.signIn.style.height = "265px";
				elements.formMiddle.style.height = "84px";
			} else {
				elements.signIn.style.height = "183px";
				elements.formMiddle.style.height = "0";
			}

			elements.signIn.style.width = "180px";
			elements.signIn.style.backgroundColor = "rgba(0, 0, 0, .88)";
			elements.signIn.style.boxShadow = "0 0 2px 1px rgba(255, 255, 255, .2)";
			elements.form.style.opacity = "1";
			elements.signInExit.style.width = "100%";
			elements.signInExit.style.height = "100%";
			elements.formTop.style.height = "56px";
			elements.formBottom.style.height = "95px";
		})

		elements.signInExit.addEventListener("click", () => {
			elements.form.style.opacity = "0";
			elements.signIn.style.width = "68px";
			elements.signIn.style.height = "22px";
			elements.signIn.style.backgroundColor = "rgba(0, 0, 0, 0)";
			elements.signIn.style.boxShadow = "0 0 2px 1px rgba(255, 255, 255, 0)";
			elements.form.style.opacity = "0";
			elements.signInExit.style.width = "0%";
			elements.signInExit.style.height = "0%";
			elements.formTop.style.height = "0";
			elements.formMiddle.style.height = "0";
			elements.formBottom.style.height = "0";
		})

		elements.signInCheckBox2.addEventListener("change", () => {
			if (elements.signInCheckBox2.checked == true) {
				elements.signIn.style.height = "183px";
				elements.submit.value = "Signin";
				elements.formMiddle.style.height = "0px";

				for (let i = 0; i < elements.signUpHide.length; i++) {
					elements.signUpHide[i].style.opacity = "0";
					elements.signUpHide[i].style.zIndex = "-1";
					elements.signUpHide[i].style.height = "0";
				}
			} else {
				elements.signIn.style.height = "265px";
				elements.submit.value = "Signup";
				elements.formMiddle.style.height = "84px";

				for (let i = 0; i < elements.signUpHide.length; i++) {
					elements.signUpHide[i].style.zIndex = "0";
					elements.signUpHide[i].style.opacity = "1";
					elements.signUpHide[i].style.width = "auto";
					elements.signUpHide[i].style.height = "20px";
				}
			}
		})
	},
	searchMechanics: function () {
		elements.searchText.addEventListener("click", () => {
			elements.searchField.style.zIndex = "0";
			elements.searchField.style.opacity = "1";
			elements.searchButton.style.opacity = "1";
			elements.searchField.focus();
			elements.searchText.style.opacity = "0";
			elements.searchText.style.zIndex = "-1";
			elements.searchFiltersContainer.style.zIndex = "1";
			elements.searchFiltersContainer.style.top = "102%";
			elements.searchFiltersContainer.style.opacity = "1";
			elements.searchForm.style.zIndex = "10";
			elements.searchForm.style.boxShadow = "0 0 3px 1px rgba(255, 255, 255, .3)";
			elements.searchFormExit.style.width = "100%";
			elements.searchFormExit.style.height = "100%";
		})

		elements.searchFormExit.addEventListener("click", () => {
			elements.searchField.style.zIndex = "-1";
			elements.searchField.style.opacity = "0";
			elements.searchButton.style.zIndex = "-1";
			elements.searchButton.style.opacity = "0";
			elements.searchText.style.zIndex = "0";
			elements.searchText.style.opacity = "1";
			elements.searchFiltersContainer.style.zIndex = "0";
			elements.searchFiltersContainer.style.top = "0";
			elements.searchFiltersContainer.style.opacity = "0";
			elements.searchForm.style.zIndex = "0";
			elements.searchForm.style.boxShadow = "none";
			elements.searchFormExit.style.width = "0";
			elements.searchFormExit.style.height = "0";
		})

		elements.filtersText.addEventListener("mouseenter", () => {
			if (mechanics.textClicked != true) {
				elements.arrowContainer.style.opacity = "1";
				elements.filtersText.style.opacity = "0";
			}
		})

		elements.filtersText.addEventListener("mouseleave", () => {
			if (mechanics.textClicked != true) {
				elements.arrowContainer.style.opacity = "0";
				elements.filtersText.style.opacity = "1";
			}
		})

		elements.filtersText.addEventListener("click", () => {
			elements.searchFiltersContainer.style.height = "230px";
			elements.searchFilters.style.padding = "45px 0 10px 0";
			elements.searchOptionsContainer.style.display = "flex";
			elements.ingredientsToggle.style.display = "block";
			elements.ingredientsToggle.style.zIndex = "0";
			elements.ingredientsToggle.style.opacity = "1";
			mechanics.textClicked = true;
			elements.arrowContainer.style.opacity = "1";
			elements.arrowContainer.style.bottom = "5px";
			elements.arrowContainer.style.transform = "rotate(180deg)";
			elements.arrowContainer.style.zIndex = "1";
			elements.filtersText.style.opacity = "1";
			
			for (let i = 0; i < elements.searchOptions1.length; i++) {
				elements.searchOptions1[i].style.height = "auto";
				elements.searchOptions1[i].style.marginTop = "15px";
				elements.searchOptions1[i].style.opacity = "1";
			}

			for (let i = 0; i < elements.searchOptions2.length; i++) {
				elements.searchOptions2[i].style.height = "auto";
				elements.searchOptions2[i].style.marginTop = "15px";
				elements.searchOptions2[i].style.opacity = "1";
			}
		})

		elements.arrowContainer.addEventListener("click", () => {
			elements.searchFiltersContainer.style.height = "26px";
			elements.searchFilters.style.padding = "0 0 10px 0";
			elements.searchOptionsContainer.style.display = "none";
			elements.ingredientsToggle.style.display = "none";
			elements.ingredientsToggle.style.opacity = "0";
			mechanics.textClicked = false;
			elements.arrowContainer.style.opacity = "0";
			elements.arrowContainer.style.bottom = "2px";
			elements.arrowContainer.style.transform = "rotate(0deg)";
			elements.arrowContainer.style.zIndex = "0";

			
			for (let i = 0; i < elements.searchOptions1.length; i++) {
				elements.searchOptions1[i].style.height = "0";
				elements.searchOptions1[i].style.marginTop = "0";
				elements.searchOptions1[i].style.opacity = "0";
			}

			for (let i = 0; i < elements.searchOptions2.length; i++) {
				elements.searchOptions2[i].style.height = "0";
				elements.searchOptions2[i].style.marginTop = "0";
				elements.searchOptions2[i].style.opacity = "0";
			}
		})
		
		for (let i = 0; i < elements.arrows.length; i++) {
			elements.arrows[i].addEventListener("mouseenter", () => {

			})
		}
	},
	browseMenuToggle: function () {
		if (elements.browse.style.width != "180px") {
			elements.browse.style.width = "180px";
			elements.browse.style.height = "351px";
			elements.browseInternal.style.opacity = "1";
			elements.browseInternal.style.width = "180px";
			elements.browseInternal.style.height = "328px";
			elements.browse.style.boxShadow = "0 0 2px 1px rgba(255, 255, 255, .2)";
			elements.browseExit.style.zIndex = "2";
			elements.browseExit.style.width = "100%";
			elements.browseExit.style.height = "100%";

			for (let i = 0; i < elements.browseInternalItems.length; i++) {
				elements.browseInternalItems[i].style.height = "24px";
			}
		} else {
			elements.browse.style.width = "56px";
			elements.browse.style.height = "23px";
			elements.browseInternal.style.width = "0";
			elements.browseInternal.style.height = "56px";
			elements.browseInternal.style.zIndex = "2";
			elements.browseInternal.style.opacity = "0";
			elements.browse.style.boxShadow = "none";
			elements.browseExit.style.zIndex = "0";
			elements.browseExit.style.width = "0%";
			elements.browseExit.style.height = "0%";

			for (let i = 0; i < elements.browseInternalItems.length; i++) {
				elements.browseInternalItems[i].style.height = "0";
			}
		}
	},
	browseMechanics: function () {
		elements.browse.addEventListener("click", mechanics.browseMenuToggle);
		elements.browseExit.addEventListener("click", mechanics.browseMenuToggle);

		for (let i = 0; i < elements.browseInternalItems.length; i++) {
			elements.browseInternalItems[i].addEventListener("click", () => {
				mechanics.browseMenuToggle();
				elements.foodTypeSections[i].style.left = "0";

				for (let j = 0; j < elements.foodTypeSections.length; j++) {
					if (elements.foodTypeSections[i] != elements.foodTypeSections[j]) {
						elements.foodTypeSections[j].style.left = "100%";
					}
				}

				for (let z = 0; z < elements.mainSections.length; z++) {
					elements.mainSections[z].style.opacity = "0";
				}
			})
		}
	},
	previewMechanics: function () {
		elements.previewSection.addEventListener("mouseenter", () => {
			elements.previewRecipesName.style.top = "85%";
			elements.previewRecipesName.style.textShadow = "0 0 5px black";
			elements.previewRecipesName.style.backgroundColor = "rgba(0, 0, 0, .8)";
			document.querySelector(".previewImage").style.width = "90%";
			document.querySelector(".previewImage").style.height = "90%";
		})

		elements.previewSection.addEventListener("mouseleave", () => {
			elements.previewRecipesName.style.top = "50%";
			elements.previewRecipesName.style.textShadow = "none";
			document.querySelector(".previewImage").style.width = "76%";
			document.querySelector(".previewImage").style.height = "76%";
		})

		elements.previewSection.addEventListener("click", () => {
			
		})
	},
	titleMechanics: function () {
		elements.mainTitle.addEventListener("click", () => {
			for (let i = 0; i < elements.foodTypeSections.length; i++) {
				elements.foodTypeSections[i].style.left = "100%";
			}

			for (let j = 0; j < elements.mainSections.length; j++) {
				elements.mainSections[j].style.opacity = "1";
			}
		})
	}
}

window.onload = () => {
	mechanics.appendPreview();
	mechanics.signInMechanics();
	mechanics.searchMechanics();
	mechanics.browseMechanics();
	mechanics.previewMechanics();
	mechanics.titleMechanics();
	elements.footText.innerHTML = `Copywright © ${new Date().getFullYear()}`;
}

window.onclick = () => {
	//console.log(elements.browseInternalItems.style.height)
}