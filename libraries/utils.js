// utils library

console.log("utils.js loaded")

var utils = {}

Array.prototype.choose = function () {
	return this[Math.floor(Math.random() * this.length)]
}

utils.Vec2 = function Vec2(x, y) {
	this.x = x, this.y = y
}

utils.Vec3 = function Vec3(x, y, z) {
	this.x = x, this.y = y, this.z = z
}

utils.wrapArray = function wrapArray(arr, cols) {
	const newArr = []
	// newArr[0] = []
	let col = 0
	let row = 0
	// console.log
	newArr[0] = []
	for (let i = 0; i < arr.length; i++) {
		console.log(`${i}`)

		if (col > cols-1) {
			console.log("end of row")
			row++
			newArr[row] = []
			// newArr.push([])
			col = 0
			newArr[row][col] = arr[i]
			col++
		} else {
			newArr[row][col] = arr[i]
			col++
		}
	}
	return newArr
}

utils.unwrapArray = function unwrapArray(arr) {
	const newArr = []
	for (let i = 0; i++; i < arr.length) {
		// arr[i]
		for (let j = 0; j++; j < arr[i].length) {
			newArr.push(arr[i][j])
		}
	}
	return newArr
}

utils.randomInt = function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

utils.randomColor = function randomColor() {
	var string = `rgb(${utils.randomInt(0,255)}, ${utils.randomInt(0,255)}, ${utils.randomInt(0,255)})`
	// console.log(string)
	return new THREE.Color(string)
}

utils.chooseColor = function chooseColor() {
	var colors = [
		new THREE.Color("rgb(100, 100, 100)"),
		new THREE.Color("rgb(150, 0, 0)"),
		new THREE.Color("rgb(0, 150, 0)"),
		new THREE.Color("rgb(0, 0, 150)"),
	]
	return colors.choose()
}

window.utils = utils
