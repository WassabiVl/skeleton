<template>
  <ElementLayout>
    <template #element>
      <input
        v-model="model"
        :class="classes.input"
        type="number"
      />
      <base-timer :time-limit="Number(timeAmount)" :timer-start="checkboxModel"/>

      <label class="container">
        {{t('staff.kit.starttimer')}}
        <input
          v-model="checkboxModel"
          type="checkbox"
          id="timerlabel"
          :disabled="disabled"
        />
        <span class="checkmark"></span>
      </label>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]>
      <slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot>
    </template>
  </ElementLayout>
</template>

<script>
import { ref } from 'vue';
import VueformElement from '@vueform/vueform/element';
import { useI18n } from 'vue-i18n';

export default VueformElement({
  name: 'MiniTimerElement'
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

    return {
      t,
      defaultClasses,
      timeAmount,
      checkboxModel,
      disabled
    };
  }
});
</script>
