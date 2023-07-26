<template>
  <ElementLayout>
    <template #element>
      <input
        v-model="model"
        :class="classes.input"
        type="number"
      />
      <base-timer :time-limit="timeAmount" :timer-start="timerStart"> </base-timer>
      <input
        v-model="checkboxModel"
        type="checkbox"
        id="herett"
        class="form-text-input"
      />
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]>
      <slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/>
      </slot></template>
  </ElementLayout>
</template>

<script>
import { ref, watch } from 'vue';
import VueformElement from '@vueform/vueform/element';

export default VueformElement({
  name: 'SimpleElement'
}, {
  setup (props, context) {
    const timeAmount = ref(context.element.value);
    const checkboxModel = ref(false);
    const timerStart = ref(false);
    watch(checkboxModel, (newValue) => {
      timerStart.value = newValue;
    });
    const defaultClasses = ref({
      container: '', // added automatically to the element's outermost DOM in ElementLayout
      input: 'form-text-input',
      input_danger: 'has-errors',
      $input: (classes, { isDanger }) => ([
        classes.input,
        isDanger ? classes.input_danger : null
      ])
    });

    return {
      defaultClasses,
      timeAmount,
      checkboxModel,
      timerStart
    };
  }
});
</script>

<style lang="scss">
.form-text-input {
  border: 1px solid black;
  outline: none;
  width: 100%;

  &.has-errors {
    border: 1px solid red;
  }
}
</style>
