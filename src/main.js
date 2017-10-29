require('./styles/main.scss')

import Scene from './Scene'
import Rotation from './Rotation'
import Translation from './Translation'
import Cuboid from './Cuboid'

let VPD = 300

window.onload = function () {
	const cube = new Cuboid(25, -5, 50, 25, 25)

	const scene = new Scene('scene', cube, VPD)

	scene.render()

	document.addEventListener('keydown', event => {
		const keyName = event.key

		switch (keyName) {

		case 'k':
			new Rotation(scene.getVectors(), -1).rotate('OX')
			break
		case 'i':
			new Rotation(scene.getVectors(), 1).rotate('OX')
			break
		case 'j':
			new Rotation(scene.getVectors(), 1).rotate('OY')
			break
		case 'l':
			new Rotation(scene.getVectors(), -1).rotate('OY')
			break
		case 'o':
			new Rotation(scene.getVectors(), 1).rotate('OZ')
			break
		case 'u':
			new Rotation(scene.getVectors(), -1).rotate('OZ')
			break

		case 'a':
			new Translation(scene.getVectors(), 1).translateX()
			break
		case 'd':
			new Translation(scene.getVectors(), -1).translateX()
			break
		case 'q':
			new Translation(scene.getVectors(), -1).translateY()
			break
		case 'e':
			new Translation(scene.getVectors(), 1).translateY()
			break
		case 'w':
			new Translation(scene.getVectors(), -1).translateZ()
			break
		case 's':
			new Translation(scene.getVectors(), 1).translateZ()
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
