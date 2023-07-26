<template>
  <ElementLayout>
    <template #element>
      <div class="outerbox">
        <q-card class="q-pa-md row head">
          <p>Berechnung der radiochemischen Reinheit (RR)</p>
        </q-card>
        <q-card class="q-pa-md row formular">
              <q-card-section class="col">

                <div class="container">
                  <h5>Eingabe der Messwerte:</h5>
                    <div id="inputbox">
                      <div id="label">
                      <label for="pharmakon"> Aktivität des gebundenen Radiopharmakons:&nbsp;&nbsp;</label>
                     </div>
                      <div>
                        <input
                        v-model="pharmakon"
                        type="Number"
                        step="1"
                        id="pharmakon"
                        v-on:change="calculatePercentage"
                      />
                        <label for="pharmakon">&nbsp;&nbsp;MBq</label></div>
                    </div>
                  <div id="inputbox">
                    <div id="label">
                      <label for="pollution"> Aktivität der Verunreinigung: &nbsp;</label>
                    </div>
                   <div>
                     <input
                       v-model="pollution"
                       type="number"
                       step="1"
                       id="pollution"
                       v-on:change="calculatePercentage"
                     />
                     <label for="pollution">&nbsp;&nbsp;MBq</label>
                   </div>
                  </div>
                <hr>
                <div class="container" id="result"><h5>Ergebnis: RR = <span id="OneStripElement" :class="classes.input">{{calculations}}</span></h5>
                   </div>

                <div class="container" id="resultbox"><p>Die Berechnung erfolgt nach der Formel:
                  RR = (Aktivität Radiopharmakon / Gesamtaktivität) x 100</p>
                 <!-- <br>
                  ({{ pharmakon}}&nbsp;MBq / ({{ pharmakon }}&nbsp;MBq + {{pollution }}&nbsp;MBq)) x 100
                  -->
                </div>
                </div>
              </q-card-section>
            </q-card>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]>
      <slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot>
    </template>
  </ElementLayout>
</template>

<script>

import VueformElement from '@vueform/vueform/element';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default VueformElement({
  name: 'OneStripElement'
}, {
  setup (props, { element }) {
    const { n } = useI18n();
    const pharmakon = ref();
    const pollution = ref();
    element.model.value = 0;
    const calculations = ref(0);

    const calculatePercentage = function () {
      const calc = parseFloat(pharmakon.value) / (parseFloat(pharmakon.value) + parseFloat(pollution.value));
      element.model.value = calc * 100;
      calculations.value = isNaN(calc) ? 'Unvollständige Eingabe' : n(calc * 100, 'decimal') + '%';
    };

    return {
      n,
      pharmakon,
      pollution,
      calculatePercentage,
      calculations
    };
  },
  data () {
    return {
      defaultClasses: {
        container: '', // added automatically to the element's outermost DOM in ElementLayout
        input: 'form-text-input',
        input_danger: 'has-errors',
        $input: (classes, { isDanger }) => ([
          classes.input,
          isDanger ? classes.input_danger : null
        ])
      }
    };
  }
});
</script>

<style lang="scss">
@import '../../styles/globalFormulas.scss';
</style>

