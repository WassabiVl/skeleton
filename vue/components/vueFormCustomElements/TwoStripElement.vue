<template>
   <ElementLayout>
        <template #element>
          <div class="outerbox">
            <q-card class="q-pa-md row head">
               <p>Berechnung der radiochemischen Reinheit (RR)</p>
            </q-card>
              <q-card class="q-pa-md row formular">
              <q-card-section class="col">

          <!--      part A calcualtions calc-->
                <div class="container">
                  <h5>Eingabe der Messwerte:</h5>
                  <p><strong><u>Verunreinigung 1</u></strong></p>
                      <div id="inputbox">
                        <div id="label">
                          <label for="obenOne1">Aktivität Verunreinigung 1:&nbsp;&nbsp;</label>
                        </div>
                        <div>
                            <input
                              v-model="obenOne"
                              type="Number"
                              step="1"
                              id="obenOne1"
                              v-on:change="calculatePercentage"
                            />
                            <label for="obenOne1">&nbsp;&nbsp;MBq</label>
                        </div>
                      </div>

                      <div id="inputbox">
                        <div id="label">
                          <label for="untenOne1">Aktivität gebundenes Radiopharmakon:&nbsp;&nbsp;</label>
                        </div>
                            <div>
                                 <input
                                 v-model="untenOne"
                                 type="Number"
                                 step="1"
                                 id="untenOne1"
                                 v-on:change="calculatePercentage"
                                />
                                 <label for="untenOne1">&nbsp;&nbsp;MBq</label>
                            </div>
                      </div>

                </div>
                <!--
                <div class="container">
                  <b>1. Berechnung:</b><br>
                  ({{obenOne}}&nbsp;MBq / ({{obenOne}}&nbsp;MBq + {{untenOne}}&nbsp;MBq) ) x 100
                </div>-->
                <div class="container">
                  <label><b>Ergebnis:</b> Anteil von Verunreinigung 1 = <b>{{calcA}}</b></label>
                </div>

              </q-card-section>
            </q-card>
            <q-card class="q-pa-md row formular">
              <q-card-section class="col">

                <!--      part B calcualtions calc-->
                <div class="container">

                  <p><strong><u>Verunreinigung 2</u></strong></p>
                  <div id="inputbox">
                    <div id="label">
                     <label for="untenTwo">Aktivität Verunreinigung 2:&nbsp;&nbsp;</label>
                    </div>
                        <div>
                          <input
                            v-model="untenTwo"
                            type="Number"
                            step="1"
                            id="untenTwo1"
                            v-on:change="calculatePercentage"
                          />
                          <label for="untenTwo">&nbsp;&nbsp;MBq</label>
                        </div>
                      </div>
                      <div id="inputbox">
                        <div id="label">
                         <label for="obenTwo1">Aktivität gebundenes Radiopharmakon:&nbsp;&nbsp;</label>
                        </div>
                         <div>
                          <input
                            v-model="obenTwo"
                            type="Number"
                            step="1"
                            id="obenTwo1"
                            v-on:change="calculatePercentage"
                          />
                          <label for="obenTwo1">&nbsp;&nbsp;MBq</label>
                         </div>
                      </div>
                </div>
                <!--
                <div class="container"> <b>2. Berechnung:</b><br>
                  ({{untenTwo}}&nbsp;MBq / ({{untenTwo}}&nbsp;MBq + {{obenTwo}}&nbsp;MBq) ) x 100
                </div>-->
                <div class="container">
                  <label><b>Ergebnis:</b> Anteil von Verunreinigung 2 = <b>{{calcB}}</b></label>
                </div>
              </q-card-section>
            </q-card>
            <q-card class="q-pa-md row formular">
              <q-card-section class="col">
                <hr>
                <br>
                <div class="container" id="result"><h5>Ergebnis: RR&nbsp;=&nbsp;<span id="TwoStripElement" :class="classes.input">{{calculations}}</span></h5>
                </div>
                <div class="container" id="resultbox">
                  <p>Die Berechnung erfolgt nach der Formel:
                  RR = 100% - Anteil Verunreinigung 1 [%] - Anteil Verunreinigung 2 [%]
                  <!--100% - {{calcA}}% - {{calcB}}%-->
                  </p>
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
import { ref } from 'vue';
import VueformElement from '@vueform/vueform/element';
import { useI18n } from 'vue-i18n';

export default VueformElement({
  name: 'TwoStripElement'
}, {
  setup (props, { element }) {
    const { n } = useI18n();
    const obenOne = ref();
    const untenOne = ref();
    const untenTwo = ref();
    const obenTwo = ref();
    const calcA = ref(0);
    const calcB = ref(0);
    element.model.value = 0;
    const calculations = ref(0);

    const calculatePercentage = function () {
      // part a calculations
      const calc = parseFloat(obenOne.value) / (parseFloat(obenOne.value) + parseFloat(untenOne.value));
      calcA.value = isNaN(calc) ? 'Unvollständige Eingabe' : n(calc * 100, 'decimal') + '%';

      // part b calculations
      const calc2 = parseFloat(untenTwo.value) / (parseFloat(untenTwo.value) + parseFloat(obenTwo.value));
      calcB.value = isNaN(calc2) ? 'Unvollständige Eingabe' : n(calc2 * 100, 'decimal') + '%';

      // part C calculations
      const calc3 = (1 - calc - calc2) * 100;
      element.model.value = calc3;
      calculations.value = isNaN(calc3) ? 'Unvollständige Eingabe' : n(calc3, 'decimal') + '%';
    };

    return {
      n,
      calcA,
      calcB,
      untenTwo,
      obenTwo,
      obenOne,
      untenOne,
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
