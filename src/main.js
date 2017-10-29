require('./styles/main.scss')

import Scene from './Scene'
import Rotation from './Rotation'
import Translation from './Translation'
import Cuboid from './Cuboid'
import Polygon from './Polygon'
import Vector from './Vector'
import Point3D from './Point3D'

import { CONSTS } from './consts'

function createPolygon({ x, y, z, width, height }) {
	const vectors = []

	vectors.push(
		new Vector(
			new Point3D(x, y, z),
			new Point3D(x, y, z + height)
		)
	)
	vectors.push(
		new Vector(
			new Point3D(x, y, z + height),
			new Point3D(x + width, y, z + height)
		)
	)
	vectors.push(
		new Vector(
			new Point3D(x + width, y, z + height),
			new Point3D(x + width, y, z)
		)
	)
	vectors.push(
		new Vector(
			new Point3D(x + width, y, z),
			new Point3D(x, y, z)
		)
	)

	return new Polygon(vectors)
}

window.onload = function () {
	const cube = new Cuboid({
		x: 25,
		y: -5,
		z: 50,
		width: 25,
		height: 25
	 })
	const poly = createPolygon({
		x: 25,
		y: -5,
		z: 50,
		width: 25,
		height: 50
	 })

	const scene = new Scene('scene', [poly, cube], CONSTS.vpd)

	scene.render()

	document.addEventListener('keydown', event => {
		const keyName = event.key

		switch (keyName) {

		case 'k':
			new Rotation(scene.getVectors(), -1).rotate('X')
			break
		case 'i':
			new Rotation(scene.getVectors(), 1).rotate('X')
			break
		case 'j':
			new Rotation(scene.getVectors(), 1).rotate('Y')
			break
		case 'l':
			new Rotation(scene.getVectors(), -1).rotate('Y')
			break
		case 'o':
			new Rotation(scene.getVectors(), 1).rotate('Z')
			break
		case 'u':
			new Rotation(scene.getVectors(), -1).rotate('Z')
			break

		case 'a':
			new Translation(scene.getVectors(), 1).translate('X')
			break
		case 'd':
			new Translation(scene.getVectors(), -1).translate('X')
			break
		case 'q':
			new Translation(scene.getVectors(), -1).translate('Y')
			break
		case 'e':
			new Translation(scene.getVectors(), 1).translate('Y')
			break
		case 'w':
			new Translation(scene.getVectors(), -1).translate('Z')
			break
		case 's':
			new Translation(scene.getVectors(), 1).translate('Z')
			break

		case '-':
			scene.zoomOut()
			break
		case '=':
			scene.zoomIn()
			break
		}

		scene.render()
	})
}
