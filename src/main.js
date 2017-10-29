require('./styles/main.scss')

import { Scene } from './Scene'
// import { SceneObjects } from './SceneObjects'
import Vertex2D from './Vertex2D'
import Vertex3D from './Vertex3D'
import Cube from './Cube'

window.onload = function() {
	var cubeCenter = new Vertex3D(-100, 11*200/10, 100)
	var cube = new Cube(cubeCenter, 300)
	var objects = [cube]

	var scene = new Scene('scene', objects)
	scene.render()
}
