import math from 'mathjs'
import { CONSTS } from './consts'

export default class Rotation {
	constructor(vectors, direction) {
		this.vectors = vectors
		this.angle = CONSTS.steps.rotation * direction / 90

		this.rotationMatrices = {
			Y: [
				[Math.cos(this.angle), 0, Math.sin(this.angle), 0],
				[0, 1, 0, 0],
				[-1 * Math.sin(this.angle), 0, Math.cos(this.angle), 0],
				[0, 0, 0, 1]
			],
			X: [
				[1, 0, 0, 0],
				[0, Math.cos(this.angle), -1 * Math.sin(this.angle), 0],
				[0, Math.sin(this.angle), Math.cos(this.angle), 0],
				[0, 0, 0, 1]
			],
			Z: [
				[Math.cos(this.angle), -1 * Math.sin(this.angle), 0, 0],
				[Math.sin(this.angle), Math.cos(this.angle), 0, 0],
				[0, 0, 1, 0],
				[0, 0, 0, 1]
			]
		}
	}

	rotate(axis) {
		this.vectors.forEach((vector) => {
			const rotatedMatrixA = math.multiply(this.rotationMatrices[axis], vector.a.toMatrix())
			const rotatedMatrixB = math.multiply(this.rotationMatrices[axis], vector.b.toMatrix())

			vector.a.getValuesFromMatrix(rotatedMatrixA)
			vector.b.getValuesFromMatrix(rotatedMatrixB)
		})
	}
}
