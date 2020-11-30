<template>
  <footer
    class="bottom-0 border-t border-gray-300 dark:border-gray-600 flex flex-row p-2 px-4 md:px-16 justify-between"
    role="contentinfo"
  >
    <DarkLightSwitch />
    <div class="flex flex-row">
      <a
        href="https://github.com/auctumnus/jth-wiki"
        class="mr-4"
        aria-label="Link to the github repository"
      >
        <Github decorative />
      </a>
      <a href="https://nuxtjs.org"><img :src="getNuxtIcon" class="h-6" /></a>
    </div>
  </footer>
</template>

<script>
import DarkLightSwitch from './DarkLightSwitch'
import Github from 'vue-material-design-icons/Github'
export default {
  components: {
    DarkLightSwitch,
    Github,
  },
  computed: {
    getNuxtIcon() {
      return this.$colorMode.value === 'dark'
        ? '/nuxt-icon-dark.png'
        : '/nuxt-icon-light.png'
    },
  },
}
</script>
