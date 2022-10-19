<template>
  
  <c-header></c-header>

        
    <router-view />

  
  <c-footer></c-footer>
  
</template>

<script setup>
import CHeader from '../components/CHeader.vue';
import CFooter from '../components/CFooter.vue';
</script>
