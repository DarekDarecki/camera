import Point2D from './Point2D'
import Vector from './Vector'
import Polygon from './Polygon'
import { CONSTS } from './consts'
import PainterAlgorithm from './PainterAlgorithm'

export default class Scene {
	constructor(canvasId, objects, vpd) {
		this.canvas = document.getElementById(canvasId)
		this.ctx = this.canvas.getContext('2d')
		this.vpd = vpd
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight

		this.vectors = []
		this.polygons = []
		this.objects = []

		this.lookForPolygonsInScene(objects)
		this.setVectors()
	}

	lookForPolygonsInScene(objects) {
		this.polygons = objects.filter((object, index) => {
			if (object.constructor.name === 'Polygon') {
				objects.splice(index, 1)
				return object
			}
		})
		this.setPolygons(objects)
	}

	setPolygons(objects) {
		const polygons = objects.reduce((faces, object) => [...faces, ...object.faces], [])
		this.polygons = [...this.polygons, ...polygons]
	}

	setVectors() {
		this.vectors = this.polygons.reduce((vectors, polygon) => [...vectors, ...polygon.getVectors()], [])
	}

	getVectors() {
		return this.vectors
	}

	makeProjection() {
		let polygons = []

		this.polygons.forEach((polygon) => {
			let vectors2D = []

			polygon.vectors.forEach((v3d) => {
				vectors2D.push(new Vector(this.point3DTo2D(v3d.a), this.point3DTo2D(v3d.b)))
			})

			polygons.push(new Polygon(vectors2D, polygon.color))
		})

		return polygons
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
		this.vpd = this.vpd - CONSTS.steps.zoom
	}

	runPainterAlgorithm() {
		this.polygons.sort(PainterAlgorithm.compare)
	}

	render() {
		this.runPainterAlgorithm()
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

		this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)'

		const polygons = this.makeProjection()

		polygons.forEach((polygon) => {
			let [first, ...tail] = polygon.points
			if (!first) return

			this.ctx.fillStyle = polygon.color
			this.ctx.beginPath()

			this.ctx.moveTo(this.canvas.width / 2 + first.x, this.canvas.height / 2 - first.y)
			tail.forEach((tail) => {
				this.ctx.lineTo(this.canvas.width / 2 + tail.x, this.canvas.height / 2 - tail.y)
			})

			this.ctx.closePath()
			this.ctx.fill()
		})
	}
}
