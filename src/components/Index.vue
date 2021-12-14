<script setup>
import { ref } from "vue";
import {
  NGrid,
  NGridItem,
  NH1,
  NH2,
  NText,
  NAnchor,
  NAnchorLink,
} from "naive-ui";

import FavorItem from './Item.vue'

// const color = ["success", "info", "warning", "error"];
const data = ref({});

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    data.value = json;
    Object.freeze(data)
  });

</script>

<template lang="pug">
div(style="margin-left: 1rem")
  n-anchor(
    affix,
    :top="100",
    style="z-index: 1",
    :bound="600",
    :trigger-top="24"
  )
    n-anchor-link(title="首页", href="#")
    n-anchor-link(v-for="(item, key) in data", :title="key", :href="'#' + key")
.content
  n-h1.title
    | 作品推荐
  div(v-for="(item, key) in data", style="padding-top: 2rem", :id="key")
    n-h2.box-header(prefix="bar", :type="item['color']")
      n-text(:type="item['color']")
        | {{ key }}
      span.sub-title
        | {{ item['description'] }}
    n-grid(cols="1 s:2 m:3 l:4 xl:5 2xl:6", responsive="screen")
      n-grid-item.grid-item(v-for="i in item['list']")
        FavorItem(:item="i",:max="item['max']")
</template>

<style scoped>

.content {
  padding: 5vh 10vw;
  background-color: #f0f2f5;
  min-width: 300px;
}

@media only screen and (max-width: 900px) {
  .content {
    padding: 5vh 8vw 5vh 100px;
  }
}

.title {
  text-align: center;
  font-weight: 300;
  text-shadow: 2px 2px 4px #666;
}

.sub-title {
  color: #888;
  font-size: 18px;
  margin-left: 1.4rem;
}

.grid-item {
  margin: 0.6rem;
  margin-bottom: 1rem;
}
</style>
