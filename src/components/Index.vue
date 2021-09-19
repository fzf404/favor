<script setup>
import { ref } from "vue";
import { NCard, NGrid, NH1, NImage, NEllipsis, NText, NButton } from "naive-ui";

const data = ref({});
const color = ['success','info','warning','error'];

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    data.value = json;
  });

const handleClick = (url) => {
  window.open(url);
};
</script>

<template lang="pug">
div(v-for="(item, key) in data")
  n-h1.box-header(prefix="bar", type="info")
    n-text(type="info")
      | {{ key }}
  n-grid(cols="1 s:2 m:3 l:4 xl:4 2xl:5", responsive="screen")
    n-grid-item.card-normal(v-for="i in item['list']")
      n-card.card-item(hoverable)
        template(#cover)
          n-image.card-img(:src="i['image']", height="300")
        template(#header)
          n-ellipsis(line-clamp="1")
            | {{ i['title'] }}
        template(#header-extra)
          | {{ i['author'] }}
        template(#default)
          n-text(type="info")
            | 介绍：{{ i['intro'] }}
        template(#footer)
          n-ellipsis(line-clamp="2")
            n-text(type="success")
              | 短评：{{ i['comment'] }}
        template(#action)
          n-text(code)
            n-ellipsis(line-clamp="5")
              | “ {{ i['content'] }} ”
</template>


<style>
.box-header {
  margin-left: 1rem;
}
.card-normal {
  margin: 0.6rem;
  margin-bottom: 2rem;
  border-radius: 30px;
}
.card-item {
  border-radius: 16px;
}
.card-img {
  padding: 1rem 2.4rem;
}

.v-binder-follower-container {
  max-width: 500px;
}

.n-card-header__extra {
  color: #666 !important;
}
</style>
