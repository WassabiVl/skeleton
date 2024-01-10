<script setup>
import { defineAsyncComponent } from 'vue';
const CustomerVueForm = defineAsyncComponent(() => import('../components/CustomerVueForm'));

</script>

<template>
  <q-card>
    <q-card-section class="q-pa-md">
      <CustomerVueForm >
        <DateElement
            name="datetime"
            label="Datetime"
            :time="true"
        />
      </CustomerVueForm >

    </q-card-section>
  </q-card>
</template>

<style>

</style>
