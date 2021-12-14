<script setup>
import { ref } from "vue";
import {
  NCard,
  NGrid,
  NH1,
  NH2,
  NImage,
  NEllipsis,
  NText,
  NButton,
  NAnchor,
  NAnchorLink,
  NBackTop,
} from "naive-ui";

const data = ref({});
const color = ["success", "info", "warning", "error"];

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
    n-grid(cols="1 s:2 m:3 l:4 xl:4 2xl:5", responsive="screen")
      n-grid-item.card-normal(v-for="i in item['list']")
        n-card.card-item(hoverable)
          template(#cover)
            n-image.card-img(
              :src="i['image']",
              height="240",
              show-toolbar=false
            )
          template(#header)
            n-ellipsis(line-clamp="1")
              | {{ i['title'] }}
          template(#header-extra)
            | {{ i['author'] }}
          template(#default)
            n-ellipsis(line-clamp="1")
              n-text(type="info")
                | 介绍：{{ i['intro'] }}
          template(#footer)
            n-ellipsis(line-clamp="2", style="min-height: 50px")
              n-text(type="success")
                | 短评：{{ i['comment'] }}
          template(#action)
            n-text(code, style="min-width: 100%")
              n-ellipsis(
                :line-clamp="item['max']",
                :style="'min-height:' + item['max'] * 20 + 'px'"
              )
                | “ {{ i['content'] }} ”
</template>

<style>
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

.card-normal {
  margin: 0.6rem;
  margin-bottom: 1rem;
}

.card-item {
  border-radius: 22px;
}

.card-img {
  padding: 1rem 3rem;
}

.v-binder-follower-container {
  max-width: 500px;
}

.n-card-header__extra {
  color: #666 !important;
}

.n-card__action {
  border-radius: 22px !important;
}
</style>
