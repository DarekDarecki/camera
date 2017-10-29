import math from 'mathjs'
import { CONSTS } from './consts'

export default class Translation {
	constructor(vectors, direction) {
		this.direction = direction
		this.vectors = vectors
	}

	translate(axis) {
		this.vectors.forEach(vector => {
			vector.a[axis.toLowerCase()] = vector.a[axis.toLowerCase()] + CONSTS.steps.translation * this.direction
			vector.b[axis.toLowerCase()] = vector.b[axis.toLowerCase()] + CONSTS.steps.translation * this.direction
		})
	}
}
