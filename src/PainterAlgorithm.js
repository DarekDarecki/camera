export default class PainterAlgorithm {
	static compare(a, b) {
		if (a.maxZ() < b.minZ()) {
			return 1
		}

		if (a.distanceToObserver() > b.distanceToObserver()) {
			return -1
		}

		if (a.distanceToObserver() < b.distanceToObserver()) {
			return 1
		} else {
			return 0
		}
	}
}
