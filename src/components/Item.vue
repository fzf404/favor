<script setup>
import {
  NCard,
  NImage,
  NEllipsis,
  NText,
} from "naive-ui";

// 获得参数
defineProps({
  item: Object,
  max: Number
})

const handleClick = (url) => {
  window.open(url);
};

</script>

<template lang="pug">

n-card.card-item(hoverable)
  template(#cover)
    n-image.card-img(
      :src="item['image']",
      height="240",
      preview-disabled=true,
      @click="handleClick(item['url'])"
    )
  template(#header)
    n-ellipsis(line-clamp="1")
      | {{ item['title'] }}
  template(#header-extra)
    | {{ item['author'] }}
  template(#default)
    n-ellipsis(line-clamp="1")
      n-text(type="info")
        | 介绍：{{ item['intro'] }}
  template(#footer)
    n-ellipsis(line-clamp="2", style="min-height: 50px")
      n-text(type="success")
        | 短评：{{ item['comment'] }}
  template(#action)
    n-text(code, style="min-width: 100%")
      n-ellipsis(
        :line-clamp="max",
        :style="'min-height:' + max * 20 + 'px'"
      )
        | “ {{ item['content'] }} ”
</template>

<style>

.card-item {
  max-width: 300px;
  border-radius: 22px;
}

.card-img {
  padding: 1rem 3rem;

  display: flex;
  justify-items: center;
  align-content: center;
}

.n-card__action {
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
}

.n-card-header__extra {
  color: #666 !important;
}

</style>
