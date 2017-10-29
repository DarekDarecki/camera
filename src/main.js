require('./styles/main.scss')

import Scene from './Scene'
import Polyhedron from './Polyhedron'

window.onload = function () {
	let cube = new Polyhedron(5, -5, 50, 25, 25);

	var scene = new Scene('scene', cube)

	scene.render()
}
