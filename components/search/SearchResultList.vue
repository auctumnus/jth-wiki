<template>
  <ul>
    <li>
      <SearchResult
        v-for="result of results"
        :key="result.title"
        :title="result.title"
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
