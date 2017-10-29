import Vertex2D from './Vertex2D'

export class Scene {
	constructor(canvasId, objects) {
		this.canvas = document.getElementById(canvasId)
		this.ctx = this.canvas.getContext('2d')
		this.sceneObjects = objects
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight
		this.canvasCenterX = this.canvas.width / 2
		this.canvasCenterY = this.canvas.height / 2
	}

	makeProjection(M) {
		var d = 200
		var r = d / M.y

		return new Vertex2D(r * M.x, r * M.z)
	}

	render() {
		this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)'
		this.ctx.fillStyle = 'rgba(0, 150, 255, 0.3)'

		this.sceneObjects.forEach(object => {
			object.faces.forEach(face => {

				var projectedVertex = this.makeProjection(face[0])
				this.ctx.beginPath()
				this.ctx.moveTo(projectedVertex.x + this.canvasCenterX, -projectedVertex.y + this.canvasCenterY)

				face.forEach(vertex => {
					projectedVertex = this.makeProjection(vertex)
					this.ctx.lineTo(projectedVertex.x + this.canvasCenterX, -projectedVertex.y + this.canvasCenterY)
				})

				this.ctx.closePath()
				this.ctx.stroke()
				this.ctx.fill()
			})
		})
	}
}
