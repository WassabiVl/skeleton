<template>
  <span class="base-timer__label">{{ formattedTimeLeft }}</span>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'MiniBaseTimer',
  props: {
    timerStart: Boolean,
    timeLimit: Number
  },
  setup (props) {
    const timePassed = ref(0);
    const timeLeft = computed(() => {
      return props.timeLimit - timePassed.value;
    });
    const formattedTimeLeft = computed(() => {
      const timeLeft1 = timeLeft.value;
      const minutes = Math.floor(timeLeft1 / 60);
      let seconds = timeLeft1 % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    });
    const timerInterval = ref(null);
    // stops the interval when the timer reaches zero
    const onTimesUp = function () {
      clearInterval(timerInterval.value);
    };
    // function to start the timer, working from 1 second interval
    const startTimer = function () {
      timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
    };

    if (props.timerStart === true) {
      startTimer();
    }
    watch(timeLeft, newValue => {
      if (newValue === 0 || newValue < 0) {
        onTimesUp();
      }
    });
    watch(() => props.timerStart, (newValue, oldValue) => {
      if (newValue === true) {
        startTimer();
      }
    });
    return {
      timePassed,
      timeLeft,
      formattedTimeLeft,
      onTimesUp,
      startTimer
    };
  }
});
</script>
