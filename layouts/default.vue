<template>
  <div class="w-full max-w-8xl min-h-screen flex flex-col">
    <Header />
    <Nuxt class="flex-grow" />
    <SearchModal />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchModal from '@/components/search/SearchModal'
export default {
  components: {
    Header,
    Footer,
    SearchModal,
  },
  head: {
    title: 'Jotunnheim Wiki',
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeypress)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeypress)
  },
  methods: {
    handleKeypress(e) {
      if (e.key === '/') {
        this.$bus.$emit('open-search')
      } else if (e.key === 'Escape') {
        this.$bus.$emit('close-search')
      }
    },
  },
}
</script>

<style>
html,
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border: none;

  @apply bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100;
}
* {
  @apply transition-colors duration-75;
}
a {
  @apply transition-opacity;
}
a:hover {
  @apply opacity-75;
}
</style>
