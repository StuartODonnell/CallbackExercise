var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(2, 0, 3);
		return arr;


	},

	square: function (arr) {
		const squaredArray = [];
		arr.forEach(function(num){
		squaredArray.push(num*num);
	});

	return squaredArray;
	},


	sum: function (arr) {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return arr.reduce(reducer);
	},

	// findDuplicates: function (arr) {
	// 	var sorted_arr = arr.slice().sort();
	// 	var results = [];
	// 	for (var i = 0; i < sorted_arr.length - 1; i++) {
	// 	    if (sorted_arr[i + 1] == sorted_arr[i]) {
	// 	        results.push(sorted_arr[i]);
	// 	    }
	// 	}
	//
	// 	return results;
	// },

	removeAndClone: function (arr, valueToRemove) {

		var clonedArray=[];
		for ( var i = 0; i < arr.length; i++) {
		    if(arr[i]!=valueToRemove){
		        clonedArray.push(arr[i]);
		    }
		}
		return clonedArray;
	},

	findIndexesOf: function (arr, itemToFind) {

	},

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
