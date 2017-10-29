import Point3D from './Point3D'

export default class Polygon {
	constructor(vectors) {
		this.vectors = vectors
		this.setVertices()
	}

	getVectors() {
		return this.vectors
	}

	setVertices() {
		this.vertices = this.vectors.reduce((points, vector) => {
			points.push(vector.a)
			return points
		}, [])
	}
}
