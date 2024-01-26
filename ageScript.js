function calcAge() {
	// BIRTHDAY
	const myBirthYear = 2005;
	const myBirthMonth = 9;
	const myBirthDay = 14;

	// MONTHS LISTED BY DAY LENGTH (EXCLUDING FEB)
	const thirtyDayMs = [4, 6, 9, 11];
	const thirtyOneDayMs = [1, 3, 5, 7, 8, 10, 12];

	// SET CURRENT RELATIVE DATES
	const today = new Date();
	const toYear = today.getUTCFullYear() - 1;
	const toMonth = today.getMonth() + 1;
	const prevMonth = toMonth - 1;
	const toDay = today.getDate();

	// SETTING PREVIOUS MONTH LENGTHS
	//  Declare previous month length variable
	let prevMonthLength;
	//  Thirty (30) day months
	thirtyDayMs.forEach((month) => {
		if (prevMonth == month) {
			prevMonthLength = 30;
		}
	});
	//  Thirty-one (31) day Months
	thirtyOneDayMs.forEach((month) => {
		if (prevMonth == month) {
			prevMonthLength = 31;
		}
	});
	// February (28/29)
	if (prevMonth == 2) {
		if (toYear % 4 == 0) {
			prevMonthLength = 29;
		} else {
			prevMonthLength = 28;
		}
	}

	// INCREASE YEAR AFTER BIRTHDAY
	if ((toMonth == 9 && toDay >= 14) || toMonth > 9) {
		toYear += 1;
	}

	// CALCULATE DIFFERENCE FROM BIRTH TO NOW
	let yrDiff = toYear - myBirthYear;
	let mDiff = toMonth - myBirthMonth;
	if (mDiff < 1) {
		mDiff += 12;
	}
	let dayDiff = toDay - myBirthDay;
	if (dayDiff < 1) {
		mDiff--;
		if (dayDiff < 0) {
			dayDiff += prevMonthLength;
		}
	}

	// ASSIGN AGE TO VARIABLES
	let myAge = yrDiff.toString();
	let myFullAge =
		yrDiff.toString() +
		" years, " +
		mDiff.toString() +
		" months and " +
		dayDiff.toString() +
		" days";

	let myAgeElement = document.getElementById("my-age");
	let myFullAgeElement = document.getElementById("my-full-age");

	myAgeElement.innerHTML = myAge;
	myFullAgeElement.innerHTML = myFullAge;
}
