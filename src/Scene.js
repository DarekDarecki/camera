import Point2D from './Point2D'
import Vector from './Vector'
import { CONSTS } from './consts'

export default class Scene {
	constructor(canvasId, objects, vpd) {
		this.canvas = document.getElementById(canvasId)
		this.ctx = this.canvas.getContext('2d')
		this.vpd = vpd
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight

		this.vectors = []
		this.polygons = []
		this.setPolygons([objects])
		this.setVectors()
	}

	setPolygons(objects) {
		this.polygons = objects.reduce((faces, object) => {
			return faces.concat(object.faces)
		}, [])
	}

	setVectors() {
		this.vectors = this.polygons.reduce((vectors, polygon) => {
			return vectors.concat(polygon.getVectors())
		}, [])
	}

	getVectors() {
		return this.vectors
	}

	makeProjection() {
		const vectors2D = []

		this.vectors.forEach((vector) => {
			vectors2D.push(new Vector(this.point3DTo2D(vector.a), this.point3DTo2D(vector.b)))
		})

		return vectors2D
	}

	point3DTo2D(point) {
		const x = point.x * this.vpd / point.z
		const y = point.y * this.vpd / point.z

		return new Point2D(x, y)
	}

	zoomIn() {
		this.vpd = this.vpd + CONSTS.steps.zoom
	}

	zoomOut() {
		this.vpd = CONSTS.steps.zoom
	}

	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

		this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)'
		this.ctx.fillStyle = 'rgba(0, 150, 255, 0.3)'

		const vectors = this.makeProjection()

		vectors.forEach((vector) => {
			this.ctx.beginPath()
			this.ctx.moveTo(this.canvas.width / 2 + vector.a.x, this.canvas.height / 2 - vector.a.y)
			this.ctx.lineTo(this.canvas.width / 2 + vector.b.x, this.canvas.height / 2 - vector.b.y)
			this.ctx.closePath()
			this.ctx.stroke()
			this.ctx.fill()
		})
	}
}
