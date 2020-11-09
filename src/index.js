import './styles.css';
import { CountdownTimer } from "./js/CountdownTimer";

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});

timer.start();
