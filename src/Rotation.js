import math from 'mathjs'
import { CONSTS } from './consts'

export default class Rotation {
	constructor(vectors, direction) {
		this.vectors = vectors
		this.angle = CONSTS.steps.rotation * direction / 90

		this.rotationMatrices = {
			OY: [
				[Math.cos(this.angle), 0, Math.sin(this.angle), 0],
				[0, 1, 0, 0],
				[-1 * Math.sin(this.angle), 0, Math.cos(this.angle), 0],
				[0, 0, 0, 1]
			],
			OX: [
				[1, 0, 0, 0],
				[0, Math.cos(this.angle), -1 * Math.sin(this.angle), 0],
				[0, Math.sin(this.angle), Math.cos(this.angle), 0],
				[0, 0, 0, 1]
			],
			OZ: [
				[Math.cos(this.angle), -1 * Math.sin(this.angle), 0, 0],
				[Math.sin(this.angle), Math.cos(this.angle), 0, 0],
				[0, 0, 1, 0],
				[0, 0, 0, 1]
			]
		}
	}

	rotate(coordinate) {
		this.vectors.forEach((vector) => {
			const rotatedMatrixA = math.multiply(this.rotationMatrices[coordinate], vector.a.toMatrix())
			const rotatedMatrixB = math.multiply(this.rotationMatrices[coordinate], vector.b.toMatrix())

			vector.a.getValuesFromMatrix(rotatedMatrixA)
			vector.b.getValuesFromMatrix(rotatedMatrixB)
		})
	}
}
