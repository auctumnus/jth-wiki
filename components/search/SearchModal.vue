<template>
  <div
    id="search-modal"
    role="combobox"
    aria-label="Search box"
    :class="{ hidden: !open }"
    class="bg-gray-900 fixed left-0 top-0 w-full h-full flex z-20"
    @keydown.esc="closeSearch"
    @click.self="closeSearch"
  >
    <div
      class="mx-auto flex-grow lg:max-w-4xl dark:bg-gray-700 bg-gray-100 rounded-xl p-6 px-10 shadow-md flex-col justify-center items-center max-w-full"
    >
      <div
        class="flex flex-grow flex-row justify-center border-b focus-within:border-accent dark:focus-within:border-accent border-gray-300 dark:border-gray-600 transition-colors duration-75 p-2"
      >
        <span class="inline-flex justify-center items-center">
          <Magnify
            class="dark:text-gray-400 text-gray-300 fill-current"
            :size="36"
            decorative
          />
        </span>
        <input
          ref="input"
          v-model="search"
          v-debounce:150ms.cancelonempty="searchDocuments"
          type="text"
          class="p-2 flex-grow focus:outline-none"
          placeholder="Type your search here..."
          autocomplete="off"
          autocorrect="off"
          autofocus
        />
        <span class="inline-flex justify-center items-center">
          <kbd
            class="py-0.5 px-1.5 rounded border border-gray-300 dark:border-gray-500 cursor-pointer select-none dark:bg-gray-600 bg-gray-200"
            aria-label="Close search box"
            @click="closeSearch"
          >
            Esc</kbd
          >
        </span>
      </div>
      <SearchResultList :results="results" />
    </div>
  </div>
</template>

<script>
import Magnify from 'vue-material-design-icons/Magnify'

import SearchResultList from './SearchResultList'
export default {
  components: {
    Magnify,
    SearchResultList,
  },
  data() {
    return {
      open: false,
      search: '',
      results: [],
    }
  },
  mounted() {
    this.$bus.$on('open-search', this.openSearch)
    this.$bus.$on('close-search', this.closeSearch)
  },
  beforeDestroy() {
    this.$bus.$off('open-search', this.openSearch)
    this.$bus.$off('close-search', this.closeSearch)
  },
  methods: {
    openSearch(newText = '') {
      this.open = true
      this.$refs.input.focus()
      if (newText) {
        this.search = newText
      }
      this.searchDocuments()
    },
    closeSearch() {
      this.open = false
    },
    async searchDocuments() {
      this.results = await this.$content().limit(20).search(this.search).fetch()
    },
  },
}
</script>

<style scoped>
@media (max-width: 1024px) {
  #search-modal {
    padding: 10vw;
  }
}

@media (min-width: 1024px) {
  #search-modal {
    padding: 12vh;
  }
}
#search-modal {
  background-color: rgba(0, 0, 0, 0.3);
}
kbd {
  font: inherit;
}
input {
  background-color: inherit !important;
  font: inherit !important;
  color: inherit !important;
}
</style>
