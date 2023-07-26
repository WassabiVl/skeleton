<template>
  <ElementLayout>
    <template #element>
      <div class="outerbox">
        <q-card class="q-pa-md row head">
          <p>Erfassung der radiochemischen Reinheit (RR)</p>
          <div id="tlc">
            (gemäß manueller Berechnung oder TLC-Scanner- Berechnung)
          </div>
        </q-card>
        <q-card class="q-pa-md row formular">
          <q-card-section class="col">

            <div class="container" >

              <div id="inputboxCustomQC">
                <label for="pharmakon"> Ergebnis: RR =&nbsp;&nbsp;</label>
                <input
                  id="CustomQC"
                  :class="classes.input"
                  v-model="model"
                  type="number"
                  step="1"
                />&nbsp;%
              </div>
            </div>

          </q-card-section>
        </q-card>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </ElementLayout>
</template>

<script>

import VueformElement from '@vueform/vueform/element';
import { ref } from 'vue';

export default VueformElement({
  name: 'CustomQualityElement'
}, {
  setup (props, { element }) {
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
      defaultClasses
    };
  }
});
</script>

<style lang="scss">
@import '../../styles/globalFormulas.scss';
</style>
