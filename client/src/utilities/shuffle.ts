const shuffle = {
	array: (array: any) => {
		let currentIndex = array.length;
		let temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	},

	arrayCopy: (array: any) => {
		let currentIndex = array.length;
		let temporaryValue, randomIndex;

		// Make a copy of the original array
		const arrayCopy = array.slice();

		// Shuffle the original array
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		// Shuffle the copied array
		currentIndex = arrayCopy.length;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = arrayCopy[currentIndex];
			arrayCopy[currentIndex] = arrayCopy[randomIndex];
			arrayCopy[randomIndex] = temporaryValue;
		}

		return { array, arrayCopy };
	},
};

export default shuffle;
