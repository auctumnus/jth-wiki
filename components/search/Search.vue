<template>
  <div
    class="lg:w-1/2 xl:w-1/3 flex flex-row items-center lg:border-gray-300 lg:dark:border-gray-600 lg:border text-gray-400 lg:rounded-xl cursor-pointer"
    @click="$bus.$emit('open-search')"
  >
    <MagnifyIcon
      :size="36"
      class="fill-current ml-2 dark:text-gray-400 text-gray-300"
      decorative
    />
    <span class="hidden lg:inline p-2 my-2 mr-2 select-none">
      Press
      <kbd
        class="py-0.5 px-1.5 rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-600 bg-gray-200"
      >
        /</kbd
      >
      or click here to search...
    </span>
  </div>
</template>

<script>
import MagnifyIcon from 'vue-material-design-icons/Magnify'
export default {
  components: {
    MagnifyIcon,
  },
  data() {
    return {
      focused: false,
    }
  },
  methods: {
    toggleFocused() {
      this.focused = !this.focused
    },
  },
}
</script>
<style scoped>
kbd {
  font: inherit;
}
</style>
