import Point3D from './Point3D'
import Polygon from './Polygon'
import Vector from './Vector'

export default class Cuboid {
	constructor({ x, y, z, width, height, color }) {
		this.x = x
		this.y = y
		this.z = z
		this.width = width
		this.height = height
		this.faces = []
		this.color = color

		this.createFaces()
	}

	createFaces() {
		this.createFrontFace()
		this.createBackFace()
		this.createBottomFace()
		this.createTopFace()
		this.createLeftFace()
		this.createRightFace()
	}

	createFrontFace() {
		const vectors = []

		vectors.push(
			new Vector(
				new Point3D(this.x, this.y, this.z),
				new Point3D(this.x + this.width, this.y, this.z)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y, this.z),
				new Point3D(this.x + this.width, this.y + this.height, this.z)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y + this.height, this.z),
				new Point3D(this.x, this.y + this.height, this.z)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x, this.y + this.height, this.z),
				new Point3D(this.x, this.y, this.z)
			)
		)

		this.faces.push(new Polygon(vectors, this.color))
	}

	createBackFace() {
		const vectors = []

		vectors.push(
			new Vector(
				new Point3D(this.x, this.y, this.z + this.height),
				new Point3D(this.x + this.width, this.y, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y, this.z + this.height),
				new Point3D(this.x + this.width, this.y + this.height, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y + this.height, this.z + this.height),
				new Point3D(this.x, this.y + this.height, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x, this.y + this.height, this.z + this.height),
				new Point3D(this.x, this.y, this.z + this.height)
			)
		)

		this.faces.push(new Polygon(vectors, this.color))
	}

	createBottomFace() {
		const vectors = []

		vectors.push(
			new Vector(
				new Point3D(this.x, this.y, this.z),
				new Point3D(this.x, this.y, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x, this.y, this.z + this.height),
				new Point3D(this.x + this.width, this.y, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y, this.z + this.height),
				new Point3D(this.x + this.width, this.y, this.z)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y, this.z),
				new Point3D(this.x, this.y, this.z)
			)
		)

		this.faces.push(new Polygon(vectors, this.color))
	}

	createTopFace() {
		const vectors = []

		vectors.push(
			new Vector(
				new Point3D(this.x, this.y + this.height, this.z),
				new Point3D(this.x, this.y + this.height, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x, this.y + this.height, this.z + this.height),
				new Point3D(this.x + this.width, this.y + this.height, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y + this.height, this.z + this.height),
				new Point3D(this.x + this.width, this.y + this.height, this.z)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y + this.height, this.z),
				new Point3D(this.x, this.y + this.height, this.z)
			)
		)

		this.faces.push(new Polygon(vectors, this.color))
	}

	createLeftFace() {
		const vectors = []

		vectors.push(
			new Vector(
				new Point3D(this.x, this.y, this.z),
				new Point3D(this.x, this.y, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x, this.y, this.z + this.height),
				new Point3D(this.x, this.y + this.height, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x, this.y + this.height, this.z + this.height),
				new Point3D(this.x, this.y + this.height, this.z)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x, this.y + this.height, this.z),
				new Point3D(this.x, this.y, this.z)
			)
		)

		this.faces.push(new Polygon(vectors, this.color))
	}

	createRightFace() {
		const vectors = []

		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y, this.z),
				new Point3D(this.x + this.width, this.y, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y, this.z + this.height),
				new Point3D(this.x + this.width, this.y + this.height, this.z + this.height)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y + this.height, this.z + this.height),
				new Point3D(this.x + this.width, this.y + this.height, this.z)
			)
		)
		vectors.push(
			new Vector(
				new Point3D(this.x + this.width, this.y + this.height, this.z),
				new Point3D(this.x + this.width, this.y, this.z)
			)
		)

		this.faces.push(new Polygon(vectors, this.color))
	}
}
