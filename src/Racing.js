import Car from './Car.js';
import Validation from './Validation.js';
import Screen from './Screen.js';

const MSG_GAME_START =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const MSG_TRY_TIME = '시도할 횟수는 몇 회인가요?\n';
const ERROR_MSG_INPUT = '[ERROR] 자동차 이름이 잘못된 형식입니다.';

class Racing {
  constructor() {
    this.players = [];
  }

  addPlayer(carName) {
    const car = new Car(carName);
    this.players.push(car);
  }

  async registration() {
    const screen = new Screen();
    const participants = await screen.getUserInput(MSG_GAME_START);
    const validation = new Validation();
    if (!validation.isProperInput(participants)) {
      throw new Error(ERROR_MSG_INPUT);
    }
    participants.split(',').forEach((carName) => {
      this.addPlayer(carName);
    });
  }
  race() {}
  calculateWinner() {}
}
export default Racing;