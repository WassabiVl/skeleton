<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { fasKitMedical } from '@quasar/extras/fontawesome-v6';

const VueFormTest = defineAsyncComponent(() => import('./VueFomTest.vue'));
const tab = ref('Material');
</script>

<template>
  <q-tabs
    v-model="tab"
    active-color="primary"
    align="justify"
    class="text-grey"
    indicator-color="primary"
    narrow-indicator
  >
    <q-tab id="tabMaterial" label="Material" exact :icon="fasKitMedical" name="Material" replace />

  </q-tabs>
  <q-separator/>
  <!--    tabs-->
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="Material" id="materialPanel">
      <vue-form-test />
    </q-tab-panel>

  </q-tab-panels>
</template>

<style lang="scss">
@import '../styles/staff/kitProdinitialData.scss';
@import '../styles/staff/kitProduction.scss';
</style>
