//
//
//

const mechanics = {
	title: document.querySelector("h1"),
	mainSections: document.querySelectorAll(".mainInternalSections"),
	calendar: document.querySelector(".calendar"),
	calendarYearContainer: document.querySelector("#calendarYearContainer"),
	calendarYear: document.querySelector("#year"),
	dayTitle: document.querySelectorAll(".titleContainer"),
	calendarSectionsContainer: document.querySelectorAll(".calendarSectionsContainer"),
	calendarSections: document.querySelectorAll(".calendarSections"),
	date: new Date(),
	calendarSectionsTotal: 48,
	dayHoursMax: 24,
	hourCount: 0,
	calendarMonths: document.querySelectorAll(".calendarBody"),
	months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	tempEvents: "",
	tempWeekDays: [],
	daysCount: 0,
	innerDays: [],
	writingSpaceHeight: 326,
	tempSettings: [],
	tempOnOffBg: [],
	footer: document.querySelector("footer"),
	menuButtons: document.querySelectorAll(".footerInternal"),
	menuTitles: document.querySelectorAll("h2"),
	subL: document.querySelectorAll(".subSettingsL"),
	subR: document.querySelectorAll(".subSettingsR"),
	text: document.querySelectorAll("p"),
	listButtons: document.querySelectorAll("select"),
	themeOptions: document.querySelectorAll(".themeOptions"),
	colorButtons: document.querySelectorAll(".colors"),
	normalButtons: document.querySelectorAll(".normalButtons"),
	onOffButtons: document.querySelectorAll(".buttonContainer"),
	onOffBG: document.querySelectorAll(".onOffBG"),
	onOffSubBG: document.querySelectorAll(".onOffSubBG"),
	vibrationText: document.querySelectorAll(".vibrationText"),
	innerButton: document.querySelectorAll(".innerButton"),
	infoButtons: document.querySelectorAll(".settingInfo"),
	arrowRButtons: document.querySelectorAll(".arrowRContainer"),
	arrowLButtons: document.querySelectorAll(".arrowLContainer"),
	arrows: document.querySelectorAll(".arrowSubContainer"),
	arrowL: document.querySelectorAll(".arrowL"),
	arrowR: document.querySelectorAll(".arrowR"),
	hiddenDiv: document.querySelectorAll(".hiddenDiv"),
	alertsOn: false,
	vibrationOn: false,
	baterySaveOn: false,
	generateCalendar: function () {
		this.calendarYear.innerHTML = this.date.getFullYear();
		for (let x = 0; x < this.calendarMonths.length; x++) {
			this.calendarMonths[x].children[0].children[0].innerHTML = this.months[x];
			if (x < 7) {
				if (x % 2 == 0) {
					for (let y = 1; y <= 31; y++) {
						let days = document.createElement("div");
						let innerDays = document.createElement("div");
						let markers = document.createElement("div");
						let weekDays = document.createElement("p");
						let calendarCloseContainer = document.createElement("div");
						let close1 = document.createElement("div");
						let close2 = document.createElement("div");
						let titleContainer = document.createElement("div");
						let dayTitle = document.createElement("h3");
						let dayDate = document.createElement("h3");
						let calendarSectionsContainer = document.createElement("div");
						days.classList.add("days");
						days.innerHTML = `${y}`;
						innerDays.classList.add("innerDay");
						markers.classList.add("markers");
						weekDays.classList.add("weekDays");
						calendarCloseContainer.classList.add("calendarCloseContainer")
						close1.classList.add("calendarClose1", "shapedButtons");
						close2.classList.add("calendarClose2", "shapedButtons");
						titleContainer.classList.add("titleContainer");
						dayTitle.classList.add("dayTitle");
						dayTitle.innerHTML = mechanics.months[x].toString();
						dayDate.classList.add("dayDate");
						dayDate.innerHTML = `${y}${mechanics.setOrdinals(y)}`;
						calendarSectionsContainer.classList.add("calendarSectionsContainer");
						this.calendar.appendChild(innerDays);
						days.appendChild(markers);
						markers.appendChild(weekDays);
						innerDays.appendChild(titleContainer);
						innerDays.appendChild(calendarSectionsContainer);
						calendarCloseContainer.appendChild(close1);
						calendarCloseContainer.appendChild(close2);
						titleContainer.appendChild(dayTitle);
						titleContainer.appendChild(dayDate);
						titleContainer.appendChild(calendarCloseContainer);
						this.innerDays.push(innerDays);
						this.calendarMonths[x].appendChild(days);

						if (x <= this.date.getMonth()) {
							this.tempWeekDays.push(weekDays);
						} else {
							days.style.borderColor = "default";
							days.style.boxShadow = "default";
							days.style.borderRadius = "default";

							this.daysCount += 1;
							if (this.daysCount == 7) {
								this.daysCount = 0;
							}

							weekDays.innerHTML = mechanics.weekDays[this.daysCount];
						}

						if (x == this.date.getMonth() && y == this.date.getDate()) {
							weekDays.innerHTML = this.weekDays[this.date.getDay()];
							days.style.borderWidth = "1px";
							days.style.boxShadow = "inset 0 0 2px 1px rgba(200,200,200, 1)";
							days.style.borderRadius = "2px";
							this.daysCount = this.date.getDay();
						}
					}
				} else {
					if (this.calendarMonths[x] == this.calendarMonths[1]) {
						for (let y = 1; y <= 28; y++) {
							let days = document.createElement("div");
							let innerDays = document.createElement("div");
							let markers = document.createElement("div");
							let weekDays = document.createElement("p");
							let calendarCloseContainer = document.createElement("div");
							let close1 = document.createElement("div");
							let close2 = document.createElement("div");
							let titleContainer = document.createElement("div");
							let dayTitle = document.createElement("h3");
							let dayDate = document.createElement("h3");
							let calendarSectionsContainer = document.createElement("div");
							days.classList.add("days");
							days.innerHTML = `${y}`;
							innerDays.classList.add("innerDay");
							markers.classList.add("markers");
							weekDays.classList.add("weekDays");
							calendarCloseContainer.classList.add("calendarCloseContainer")
							close1.classList.add("calendarClose1", "shapedButtons");
							close2.classList.add("calendarClose2", "shapedButtons");
							titleContainer.classList.add("titleContainer");
							dayTitle.classList.add("dayTitle");
							dayTitle.innerHTML = mechanics.months[x].toString();
							dayDate.classList.add("dayDate");
							dayDate.innerHTML = `${y}${mechanics.setOrdinals(y)}`;
							calendarSectionsContainer.classList.add("calendarSectionsContainer");
							this.calendar.appendChild(innerDays);
							days.appendChild(markers);
							markers.appendChild(weekDays);
							innerDays.appendChild(titleContainer);
							innerDays.appendChild(calendarSectionsContainer);
							calendarCloseContainer.appendChild(close1);
							calendarCloseContainer.appendChild(close2);
							titleContainer.appendChild(dayTitle);
							titleContainer.appendChild(dayDate);
							titleContainer.appendChild(calendarCloseContainer);
							this.innerDays.push(innerDays);
							this.calendarMonths[x].appendChild(days);

							if (x <= this.date.getMonth() && y < this.date.getDate()) {
								this.tempWeekDays.push(weekDays);
							} else {
								days.style.borderColor = "default";
								days.style.boxShadow = "default";
								days.style.borderRadius = "default";

								this.daysCount += 1;
								if (this.daysCount == 7) {
									this.daysCount = 0;
								}

								weekDays.innerHTML = mechanics.weekDays[this.daysCount];
							}

							if (x == this.date.getMonth() && y == this.date.getDate()) {
								weekDays.innerHTML = this.weekDays[this.date.getDay()];
								days.style.borderWidth = "1px";
								days.style.boxShadow = "inset 0 0 2px 1px rgba(200,200,200, 1)";
								days.style.borderRadius = "2px";
								this.daysCount = this.date.getDay();
							}
						}
					} else {
						for (let y = 1; y <= 30; y++) {
							let days = document.createElement("div");
							let innerDays = document.createElement("div");
							let markers = document.createElement("div");
							let weekDays = document.createElement("p");
							let calendarCloseContainer = document.createElement("div");
							let close1 = document.createElement("div");
							let close2 = document.createElement("div");
							let titleContainer = document.createElement("div");
							let dayTitle = document.createElement("h3");
							let dayDate = document.createElement("h3");
							let calendarSectionsContainer = document.createElement("div");
							days.classList.add("days");
							days.innerHTML = `${y}`;
							innerDays.classList.add("innerDay");
							markers.classList.add("markers");
							weekDays.classList.add("weekDays");
							calendarCloseContainer.classList.add("calendarCloseContainer")
							close1.classList.add("calendarClose1", "shapedButtons");
							close2.classList.add("calendarClose2", "shapedButtons");
							titleContainer.classList.add("titleContainer");
							dayTitle.classList.add("dayTitle");
							dayTitle.innerHTML = mechanics.months[x].toString();
							dayDate.classList.add("dayDate");
							dayDate.innerHTML = `${y}${mechanics.setOrdinals(y)}`;
							calendarSectionsContainer.classList.add("calendarSectionsContainer");
							this.calendar.appendChild(innerDays);
							days.appendChild(markers);
							markers.appendChild(weekDays);
							innerDays.appendChild(titleContainer);
							innerDays.appendChild(calendarSectionsContainer);
							calendarCloseContainer.appendChild(close1);
							calendarCloseContainer.appendChild(close2);
							titleContainer.appendChild(dayTitle);
							titleContainer.appendChild(dayDate);
							titleContainer.appendChild(calendarCloseContainer);
							this.innerDays.push(innerDays);
							this.calendarMonths[x].appendChild(days);

							if (x <= this.date.getMonth() && y < this.date.getDate()) {
								this.tempWeekDays.push(weekDays);
							} else {
								days.style.borderColor = "default";
								days.style.boxShadow = "default";
								days.style.borderRadius = "default";

								this.daysCount += 1;
								if (this.daysCount == 7) {
									this.daysCount = 0;
								}

								weekDays.innerHTML = mechanics.weekDays[this.daysCount];
							}

							if (x == this.date.getMonth() && y == this.date.getDate()) {
								weekDays.innerHTML = this.weekDays[this.date.getDay()];
								days.style.borderWidth = "1px";
								days.style.boxShadow = "inset 0 0 2px 1px rgba(200,200,200, 1)";
								days.style.borderRadius = "2px";
								this.daysCount = this.date.getDay();
							}
						}
					}
				}
			} else {
				if (x % 3 == 0) {
					for (let y = 1; y <= 31; y++) {
						let days = document.createElement("div");
						let innerDays = document.createElement("div");
						let markers = document.createElement("div");
						let weekDays = document.createElement("p");
						let calendarCloseContainer = document.createElement("div");
						let close1 = document.createElement("div");
						let close2 = document.createElement("div");
						let titleContainer = document.createElement("div");
						let dayTitle = document.createElement("h3");
						let dayDate = document.createElement("h3");
						let calendarSectionsContainer = document.createElement("div");
						days.classList.add("days");
						days.innerHTML = `${y}`;
						innerDays.classList.add("innerDay");
						markers.classList.add("markers");
						weekDays.classList.add("weekDays");
						calendarCloseContainer.classList.add("calendarCloseContainer")
						close1.classList.add("calendarClose1", "shapedButtons");
						close2.classList.add("calendarClose2", "shapedButtons");
						titleContainer.classList.add("titleContainer");
						dayTitle.classList.add("dayTitle");
						dayTitle.innerHTML = mechanics.months[x].toString();
						dayDate.classList.add("dayDate");
						dayDate.innerHTML = `${y}${mechanics.setOrdinals(y)}`;
						calendarSectionsContainer.classList.add("calendarSectionsContainer");
						this.calendar.appendChild(innerDays);
						days.appendChild(markers);
						markers.appendChild(weekDays);
						innerDays.appendChild(titleContainer);
						innerDays.appendChild(calendarSectionsContainer);
						calendarCloseContainer.appendChild(close1);
						calendarCloseContainer.appendChild(close2);
						titleContainer.appendChild(dayTitle);
						titleContainer.appendChild(dayDate);
						titleContainer.appendChild(calendarCloseContainer);
						this.innerDays.push(innerDays);
						this.calendarMonths[x].appendChild(days);

						if (x <= this.date.getMonth() && y < this.date.getDate()) {
							this.tempWeekDays.push(weekDays);
						} else {
							days.style.borderColor = "default";
							days.style.boxShadow = "default";
							days.style.borderRadius = "default";

							this.daysCount += 1;
							if (this.daysCount == 7) {
								this.daysCount = 0;
							}

							weekDays.innerHTML = mechanics.weekDays[this.daysCount];
						}

						if (x == this.date.getMonth() && y == this.date.getDate()) {
							weekDays.innerHTML = this.weekDays[this.date.getDay()];
							days.style.borderWidth = "1px";
							days.style.boxShadow = "inset 0 0 2px 1px rgba(200,200,200, 1)";
							days.style.borderRadius = "2px";
							this.daysCount = this.date.getDay();
						}
					}
				} else {
					if (this.calendarMonths[x] == this.calendarMonths[7] || this.calendarMonths[x] == this.calendarMonths[11]) {
						for (let y = 1; y <= 31; y++) {
							let days = document.createElement("div");
							let innerDays = document.createElement("div");
							let markers = document.createElement("div");
							let weekDays = document.createElement("p");
							let calendarCloseContainer = document.createElement("div");
							let close1 = document.createElement("div");
							let close2 = document.createElement("div");
							let titleContainer = document.createElement("div");
							let dayTitle = document.createElement("h3");
							let dayDate = document.createElement("h3");
							let calendarSectionsContainer = document.createElement("div");
							days.classList.add("days");
							days.innerHTML = `${y}`;
							innerDays.classList.add("innerDay");
							markers.classList.add("markers");
							weekDays.classList.add("weekDays");
							calendarCloseContainer.classList.add("calendarCloseContainer")
							close1.classList.add("calendarClose1", "shapedButtons");
							close2.classList.add("calendarClose2", "shapedButtons");
							titleContainer.classList.add("titleContainer");
							dayTitle.classList.add("dayTitle");
							dayTitle.innerHTML = mechanics.months[x].toString();
							dayDate.classList.add("dayDate");
							dayDate.innerHTML = `${y}${mechanics.setOrdinals(y)}`;
							calendarSectionsContainer.classList.add("calendarSectionsContainer");
							this.calendar.appendChild(innerDays);
							days.appendChild(markers);
							markers.appendChild(weekDays);
							innerDays.appendChild(titleContainer);
							innerDays.appendChild(calendarSectionsContainer);
							calendarCloseContainer.appendChild(close1);
							calendarCloseContainer.appendChild(close2);
							titleContainer.appendChild(dayTitle);
							titleContainer.appendChild(dayDate);
							titleContainer.appendChild(calendarCloseContainer);
							this.innerDays.push(innerDays);
							this.calendarMonths[x].appendChild(days);

							if (x <= this.date.getMonth() && y < this.date.getDate()) {
								this.tempWeekDays.push(weekDays);
							} else {
								days.style.borderColor = "default";
								days.style.boxShadow = "default";
								days.style.borderRadius = "default";

								this.daysCount += 1;
								if (this.daysCount == 7) {
									this.daysCount = 0;
								}

								weekDays.innerHTML = mechanics.weekDays[this.daysCount];
							}

							if (x == this.date.getMonth() && y == this.date.getDate()) {
								weekDays.innerHTML = this.weekDays[this.date.getDay()];
								days.style.borderWidth = "1px";
								days.style.boxShadow = "inset 0 0 2px 1px rgba(200,200,200, 1)";
								days.style.borderRadius = "2px";
								this.daysCount = this.date.getDay();
							}
						}
					} else {
						for (let y = 1; y <= 30; y++) {
							let days = document.createElement("div");
							let innerDays = document.createElement("div");
							let markers = document.createElement("div");
							let weekDays = document.createElement("p");
							let calendarCloseContainer = document.createElement("div");
							let close1 = document.createElement("div");
							let close2 = document.createElement("div");
							let titleContainer = document.createElement("div");
							let dayTitle = document.createElement("h3");
							let dayDate = document.createElement("h3");
							let calendarSectionsContainer = document.createElement("div");
							days.classList.add("days");
							days.innerHTML = `${y}`;
							innerDays.classList.add("innerDay");
							markers.classList.add("markers");
							weekDays.classList.add("weekDays");
							calendarCloseContainer.classList.add("calendarCloseContainer")
							close1.classList.add("calendarClose1", "shapedButtons");
							close2.classList.add("calendarClose2", "shapedButtons");
							titleContainer.classList.add("titleContainer");
							dayTitle.classList.add("dayTitle");
							dayTitle.innerHTML = mechanics.months[x].toString();
							dayDate.classList.add("dayDate");
							dayDate.innerHTML = `${y}${mechanics.setOrdinals(y)}`;
							calendarSectionsContainer.classList.add("calendarSectionsContainer");
							this.calendar.appendChild(innerDays);
							days.appendChild(markers);
							markers.appendChild(weekDays);
							innerDays.appendChild(titleContainer);
							innerDays.appendChild(calendarSectionsContainer);
							calendarCloseContainer.appendChild(close1);
							calendarCloseContainer.appendChild(close2);
							titleContainer.appendChild(dayTitle);
							titleContainer.appendChild(dayDate);
							titleContainer.appendChild(calendarCloseContainer);
							this.innerDays.push(innerDays);
							this.calendarMonths[x].appendChild(days);

							if (x <= this.date.getMonth() && y < this.date.getDate()) {
								this.tempWeekDays.push(weekDays);
							} else {
								days.style.borderColor = "default";
								days.style.boxShadow = "default";
								days.style.borderRadius = "default";

								this.daysCount += 1;
								if (this.daysCount == 7) {
									this.daysCount = 0;
								}

								weekDays.innerHTML = mechanics.weekDays[this.daysCount];
							}

							if (x == this.date.getMonth() && y == this.date.getDate()) {
								weekDays.innerHTML = this.weekDays[this.date.getDay()];
								days.style.borderWidth = "1px";
								days.style.boxShadow = "inset 0 0 2px 1px rgba(200,200,200, 1)";
								days.style.borderRadius = "2px";
								this.daysCount = this.date.getDay();
							}
						}
					}
				}
			}
		}

		this.setWeekDays(this.tempWeekDays.reverse());

		for (let x = 0; x < document.querySelectorAll(".days").length; x++) {

			if (document.querySelectorAll(".weekDays")[x].innerHTML == "Sun") {
				document.querySelectorAll(".days")[x].style.backgroundColor = "rgb(1,0,0)"//"#790000";
			}

			document.querySelectorAll(".days")[x].addEventListener("click", function () {
				mechanics.openDays(x);
				mechanics.generateInnerLists(x);
			});

			document.querySelectorAll(".calendarCloseContainer")[x].addEventListener("click", function () {
				mechanics.closeDays(x);
			});
		};
	},
	generateInnerLists: function (day) {
		if (document.querySelectorAll(".calendarSectionsContainer")[day].children.length == 0) {
			for (let z = 0; z < this.calendarSectionsTotal; z++) {
				let calendarSections = document.createElement("div");
				let dayHours = document.createElement("p");
				let sectionText = document.createElement("p");
				let writingSpaceContainer = document.createElement("div");
				let writingSpace = document.createElement("form");
				let innerHour = document.createElement("p");
				let innerWritingSpace = document.createElement("textarea");
				let clearTextButton = document.createElement("div");
				let clearTextButtonInternal1 = document.createElement("div");
				let clearTextButtonInternal2 = document.createElement("div");
				let doneButton = document.createElement("input");
				let doneText = document.createElement("p");
				calendarSections.classList.add("calendarSections", "inputToggle");
				document.querySelectorAll(".calendarSectionsContainer")[day].appendChild(writingSpaceContainer);
				document.querySelectorAll(".calendarSectionsContainer")[day].appendChild(calendarSections);
				sectionText.classList.add("sectionText");
				dayHours.classList.add("dayHours");
				writingSpaceContainer.classList.add("writingSpaceContainer");
				writingSpace.classList.add("writingSpace");
				innerHour.classList.add("innerHour");
				innerWritingSpace.classList.add("innerWritingSpace");
				innerWritingSpace.type = "text";
				innerWritingSpace.name = "textArea";
				clearTextButton.classList.add("clearTextButton");
				clearTextButtonInternal1.classList.add("clearTextButtonInternal1");
				clearTextButtonInternal2.classList.add("clearTextButtonInternal2");
				doneButton.classList.add("doneButton", "inputToggle");
				doneButton.type = "button";
				doneButton.value = "Done";
				doneText.classList.add("doneText");
				calendarSections.appendChild(dayHours);
				calendarSections.appendChild(sectionText);
				writingSpaceContainer.appendChild(writingSpace);
				writingSpace.appendChild(innerHour);
				writingSpace.appendChild(innerWritingSpace);
				writingSpace.appendChild(doneButton);
				writingSpaceContainer.appendChild(clearTextButton);
				clearTextButton.appendChild(clearTextButtonInternal1);
				clearTextButton.appendChild(clearTextButtonInternal2);
				doneButton.appendChild(doneText);
				
				if (this.dayHoursMax == 24) {
					if (this.calendarSectionsTotal == 48) {
						if (z == 0) {
							dayHours.innerHTML = `${this.hourCount}:00`;
						} else {
							if (z % 2 == 0) {
							dayHours.innerHTML = `${this.hourCount}:00`;
							} else {
							dayHours.innerHTML = `${this.hourCount++}:30`;
							}
						}

						if (this.hourCount == 24) {
							this.hourCount = 0;
						}
					} else {
						dayHours.innerHTML = `${this.hourCount++}:00`;

						if (this.hourCount == 24) {
							this.hourCount = 0;
						}
					}
				} else {
					let ampm = "am";
					if (this.calendarSectionsTotal == 48) {
						if (z <= 23) {
								ampm = "am";
							} else {
								ampm = "pm";
							}
							if (z % 2 == 0) {
								dayHours.innerHTML = `${this.hourCount}:00${ampm}`;
							} else {
								dayHours.innerHTML = `${this.hourCount++}:30${ampm}`;
							}

						if (this.hourCount == 13) {
							this.hourCount = 1;
						}
					} else {
						dayHours.innerHTML = `${this.hourCount++}:00${ampm}`;

						if (this.hourCount == 13) {
							this.hourCount = 1;
						}
					}
				}

				innerHour.innerHTML = dayHours.innerHTML;
			}
		}

		this.manageInput();

		for (let x = 0; x < document.querySelectorAll(".calendarSections").length; x++) {
			document.querySelectorAll(".dayHours")[x].style.color = mechanics.colorButtons[0].value;
			document.querySelectorAll(".calendarSections")[x].addEventListener("click", function () {
				mechanics.toggleWritingSpace(document.querySelectorAll(".writingSpaceContainer")[x]);
				mechanics.manageInput();
			})

			document.querySelectorAll(".clearTextButton")[x].addEventListener("click", function () {
				document.querySelectorAll(".innerWritingSpace")[x].value = "";
				document.querySelectorAll(".clearTextButton")[x].style.top = `${document.querySelectorAll(".innerWritingSpace")[x].offsetHeight}px`;
				document.querySelectorAll(".clearTextButton")[x].style.zIndex = "-1";
				document.querySelectorAll(".clearTextButton")[x].style.opacity = ".2";
			});

			document.querySelectorAll(".innerWritingSpace")[x].addEventListener("resize", function () {
				document.querySelectorAll(".clearTextButton")[x].style.top = `${document.querySelectorAll(".innerWritingSpace")[x].offsetHeight}px`;
			})

			document.querySelectorAll(".doneButton")[x].addEventListener("click", function () {
				mechanics.toggleWritingSpace(document.querySelectorAll(".writingSpaceContainer")[x]);
				document.querySelectorAll(".sectionText")[x].innerHTML = document.querySelectorAll(".innerWritingSpace")[x].value;
				mechanics.post(document.querySelectorAll(".innerWritingSpace")[x].value);
			})
		}

		this.calendarSectionSizing();
	},
	post: function (text) {
		let textInput = text.innerHTML;
		let request = new XMLHttpRequest();
		let url = "index.php";
		let data = "entry="+text;

		console.log(typeof(text));

		request.open("POST", url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		/*request.onreadystatechange = () =>  {
			if (request.readyState == 4 && request.status == 200) {
				let return_data = request.responseText;
			}
		};*/
		request.send(typeof(text));

	},
	calendarSectionSizing: function () {
		for (let x = 0; x < document.querySelectorAll(".titleContainer").length; x++) {
			document.querySelectorAll(".titleContainer")[x].style.top = `${mechanics.title.offsetHeight}px`;
		}

		for (let x = 0; x < document.querySelectorAll(".calendarSectionsContainer").length; x++) {
			document.querySelectorAll(".calendarSectionsContainer")[x].style.top = `${document.querySelectorAll(".titleContainer")[x].offsetHeight}px`;
		}
	},
	setWeekDays: function (pastDays) {
		let counter = this.date.getDay();
		for (let x = 0; x < pastDays.length; x++) {
			counter--;
			if (counter == -1) {
				counter = 6;
			}
			pastDays[x].innerHTML = this.weekDays[counter];
		}
	},
	setOrdinals: function (num) {
		if (num.toString().length < 2) {
			if (num == 1) {
				return "st";
			} else if (num == 2) {
				return "nd";
			} else if (num == 3) {
				return "rd";
			} else {
				return "th";
			}
		} else {
			if (num.toString()[0] == 1) {
				return "th";
			} else if (num.toString()[1] == 1) {
				return "st";
			} else if (num.toString()[1] == 2) {
				return "nd";
			} else if (num.toString()[1] == 3) {
				return "rd";
			} else {
				return "th";
			}
		}
	},
	openDays: function (num) {
		this.innerDays[num].style.display = "flex";
		this.innerDays[num].style.top = "0";
		this.innerDays[num].style.marginTop = `${this.title.offsetHeight}px`;
		this.innerDays[num].style.width = "100%";
		this.innerDays[num].style.height = "80%";
		this.innerDays[num].style.right = `0`;
		this.innerDays[num].style.opacity = "1";
	},
	closeDays: function (num) {
		this.innerDays[num].style.top = "0";
		this.innerDays[num].style.marginTop = `${this.title.offsetHeight}px`;
		this.innerDays[num].style.width = "0";
		this.innerDays[num].style.height = "0";
		this.innerDays[num].style.right = "0";
		this.innerDays[num].style.opacity = "0";

		setTimeout(function () {
			mechanics.innerDays[num].style.display = "none";
		}, 150)
	},
	toggleWritingSpace: function (container) {
		if (container.offsetHeight != container.parentNode.offsetHeight) {
			container.style.zIndex = "1";
			container.style.opacity = "1";
			container.style.width = "100%";
			container.style.height = `${container.parentNode.offsetHeight}px`;
			container.style.right = "0";
			container.style.top = `${this.title.offsetHeight + container.parentNode.parentNode.children[0].offsetHeight}px`;
			container.children[0].children[1].style.height = "78%";
			container.children[0].children[1].focus();

			for (let x = 0; x < document.querySelectorAll(".calendarSections").length; x++) {
				document.querySelectorAll(".calendarSections")[x].style.pointerEvents = "none";

				document.querySelectorAll(".clearTextButton")[x].style.top = "78%"//`${document.querySelectorAll(".innerWritingSpace")[x].offsetHeight}px`;
				document.querySelectorAll(".clearTextButton")[x].style.right = "4%";
				document.querySelectorAll(".clearTextButton")[x].addEventListener("click", function () {
					document.querySelectorAll(".clearTextButton")[x].parentNode.children[0].children[1].value = "";
					this.tempEvents = "";
					mechanics.manageInput();
				});
			}

			container.parentNode.parentNode.style.overflowY = "hidden";
			container.parentNode.parentNode.children[0].children[2].style.pointerEvents = "none";
			container.parentNode.parentNode.children[0].children[2].style.opacity = ".2";
		} else {
			container.style.zIndex = "-48";
			container.style.opacity = "0";
			container.style.width = "120%";
			container.style.height = "120%";
			container.style.right = "-15%";
			container.style.top = "-15%";

			for (let x = 0; x < document.querySelectorAll(".calendarSections").length; x++) {
				document.querySelectorAll(".calendarSections")[x].style.pointerEvents = "auto";
				document.querySelectorAll(".calendarSections")[x].style.color = this.colorButtons[0].value;
			}

			container.parentNode.parentNode.style.overflowY = "scroll";
			container.parentNode.parentNode.children[0].children[2].style.pointerEvents = "auto";
			container.parentNode.parentNode.children[0].children[2].style.opacity = "1";
		}

		container.children[1].children[0].style.backgroundColor = this.colorButtons[0].value;
		container.children[1].children[1].style.backgroundColor = this.colorButtons[0].value;
		container.style.backgroundColor = this.colorButtons[1].value;
		container.children[0].children[1].style.backgroundColor = this.colorButtons[1].value;
		container.children[0].children[2].children[0].style.color = this.colorButtons[0].value;
	},
	manageInput: function () {
		for (let x = 0; x < document.querySelectorAll(".innerWritingSpace").length; x++) {
			document.querySelectorAll(".innerWritingSpace")[x].addEventListener("input", function () {
				if (document.querySelectorAll(".innerWritingSpace")[x].value == "") {
					mechanics.tempEvents = "";
					document.querySelectorAll(".clearTextButton")[x].style.top = `${document.querySelectorAll(".innerWritingSpace")[x].offsetHeight}px`;
					document.querySelectorAll(".clearTextButton")[x].style.zIndex = "-1";
					document.querySelectorAll(".clearTextButton")[x].style.opacity = ".2";
				} else {
					mechanics.tempEvents = "";
					mechanics.tempEvents = document.querySelectorAll(".innerWritingSpace")[x].value;
					document.querySelectorAll(".clearTextButton")[x].style.top = `${document.querySelectorAll(".innerWritingSpace")[x].offsetHeight}px`;
					document.querySelectorAll(".clearTextButton")[x].style.right = "4%";
					document.querySelectorAll(".clearTextButton")[x].style.zIndex = "48";
					document.querySelectorAll(".clearTextButton")[x].style.opacity = "1";
				}
			});
		}
	},
	sizeSwitch: function (list) {
		if (list.name == "fontSize"){
			switch(list.options.selectedIndex){
				case 0:
					for (let x = 0; x < this.text.length; x++) {
						this.text[x].style.fontSize = "16px";
						this.text[x].style.lineHeight = "16px";
						this.text[x].style.margin = "0 0 11px 0";
						this.text[x].style.letterSpacing = "0";
					}

					for (let x = 0; x < this.listButtons.length; x++) {
						this.listButtons[x].style.height = "20px";
						this.listButtons[x].style.margin = "0 0 7px 0";
					}

					for (let x = 0; x < this.colorButtons.length; x++) {
						this.colorButtons[x].style.height = "20px";
						this.colorButtons[x].style.margin = "0 0 7px 0";
					}

					for (let x = 0; x < this.arrowRButtons.length; x++) {
						this.arrowRButtons[x].style.height = "20px";
						this.arrowLButtons[x].style.height = "35px";
					}

					for (let x = 0; x < this.onOffButtons.length; x++) {
						this.onOffButtons[x].style.width = "40px";
						this.onOffButtons[x].style.height = "20px";
						this.onOffButtons[x].style.marginBottom = "0 auto 8px";
						this.onOffButtons[x].children[6].style.width = "18px";
						this.onOffButtons[x].children[6].style.height = "18px";
						
						for (let y = 0; y < this.onOffBG.length; y++) {
							this.onOffBG[y].style.width = "18px";
							this.onOffBG[y].style.height = "18px";
							if (this.onOffBG[y].className == "onOffButton2 onOffBG") {
								this.onOffBG[y].style.width = "50%";
							}
						}
					}

					for (let x = 0; x < this.infoButtons.length; x++) {
						this.infoButtons[x].style.width = "16px";
						this.infoButtons[x].style.height = "16px";
						this.infoButtons[x].style.margin = "auto 20px";
					}

					for (let x = 0; x < this.normalButtons.length; x++) {
						this.normalButtons[x].style.height = "20px";
						this.normalButtons[x].style.margin = "0 0 7px 0";
					}
				break;
				case 1:
					for (let x = 0; x < this.text.length; x++) {
						this.text[x].style.fontSize = "17px";
						this.text[x].style.lineHeight = "17px";
						this.text[x].style.margin = "0 0 11px 0";
						this.text[x].style.letterSpacing = "-.1px";
					}

					for (let x = 0; x < this.listButtons.length; x++) {
						this.listButtons[x].style.height = "21px";
						this.listButtons[x].style.margin = "0 0 8px 0";
					}

					for (let x = 0; x < this.colorButtons.length; x++) {
						this.colorButtons[x].style.height = "21px";
						this.colorButtons[x].style.margin = "0 0 8px 0";
					}

					for (let x = 0; x < this.arrowRButtons.length; x++) {
						this.arrowRButtons[x].style.height = "21px";
						this.arrowLButtons[x].style.height = "36px";
					}

					for (let x = 0; x < this.onOffButtons.length; x++) {
						this.onOffButtons[x].style.width = "42px";
						this.onOffButtons[x].style.height = "22px";
						this.onOffButtons[x].style.marginBottom = "0 auto 8px";
						this.onOffButtons[x].children[6].style.width = "19px";
						this.onOffButtons[x].children[6].style.height = "19px";
						
						for (let y = 0; y < this.onOffBG.length; y++) {
							this.onOffBG[y].style.width = "19px";
							this.onOffBG[y].style.height = "19px";
							if (this.onOffBG[y].className == "onOffButton2 onOffBG") {
								this.onOffBG[y].style.width = "50%";
							}
						}
					}

					for (let x = 0; x < this.infoButtons.length; x++) {
						this.infoButtons[x].style.width = "17px";
						this.infoButtons[x].style.height = "17px";
						this.infoButtons[x].style.margin = "auto 22px";
					}

					for (let x = 0; x < this.normalButtons.length; x++) {
						this.normalButtons[x].style.height = "21px";
						this.normalButtons[x].style.margin = "0 0 8px 0";
					}
				break;
				case 2:
					for (let x = 0; x < this.text.length; x++) {
						this.text[x].style.fontSize = "18px";
						this.text[x].style.lineHeight = "18px";
						this.text[x].style.margin = "0 0 11px 0";
						this.text[x].style.letterSpacing = "-.2px";
					}

					for (let x = 0; x < this.listButtons.length; x++) {
						this.listButtons[x].style.height = "22px";
						this.listButtons[x].style.margin = "0 0 8px 0";
						this.listButtons[x].style.borderRadius = "7px"
					}

					for (let x = 0; x < this.colorButtons.length; x++) {
						this.colorButtons[x].style.height = "22px";
						this.colorButtons[x].style.margin = "0 0 8px 0";
					}

					for (let x = 0; x < this.arrowRButtons.length; x++) {
						this.arrowRButtons[x].style.height = "22px";
					
						this.arrowLButtons[x].style.height = "97px";

						for (let y = 0; y < this.arrows.length; y++) {
							this.arrows[y].style.height = "22px";
						}
					}

					for (let x = 0; x < this.onOffButtons.length; x++) {
						this.onOffButtons[x].style.width = "44px";
						this.onOffButtons[x].style.height = "22px";
						this.onOffButtons[x].style.marginBottom = "0 auto 8px";
						this.onOffButtons[x].children[6].style.width = "19px";
						this.onOffButtons[x].children[6].style.height = "19px";
						
						for (let y = 0; y < this.onOffBG.length; y++) {
							this.onOffBG[y].style.width = "20px";
							this.onOffBG[y].style.height = "20px";
							if (this.onOffBG[y].className == "onOffButton2 onOffBG") {
								this.onOffBG[y].style.width = "50%";
							}
						}
					}

					for (let x = 0; x < this.infoButtons.length; x++) {
						this.infoButtons[x].style.width = "20px";
						this.infoButtons[x].style.height = "20px";
						this.infoButtons[x].style.margin = "auto";
					}

					for (let x = 0; x < this.normalButtons.length; x++) {
						this.normalButtons[x].style.height = "22px";
						this.normalButtons[x].style.margin = "0 0 8px 0";
					}
				break;
			}
		}
	},
	sizeCheck: function () {
		if (window.innerWidth < 375) {
			mechanics.listButtons[0].children[2].style.display = "none";
		} else {
			mechanics.listButtons[0].children[2].style.display = "initial";
		}
	},
	colorSwitch: function () {
		if (mechanics.listButtons[1].value == "dark") {
			mechanics.colorButtons[0].value = themes.dark[0];
			mechanics.colorButtons[1].value = themes.dark[1];
			mechanics.title.style.backgroundColor = themes.dark[2];
			mechanics.footer.style.backgroundColor = themes.dark[2];
			mechanics.subL[0].children[2].style.color = "rgba(82,82,82,.8)";
			mechanics.subL[0].children[3].style.color = "rgba(82,82,82,.8)";

			for (let x = 0; x < document.querySelectorAll(".titleContainer").length; x++) {
				document.querySelectorAll(".titleContainer")[x].style.backgroundColor = themes.dark[2];
				document.querySelectorAll(".titleContainer")[x].style.boxShadow = `inset 0 0 1px 2px ${themes.dark[1]}`;
			}

			for (let x = 0; x < this.hiddenDiv.length; x++) {
				this.hiddenDiv[x].style.backgroundColor = themes.dark[1];
			}

			for (let x = 0; x < mechanics.colorButtons.length; x++) {
				mechanics.colorButtons[x].disabled = true;
			}
		
			for (let x = 0; x < document.querySelectorAll(".days").length; x++) {
				
				if (document.querySelectorAll(".weekDays")[x].innerHTML == "Sun") {
					document.querySelectorAll(".days")[x].style.backgroundColor = "rgba(121,0,0,.1)";
					document.querySelectorAll(".markers")[x].style.backgroundColor = themes.dark[1];
				} else {
					document.querySelectorAll(".days")[x].style.backgroundColor = themes.dark[1];
					document.querySelectorAll(".markers")[x].style.backgroundColor = themes.dark[1];
				}
			}

			for (let x = 0; x < document.querySelectorAll(".writingSpaceContainer").length; x++) {
				document.querySelectorAll(".writingSpaceContainer")[x].style.backgroundColor = themes.dark[1];
				document.querySelectorAll(".writingSpaceContainer")[x].style.color = themes.dark[0];
				document.querySelectorAll(".dayHours")[x].style.color = themes.dark[0];
				document.querySelectorAll(".innerWritingSpace")[x].style.backgroundColor = themes.dark[1];
				document.querySelectorAll(".innerWritingSpace")[x].style.boxShadow = `inset 0 0 3px 2px${themes.dark[2]}`;
				document.querySelectorAll(".innerHour")[x].style.color = themes.dark[0];
				document.querySelectorAll(".doneButton")[x].style.boxShadow = `inset 0 0 1px 2px${themes.dark[2]}`;
				document.querySelectorAll(".doneButton")[x].style.backgroundColor = themes.dark[2];
				document.querySelectorAll(".doneText")[x].style.color = themes.dark[0];
			}
		} else if (mechanics.listButtons[1].value == "light") {
			mechanics.colorButtons[0].value = themes.light[0];
			mechanics.colorButtons[1].value = themes.light[1];
			mechanics.title.style.backgroundColor = themes.light[2];
			mechanics.footer.style.backgroundColor = themes.light[2];
			mechanics.subL[0].children[2].style.color = "rgba(82,82,82,.8)";
			mechanics.subL[0].children[3].style.color = "rgba(82,82,82,.8)";

			for (let x = 0; x < document.querySelectorAll(".titleContainer").length; x++) {
				document.querySelectorAll(".titleContainer")[x].style.backgroundColor = themes.light[2];
				document.querySelectorAll(".titleContainer")[x].style.boxShadow = `inset 0 0 1px 2px ${themes.light[1]}`;
			}

			for (let x = 0; x < this.hiddenDiv.length; x++) {
				this.hiddenDiv[x].style.backgroundColor = themes.light[1];
			}

			for (let x = 0; x < mechanics.colorButtons.length; x++) {
				mechanics.colorButtons[x].disabled = true;
			}

			for (let x = 0; x < document.querySelectorAll(".days").length; x++) {
				
				if (document.querySelectorAll(".weekDays")[x].innerHTML == "Sun") {
					document.querySelectorAll(".days")[x].style.backgroundColor = "#A00000";
					document.querySelectorAll(".markers")[x].style.backgroundColor = themes.light[1];
				} else {
					document.querySelectorAll(".days")[x].style.backgroundColor = themes.light[1];
					document.querySelectorAll(".markers")[x].style.backgroundColor = themes.light[1];
				}
			}

			for (let x = 0; x < document.querySelectorAll(".writingSpaceContainer").length; x++) {
				document.querySelectorAll(".writingSpaceContainer")[x].style.backgroundColor = themes.light[1];
				document.querySelectorAll(".writingSpaceContainer")[x].style.color = themes.light[0];
				document.querySelectorAll(".dayHours")[x].style.color = themes.light[0];
				document.querySelectorAll(".innerWritingSpace")[x].style.backgroundColor = themes.light[1];
				document.querySelectorAll(".innerWritingSpace")[x].style.boxShadow = `inset 0 0 3px 2px${themes.light[2]}`;
				document.querySelectorAll(".innerHour")[x].style.color = themes.light[0];
				document.querySelectorAll(".doneButton")[x].style.boxShadow = `inset 0 0 1px 2px${themes.light[1]}`;
				document.querySelectorAll(".doneButton")[x].style.backgroundColor = themes.light[2];
				document.querySelectorAll(".doneText")[x].style.color = themes.light[0]
			}
		} else {
			for (let x = 0; x < mechanics.colorButtons.length; x++) {
				mechanics.colorButtons[x].disabled = false;
			}

			for (let x = 0; x < document.querySelectorAll(".writingSpaceContainer").length; x++) {
				document.querySelectorAll(".dayHours")[x].style.color = mechanics.colorButtons[0].value;
				document.querySelectorAll(".writingSpaceContainer")[x].style.backgroundColor = mechanics.colorButtons[1].value;
				document.querySelectorAll(".innerWritingSpace")[x].style.backgroundColor = this.colorButtons[1].value;
				document.querySelectorAll(".calendarSections")[x].style.color = mechanics.colorButtons[0].value;
				document.querySelectorAll(".innerHour")[x].style.color = mechanics.colorButtons[0].value;
				document.querySelectorAll(".doneButton")[x].style.boxShadow = `inset 0 0 1px 2px ${this.colorButtons[1].value}`;
				document.querySelectorAll(".doneText")[x].style.color = mechanics.colorButtons[0].value;
			}
		}

		if (mechanics.colorButtons[0].disabled == true) {
			mechanics.subL[0].children[2].style.color = "rgba(82,82,82,.8)";
			mechanics.subL[0].children[3].style.color = "rgba(82,82,82,.8)";
		} else {
			mechanics.subL[0].children[2].style.color = mechanics.colorButtons[0].value;
			mechanics.subL[0].children[3].style.color = mechanics.colorButtons[0].value;
		}

		for (let x = 0; x < this.onOffBG.length; x++) {
			if (this.onOffBG[x].style.backgroundColor != "rgb(76, 217, 100)") {
				this.onOffBG[x].style.backgroundColor = mechanics.colorButtons[1].value;
			}
		}

		mechanics.title.style.color = mechanics.colorButtons[0].value;
		mechanics.title.style.boxShadow = `inset 0 0 20px 8px ${mechanics.colorButtons[1].value}`;
		document.querySelector("html").style.backgroundColor = mechanics.colorButtons[1].value;
		mechanics.footer.style.boxShadow = `inset 0 0 20px 8px ${mechanics.colorButtons[1].value}`;

		for (let x = 0; x < this.text.length; x++) {
			this.text[x].style.color = this.colorButtons[0].value;
		}

		for (let x = 0;  x < document.querySelectorAll("h3").length; x++) {
			document.querySelectorAll("h3")[x].style.color = this.colorButtons[0].value;
		}

		for (let x = 0; x < this.hiddenDiv.length; x++) {
			this.hiddenDiv[x].style.backgroundColor = this.colorButtons[1].value;
		}

		this.calendarYearContainer.style.backgroundColor = this.colorButtons[1].value;
		this.calendarYear.style.color = this.colorButtons[0].value;
		this.calendarYearContainer.style.boxShadow = `0 0 10px 5px ${this.colorButtons[1].value}`;

		for (let x = 0; x < document.querySelectorAll(".days").length; x++) {
			if (document.querySelectorAll(".weekDays")[x].innerHTML == "Sun") {
				document.querySelectorAll(".days")[x].style.backgroundColor = "rgba(120,0,0,.8)";
				document.querySelectorAll(".markers")[x].style.backgroundColor = this.colorButtons[1].value;;
			} else {
				document.querySelectorAll(".days")[x].style.backgroundColor = this.colorButtons[1].value;;
				document.querySelectorAll(".markers")[x].style.backgroundColor = this.colorButtons[1].value;;
			}
			this.innerDays[x].style.backgroundColor = this.colorButtons[1].value;
			document.querySelectorAll(".days")[x].style.color = mechanics.colorButtons[0].value;
			document.querySelectorAll(".titleContainer")[x].style.boxShadow = `inset 0 0 1px 2px ${this.colorButtons[1].value}`;
		}

		for (let x = 0; x < document.querySelectorAll(".shapedButtons").length; x++) {
			if (document.querySelectorAll(".shapedButtons")[x].className == "removeButtonPlus2 shapedButtons" || document.querySelectorAll(".shapedButtons")[x].className == "saveLoadButtons1 shapedButtons" || document.querySelectorAll(".shapedButtons")[x].className == "clearButton1 shapedButtons") {
				document.querySelectorAll(".shapedButtons")[x].style.borderColor = this.colorButtons[0].value;
			} else {
				document.querySelectorAll(".shapedButtons")[x].style.backgroundColor = this.colorButtons[0].value;
			}
		}

		for (let x = 0; x < this.menuTitles.length; x++) {
			this.menuTitles[x].style.color = this.colorButtons[0].value;
		}

		for (let x = 0; x < this.listButtons.length; x++) {
			this.listButtons[x].style.color = this.colorButtons[0].value;
			this.listButtons[x].style.backgroundColor = this.colorButtons[1].value;
		}

		this.title.style.color = this.colorButtons[0].value;
		this.title.style.boxShadow = `inset 0 0 20px 8px ${this.colorButtons[1].value}`;

		if (this.listButtons[1].value == "dark" || this.listButtons[1].value == "light") {
			this.text[2].style.color = "rgba(82, 82, 82, 0.6)";
			this.text[3].style.color = "rgba(82, 82, 82, 0.6)";
		}

		this.disabledFields(this.onOffButtons[3].children[6].offsetLeft);
	},
	hiddenDivToggle: function (arrow) {
		if (arrow.className == "arrowR arrowSubContainer") {
			if (arrow == this.arrowR[0]) {
				this.hiddenDiv[0].style.right = "0";
			}
			
			if (arrow == this.arrowR[1]) {
				this.hiddenDiv[1].style.right = "0";
			}
		}

		if (arrow.className == "arrowL arrowSubContainer") {
			if (arrow == this.arrowL[0]) {
				this.hiddenDiv[0].style.right = "-100%";
			}
			
			if (arrow == this.arrowL[1]) {
				this.hiddenDiv[1].style.right = "-100%";
			}
		}
	},
	onOffToggle: function (button, num) {
		for (let x = 0; x < mechanics.onOffButtons.length; x++) {
			if (button.children[6].offsetLeft == 1) {
				for (let y = 0; y < button.children.length - 1; y++) {
					button.children[y].style.backgroundColor = "#4CD964";
				}			
			} else {
				for (let y = 0; y < button.children.length - 1; y++) {
					if (y < 3) {
						button.children[y].style.backgroundColor = "#3B3B3B";
					} else {
						button.children[y].style.backgroundColor = mechanics.colorButtons[1].value;
					}
				}
			}
		}
		
		if (button == this.onOffButtons[3]) {
			this.onOffButtons[3].children[6].addEventListener("transitionend", function () {
				mechanics.disabledFields(button.children[6].offsetLeft);		
			})
		}

		if (this.innerButton[num].offsetLeft == 1) {
			this.innerButton[num].style.left = "50%";
			
			if (num == 0) {

			}
			
			if (num == 1) {

			}
			
			if (num == 2) {
				mechanics.alertsOn = true;
			}
			
			if (num == 3) {

			}
			
			if (num == 4) {

			}

			if (num == 5) {
				localStorage.autoLoad = "y";
			}
		} else {
			this.innerButton[num].style.left = "1px";
			
			if (num == 0) {

			}
			
			if (num == 1) {

			}
			
			if (num == 2) {
				mechanics.alertsOn = false;
			}
			
			if (num == 3) {

			}
			
			if (num == 4) {

			}

			if (num == 5) {
				localStorage.autoLoad = "";
			}
		}		
	},
	disabledFields: function (offset) {
		if (offset <= 1) {
			this.vibrationText[0].style.color = "rgba(82, 82, 82, 0.6)";
			this.vibrationText[1].style.color = "rgba(82, 82, 82, 0.6)";
			this.listButtons[4].style.pointerEvents = "none";
			this.listButtons[4].style.color = "rgba(82, 82, 82, 0.6)";
			this.onOffButtons[2].style.pointerEvents = "none";
		} else if (offset > 1)  {
			this.vibrationText[0].style.color = this.colorButtons[0].value;
			this.vibrationText[1].style.color = this.colorButtons[0].value;
			this.listButtons[4].style.pointerEvents = "initial";
			this.listButtons[4].style.color = this.colorButtons[0].value;
			this.onOffButtons[2].style.pointerEvents = "initial";
		}
	},
	infoToggle: function (info) {
		info.children[0].style.left = "-300px";
		info.children[0].style.top = "-125px";
		info.children[0].style.width = `${window.innerWidth - 100}px`;
		info.children[0].style.height = "250px";
		info.children[0].style.zIndex = "1";

		console.log(info.children[0])

		/*info.children[0].children[0].addEventListener("click", function () {
			info.children[0].style.left = "0";
			info.children[0].style.top = "0";
			info.children[0].style.width = "35px";
			info.children[0].style.height = "35px";
			console.log(info.children[0].style.height)
		})*/
	},
	saveClear: function (button) {
		if (button.className == "normalButtons saveButton") {
			localStorage.test = "x";

			if (localStorage.test != "x") {
				alert("For this to work you must have third party cookies enabled (chrome)!");
			} else {
				localStorage.textColor = mechanics.colorButtons[0].value;
				localStorage.backgroundColor = mechanics.colorButtons[1].value;

				this.tempSettings = [];
				this.tempOnOffBg = [];

				for (let x = 0; x < this.onOffButtons.length; x++) {
					this.tempSettings.push(this.onOffButtons[x].children[6].offsetLeft)
				}

				for (let x = 0; x < this.onOffBG.length; x++) {
					this.tempOnOffBg.push(this.onOffBG[x].style.backgroundColor);
				}

				localStorage.onOffButtons = this.tempSettings;
				localStorage.onOffBG = this.tempOnOffBg;

				if (this.alertsOn == true) {
					alert("Local data saved.")
				}
			}
		} else if (button.className == "normalButtons loadButton") {
			this.load();
		} else {
			if (localStorage.textColor != undefined) {
				localStorage.removeItem("textColor");
				localStorage.removeItem("backgroundColor");
				localStorage.removeItem("onOffButtons");
				if (this.alertsOn == true) {
					alert("Local data has been removed.");
				}
			} else {
				if (this.alertsOn == true) {
					alert("Local data has already been removed!");
				}
			}
		}
	},
	load: function () {
		if (localStorage.textColor != undefined) {
			mechanics.colorButtons[0].value = localStorage.textColor;
			mechanics.colorButtons[1].value = localStorage.backgroundColor;
			mechanics.listButtons[1][2].selected = "selected";
			
			let tempFinalSettings = Array.from(localStorage.onOffButtons.split(","));
			let tempFinalOnOffBg = Array.from(localStorage.onOffBG.split(")"));

			for (let x = 0; x < this.onOffButtons.length; x++) {
				this.onOffButtons[x].children[6].style.left = tempFinalSettings[x].toString() + "px";
			}

			for (let x = 0; x < tempFinalSettings.length; x++) {
				if (tempFinalSettings[x] != "1") {
					for (let y = 0; y < this.onOffButtons[x].children.length - 1; y++) {
						this.onOffButtons[x].children[y].style.backgroundColor = "rgb(76, 217, 100)";
					}
				}
			}

			for (let x = 0; x < this.onOffBG.length; x++) {
				this.onOffBG[x].style.backgroundColor = `${localStorage.onOffBG[x]})`;
			}

			if (this.alertsOn == true) {
				alert("Local data loaded.");
			}

			this.colorSwitch();
			this.disabledFields(this.onOffButtons[3].children[6].offsetLeft);
		} else {
			console.log("No data present");
		}
	}
}

const themes = {
	scaled: 1.5,
	dark: [
		"#F45000",
		"#000000",
		"#333333"
	],
	light: [
		"#101010",
		"#FFFFFF",
		"#5C5C5C"
	]
}

window.onclick = () => {
	//console.log(mechanics.tempWeekDays.reverse());
	/*console.log(document.querySelectorAll(".innerWritingSpace")[0])
	console.log(document.querySelectorAll(".clearTextButton")[0].offsetHeight);
	console.log(document.querySelectorAll(".clearTextButton")[0]);*/
}

window.addEventListener("resize", mechanics.sizeCheck);

window.onload = () => {

	if (localStorage.autoLoad == "y") {
		mechanics.load();
	}

	mechanics.generateCalendar();
	mechanics.sizeCheck();
	mechanics.disabledFields(mechanics.onOffButtons[3].children[6].offsetLeft);
	mechanics.colorSwitch();

	for (let x = 0; x < mechanics.listButtons.length; x++) {
		mechanics.listButtons[x].addEventListener("change", function () {
			if (x == 0) {
				mechanics.sizeSwitch(mechanics.listButtons[x]);
			} else {
				mechanics.colorSwitch();
			}
		});
	}

	for (let x = 0; x < mechanics.colorButtons.length; x++) {
		mechanics.colorButtons[x].addEventListener("change", function () {
			mechanics.colorSwitch();
		});
	}

	for (let x = 0; x < mechanics.arrows.length; x++) {
		mechanics.arrows[x].addEventListener("click", function () {
			mechanics.hiddenDivToggle(mechanics.arrows[x])
		});
	}

	for (let x = 0; x < mechanics.onOffButtons.length; x++) {
		mechanics.onOffButtons[x].addEventListener("click", function () {
			mechanics.onOffToggle(mechanics.onOffButtons[x], x);
		});
	}

	for (let x = 0; x < mechanics.infoButtons.length; x++) {
		mechanics.infoButtons[x].addEventListener("click", function () {
			mechanics.infoToggle(mechanics.infoButtons[x]);
		});
	}

	for (let x = 0; x < mechanics.normalButtons.length; x++) {
		mechanics.normalButtons[x].addEventListener("click", function () {
			mechanics.saveClear(mechanics.normalButtons[x]);
		})
	}

	for (let x = 0; x < mechanics.menuButtons.length; x++) {
		mechanics.menuButtons[x].addEventListener("click", function () {
			if (mechanics.menuButtons[x].className == "agendaButton footerInternal") {
				mechanics.mainSections[0].style.display = "initial";
				mechanics.mainSections[1].style.display = "none";
				mechanics.mainSections[2].style.display = "none";
			}

			if (mechanics.menuButtons[x].className == "calendarButton footerInternal") {
				mechanics.mainSections[0].style.display = "none";
				mechanics.mainSections[1].style.display = "initial";
				mechanics.mainSections[2].style.display = "none";
			}

			if (mechanics.menuButtons[x].className == "settingsButton footerInternal") {
				mechanics.mainSections[0].style.display = "none";
				mechanics.mainSections[1].style.display = "none";
				mechanics.mainSections[2].style.display = "initial";
				mechanics.disabledFields(mechanics.onOffButtons[3].children[6].offsetLeft);
			}

			if (mechanics.menuButtons[x].style.opacity != "0") {
				mechanics.title.innerHTML = mechanics.menuButtons[x].children[0].innerHTML;
			}
		});
	}

	mechanics.listButtons[2].addEventListener("change", function () {
		mechanics.dayHoursMax = Number(mechanics.listButtons[2].value);
	})

	mechanics.listButtons[3].addEventListener("change", function () {
		mechanics.calendarSectionsTotal = Number(mechanics.listButtons[3].value);
	})
}

window.onresize = () => {
	mechanics.calendarSectionSizing();
}