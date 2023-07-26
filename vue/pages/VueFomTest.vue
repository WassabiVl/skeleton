<script setup>
import { defineAsyncComponent, ref,onMounted } from 'vue';
import { useCusStore } from '../store/CustomerStore';
const CustomerVueForm = defineAsyncComponent(() => import('../components/CustomerVueForm'));
const CusStore = useCusStore();
const form1$ = ref();
function cc (data){
  console.log(data)
}
onMounted(()=>{
  console.log(CusStore.data)
})
</script>

<template>
  <q-card>
    <q-card-section class="q-pa-md">
      <customer-vue-form
        :schema="CusStore.getForm.schema"
        v-model="CusStore.data"
        sync
        ref="form1$"
        id="TaskList"
      />
      {{CusStore.data}}
    </q-card-section>
  </q-card>
</template>

<style>

</style>
