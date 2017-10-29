require('./styles/main.scss')

import Scene from './Scene'
import Rotation from './Rotation'
import Translation from './Translation'
import Cuboid from './Cuboid'
import { CONSTS } from './consts'

window.onload = function () {
	const cube = new Cuboid(25, -5, 50, 25, 25)

	const scene = new Scene('scene', [cube], CONSTS.vpd)

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
