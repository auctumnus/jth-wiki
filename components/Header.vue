<template>
  <header
    class="sticky top-0 z-20 w-full max-w-8xl mx-auto flex-none flex px-4 md:px-8 xl:px-16 items-center align-middle justify-between py-4 border-b border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-gray-100"
  >
    <div>
      <nuxt-link to="/">
        <h1
          class="text-2xl md:text-4xl font-extrabold hover:opacity-75 transition-opacity duration-100"
        >
          Jotunnheim Wiki
        </h1>
      </nuxt-link>
    </div>
    <Search />
  </header>
</template>
<script>
import Search from './search/Search'
export default {
  components: {
    Search,
  },
}
</script>
