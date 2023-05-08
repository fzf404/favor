<script setup>
defineProps({
  item: Object,
  max: Number
})

const jump = (url) => {
  window.open(url)
}
</script>

<template lang="pug">
n-card.card-item(hoverable)
  template(#cover)
    n-image.card-img(
      :src="item['image']"
      height="240"
      preview-disabled=true
      @click="jump(item['url'])"
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
    n-ellipsis(line-clamp="2" style="min-height: 50px")
      n-text(type="success")
        | 短评：{{ item['comment'] }}
  template(#action)
    n-text(code style="min-width: 100%")
      n-ellipsis(
        :line-clamp="max"
        :style="'min-height:' + max * 20 + 'px'"
      )
        | “ {{ item['content'] }} ”
</template>

<style>
.card-item {
  max-width: 18rem;
  border-radius: 0.6rem;
}

.card-img {
  padding: 1rem 3rem;

  display: flex;
  justify-items: center;
  align-content: center;
}

.n-card__action {
  border-bottom-left-radius: 0.6rem !important;
  border-bottom-right-radius: 0.6rem !important;
}
</style>
