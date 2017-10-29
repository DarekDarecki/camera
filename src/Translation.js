import math from 'mathjs'
import { CONSTS } from './consts'

export default class Translation {
	constructor(vectors, direction) {
		this.direction = direction
		this.vectors = vectors
	}

	translateY() {
		this.vectors.forEach(vector => {
			vector.a.y = vector.a.y + CONSTS.steps.translation * this.direction
			vector.b.y = vector.b.y + CONSTS.steps.translation * this.direction
		})
	}

	translateX() {
		this.vectors.forEach(vector => {
			vector.a.x = vector.a.x + CONSTS.steps.translation * this.direction
			vector.b.x = vector.b.x + CONSTS.steps.translation * this.direction
		})
	}

	translateZ() {
		this.vectors.forEach(vector => {
			vector.a.z = vector.a.z + CONSTS.steps.translation * this.direction
			vector.b.z = vector.b.z + CONSTS.steps.translation * this.direction
		})
	}
}
