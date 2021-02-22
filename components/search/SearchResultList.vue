<template>
  <ul>
    <li @click="$bus.$emit('close-search')">
      <SearchResult
        v-for="result of results"
        :key="result.title"
        :title="result.title"
        :slug="result.slug"
      />
    </li>
  </ul>
</template>

<script>
import SearchResult from './SearchResult'
export default {
  components: {
    SearchResult,
  },
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
