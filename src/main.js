require('./styles/main.scss')

import Scene from './Scene'
import Rotation from './Rotation'
import Polyhedron from './Polyhedron'

const VPD = 200

window.onload = function () {
	const cube = new Polyhedron(25, -5, 50, 25, 25)

	const scene = new Scene('scene', cube, VPD)

	scene.render()

	document.addEventListener('keydown', event => {
		const keyName = event.key
		switch (keyName) {
			case 's':
				new Rotation(scene.getVectors(), -1).rotate('OX')
				break
			case 'w':
				new Rotation(scene.getVectors(), 1).rotate('OX')
				break
			case 'd':
				new Rotation(scene.getVectors(), 1).rotate('OY')
				break
			case 'a':
				new Rotation(scene.getVectors(), -1).rotate('OY')
				break
			case 'q':
				new Rotation(scene.getVectors(), 1).rotate('OZ')
				break
			case 'e':
				new Rotation(scene.getVectors(), -1).rotate('OZ')
				break
		}

		scene.render()
	})
}
