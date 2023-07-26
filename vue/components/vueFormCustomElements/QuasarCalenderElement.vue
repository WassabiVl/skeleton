<template>
 <ElementLayout>
    <template #element>
      <q-input filled v-model="model" mask="date" :rules="['date']" :placeholder="placeHolder">
        <template #default>
            <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="qDateProxy" :breakpoint="0">
              <q-date v-model="model"  @input="() => qDateProxy.hide()">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
        </template>
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer" />
        </template>
      </q-input>
    </template>
   <template v-for="(component, slot) in elementSlots" #[slot]>
     <slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot>
   </template>
 </ElementLayout>
</template>

<script>
import VueformElement from '@vueform/vueform/element';
import { ref } from 'vue';

export default VueformElement({
  name: 'QuasarCalenderElement'
}, {
  setup (props, { element }) {
    return {
      placeHolder: ref(element.el$.value.placeholder),
      qDateProxy: ref()
    };
  }
});
</script>

<style scoped>

</style>
<script setup>
</script>
