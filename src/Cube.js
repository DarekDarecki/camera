import Vertex3D from './Vertex3D'

export default class Cube {
	constructor(center, size) {
		this.d = size / 2

		this.vertices = [
			new Vertex3D(center.x - this.d, center.y - this.d, center.z + this.d),
			new Vertex3D(center.x - this.d, center.y - this.d, center.z - this.d),
			new Vertex3D(center.x + this.d, center.y - this.d, center.z - this.d),
			new Vertex3D(center.x + this.d, center.y - this.d, center.z + this.d),
			new Vertex3D(center.x + this.d, center.y + this.d, center.z + this.d),
			new Vertex3D(center.x + this.d, center.y + this.d, center.z - this.d),
			new Vertex3D(center.x - this.d, center.y + this.d, center.z - this.d),
			new Vertex3D(center.x - this.d, center.y + this.d, center.z + this.d)
		]

		// Generate the faces
		this.faces = [
			[this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
			[this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
			[this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
			[this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
			[this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
			[this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]
		]
	}
}
