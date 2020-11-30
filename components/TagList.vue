<template>
  <nav v-if="tags.length">
    <span class="font-bold pb-1 text-sm uppercase">Tags for this page:</span>
    <ul>
      <li v-for="tag of tags" :key="tag">
        <span
          class="text-accent cursor-pointer"
          :data-target="tag"
          @click="openTag(tag)"
        >
          {{ tag }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  methods: {
    openTag(tag) {
      this.$bus.$emit('open-search', tag)
    },
  },
}
</script>

<style scoped>
nav {
  max-width: 65ch;
}
ul {
  list-style: none;
  padding: 0;
}
ul > li {
  display: inline;
}
li + li {
  @apply pl-1;
}
li + li::before {
  content: '· ' / '';
}
</style>
