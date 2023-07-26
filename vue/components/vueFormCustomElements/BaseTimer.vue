<template>
  <div class="box">
    <div class="base-timer">
      <svg
        class="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle
            class="base-timer__path-elapsed"
            cx="50"
            cy="50"
            r="45"
          />
          <path
            :stroke-dasharray="circleDasharray"
            class="base-timer__path-remaining"
            :class="remainingPathColor"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
          />
        </g>
      </svg>
      <span class="base-timer__label">{{ formattedTimeLeft }}</span>
      <br>
      <span class="base-timer__minutes">{{ t('staff.minutes') }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 60;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: 'green'
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD
  }
};
const props = defineProps({
  timerStart: Boolean,
  timeLimit: Number
});
const { t } = useI18n();
const timePassed = ref(0);
const timerInterval = ref(null);
const timeLeft = computed(() => {
  return Math.trunc(props.timeLimit - timePassed.value);
});
const timeFraction = computed(() => {
  const rawTimeFraction = timeLeft.value / props.timeLimit;
  return rawTimeFraction - (1 / props.timeLimit) * (1 - rawTimeFraction);
});
const circleDasharray = computed(() => {
  return `${(timeFraction.value * FULL_DASH_ARRAY).toFixed(0)} 283`;
});
const formattedTimeLeft = computed(() => {
  let minutes = Math.floor(timeLeft.value / 60);
  let seconds = timeLeft.value % 60;

  if (seconds < 10) {
    if (seconds < 0) {
      seconds = 0;
    }
    seconds = `0${seconds}`;
  }
  if (minutes < 0) {
    minutes = 0;
  }

  return `${minutes}:${seconds}`;
});
const remainingPathColor = computed(() => {
  const { alert, warning, info } = COLOR_CODES;

  if (timeLeft.value <= alert.threshold) {
    return info.color;
  } if (timeLeft.value <= warning.threshold) {
    return warning.color;
  }
  return alert.color;
});

// stops the interval when the timer reaches zero
const onTimesUp = function () {
  clearInterval(timerInterval.value);
};
onUnmounted(() => {
  clearInterval(timerInterval.value);
});
// function to start the timer, working from 1 second interval
const startTimer = function () {
  timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
};

if (props.timerStart === true) {
  startTimer();
}
watch(timeLeft, newValue => {
  if (newValue <= 0 && timerInterval.value !== null) {
    onTimesUp();
  }
});
watch(() => props.timerStart, (newValue) => {
  if (newValue === true && timeLeft.value > 0) {
    startTimer();
  }
});
</script>

<style scoped lang="scss">

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  width: 170px;
  height: 170px;
}

.base-timer {
  position: relative;
  width: 9.5rem;
  height: 9.5rem;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 0.35rem;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 0.35rem;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 10.5rem;
    height: 10.5rem;
    top: -.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
  }

  &__minutes {
    position: absolute;
    width: 10.5rem;
    height: 10.5rem;
    top: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

}
</style>
