export default class Point3D {
	constructor(x, y, z) {
		this.x = parseFloat(x)
		this.y = parseFloat(y)
		this.z = parseFloat(z)
		this.n = 1.0
	}

	toMatrix() {
		return [this.x, this.y, this.z, this.n]
	}

	getValuesFromMatrix(matrix) {
		this.x = matrix[0]
		this.y = matrix[1]
		this.z = matrix[2]
		this.n = matrix[3]
	}
}
