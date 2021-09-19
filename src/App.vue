<script setup>
import { NConfigProvider } from "naive-ui";
import Index from "./components/Index.vue";

const themeOverrides = {
  common: {
    fontSize: "16px",
  },
  Card: {
    titleFontSizeMedium: "22px",
    paddingMedium: "6px 20px 8px",
  },
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <Index />
  </n-config-provider>
</template>


<style>
body {
  padding: 5vh 10vw;
  background-color: #f0f2f5;
}
</style>
