<template>
  <div
    class="cursor-pointer flex flex-row hover:opacity-75 transition-opacity duration-75 ease-linear"
    :aria-label="themeName"
    @click="
      $colorMode.value === 'dark'
        ? ($colorMode.preference = 'light')
        : ($colorMode.preference = 'dark')
    "
  >
    <component :is="this.$colorMode.value" decorative />
    <span class="ml-2">{{ themeName }}</span>
  </div>
</template>

<script>
import WeatherSunny from 'vue-material-design-icons/WeatherSunny'
import WeatherNight from 'vue-material-design-icons/WeatherNight'
const capFirst = (s) => s.slice(0, 1).toUpperCase() + s.slice(1, s.length)
export default {
  components: {
    light: WeatherSunny,
    dark: WeatherNight,
  },
  computed: {
    themeName() {
      return capFirst(this.$colorMode.value) + ' theme'
    },
  },
}
</script>
