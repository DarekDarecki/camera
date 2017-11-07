import Point3D from './Point3D'

export default class Polygon {
	constructor(vectors, color) {
		this.vectors = vectors
		this.color = color
		this.setPoints()
	}

	getVectors() {
		return this.vectors
	}

	setPoints() {
		this.points = this.vectors.map(vector => vector.a)
	}

	distanceToObserver() {
		let average = new Point3D(
			this.sumCoordinates('x') / this.points.length,
			this.sumCoordinates('y') / this.points.length,
			this.sumCoordinates('z') / this.points.length
		)

		return Math.sqrt(
			Math.pow(average.x, 2) + Math.pow(average.y, 2) + Math.pow(average.z, 2)
		)
	}

	sumCoordinates(coordinate) {
		return this.points.reduce((sum, point) => {
			return sum += point[coordinate]
		}, 0)
	}

	maxZ() {
		return Math.max(...this.points.map(point => point.z))
	}

	minZ() {
		return Math.min(...this.points.map(point => point.z))
	}
}
