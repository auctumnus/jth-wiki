<template>
  <nuxt-link
    to="/"
    class="flex flex-grow flex-row p-4 my-2 items-center select-none dark:bg-gray-600 bg-gray-200 rounded-md"
  >
    <div class="mr-8"><FileDocument :size="36" decorative /></div>
    <div
      class="overflow-ellipsis overflow-hidden align-middle flex flex-auto whitespace-nowrap break-all"
    >
      {{ title }}
    </div>
  </nuxt-link>
</template>

<script>
import FileDocument from 'vue-material-design-icons/FileDocument'
export default {
  components: {
    FileDocument,
  },
  props: {
    title: {
      type: String,
      default: 'Search Result',
    },
  },
}
</script>
