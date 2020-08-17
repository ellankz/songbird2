import { birdsData } from './data';

class BirdService {
	public getBirdsByLevel(level: number) {
		return birdsData[level];
	}

	public getBird(level: number, index: number) {
		return birdsData[level][index];
	}
}

export default BirdService;
