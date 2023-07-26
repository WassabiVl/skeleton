<template>

  <ElementLayout>
    <template #element>
      <div class="timerbox">
      <div>
      <input
        v-model="model"
        :class="classes.input"
        type="number"
      />
      <base-timer :time-limit="Number(timeAmount)" :timer-start="checkboxModel"/>
      </div>
      <div class="timerbutton">
        <q-btn @click="submitToBackEnd" :label="t('staff.kit.starttimer')" v-if="checkboxModel === false" id="timerlabel"/>
        <p v-else> {{ t('staff.kit.timerStarted') }} </p>
      </div>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]>
      <slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot>
    </template>
  </ElementLayout>

</template>

<script>
import { ref, onMounted } from 'vue';
import VueformElement from '@vueform/vueform/element';

import { useI18n } from 'vue-i18n';

export default VueformElement({
  name: 'TimerElement'
}, {
  setup (props, context) {
    const { t } = useI18n();
    const timeAmount = ref(context.element.value);
    const checkboxModel = ref(false);
    const disabled = ref(props.disabled);

    const defaultClasses = ref({
      container: '', // added automatically to the element's outermost DOM in ElementLayout
      input: 'form-text-input-hidden',
      input_danger: 'has-errors',
      $input: (classes, { isDanger }) => ([
        classes.input,
        isDanger ? classes.input_danger : null
      ])
    });
    onMounted(() => {
      if (context.element.el$.value.default !== context.element.el$.value.value) {
        checkboxModel.value = true;
        disabled.value = true;
      }
    });
    const submitToBackEnd = function () {
      checkboxModel.value = true;
      disabled.value = true;
      // this can be used to store the different timers
      // console.table(context.element.el$.value);
      // console.table(context.element.el$.value.name);
    };

    return {
      t,
      defaultClasses,
      timeAmount,
      checkboxModel,
      submitToBackEnd,
      disabled
    };
  }
});
</script>

<style lang="scss">
@import '../../styles/staff/TimerElement';
</style>
