<script setup>
import { ref } from 'vue'

import { NGrid, NGridItem, NH1, NH2, NText, NAnchor, NAnchorLink } from 'naive-ui'

import FavorItem from './Item.vue'

const data = ref({})

fetch('data.json')
  .then((response) => response.json())
  .then((json) => {
    data.value = json
    Object.freeze(data)
  })
</script>

<template lang="pug">
//- 侧边导航
nav
  n-anchor(
    affix
    style="z-index: 1"
    :top="100"
    :bound="600"
    :trigger-top="24"
  )
    n-anchor-link(title="首页" href="#")
    n-anchor-link(v-for="(item, key) in data" :title="key" :href="'#' + key")
//- 主要内容
main
  //- 网站标题
  n-h1.title
    | 作品推荐
  //- 网站内容
  section(v-for="(item, key) in data" style="padding-top: 2rem")
    n-h2.box-header(prefix="bar" :type="item['color']")
      n-text(:type="item['color']")
        | {{ key }}
      span.sub-title
        | {{ item['description'] }}
    n-grid(cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen")
      n-grid-item.grid-item(v-for="i in item['list']")
        FavorItem(:item="i" :max="item['max']")
</template>

<style scoped>
nav {
  margin-left: 1rem;
}

main {
  padding: 5vh 10vw;
  background-color: #f0f2f4;
  min-width: 300px;
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
  margin-bottom: 0.8rem;
}
</style>
