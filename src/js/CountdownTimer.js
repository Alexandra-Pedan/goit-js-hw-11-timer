import { getTimeComponents} from "./time-components.js";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      $days: document.querySelector(`${selector} [data-value="days"]`),
      $hours: document.querySelector(`${selector} [data-value="hours"]`),
      $mins: document.querySelector(`${selector} [data-value="mins"]`),
      $secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.renderTime(getTimeComponents(deltaTime));
    }, 1000);
  }

  renderTime({ days, hours, mins, secs }) {
    this.refs.$days.innerHTML = days;
    this.refs.$hours.innerHTML = hours;
    this.refs.$mins.innerHTML = mins;
    this.refs.$secs.innerHTML = secs;
  }
}

export { CountdownTimer };

