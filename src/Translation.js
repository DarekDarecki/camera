import math from 'mathjs'

export default class Translation {
	constructor(vectors, direction) {
		this.direction = direction
		this.vectors = vectors
		this.step = 2
	}

	translateY() {
		this.vectors.forEach(vector => {
			vector.a.y = vector.a.y + this.step * this.direction
			vector.b.y = vector.b.y + this.step * this.direction
		})
	}

	translateX() {
		this.vectors.forEach(vector => {
			vector.a.x = vector.a.x + this.step * this.direction
			vector.b.x = vector.b.x + this.step * this.direction
		})
	}

	translateZ() {
		this.vectors.forEach(vector => {
			vector.a.z = vector.a.z + this.step * this.direction
			vector.b.z = vector.b.z + this.step * this.direction
		})
	}
}
