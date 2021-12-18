<script setup>
import { NConfigProvider } from 'naive-ui';
import { NBackTop } from 'naive-ui';
import Index from './components/Index.vue';

const themeOverrides = {
  common: {
    fontSize: '16px',
  },
  Card: {
    titleFontSizeMedium: '22px',
    paddingMedium: '6px 20px 8px',
  },
  Typography: {
    headerFontSize1: '44px',
    headerTextColor: '#555',
    headerFontSize2: '30px',
  },
};
</script>

<template lang="pug">
n-config-provider(:theme-overrides="themeOverrides")
  n-back-top(:bottom="80" :right="60" show)
  Index
</template>

<style></style>
