<template>
  <figure class="lg:fixed" role="navigation" aria-labelledby="tableofcontents">
    <h1 id="tableofcontents" class="font-bold pb-1 text-sm uppercase">
      On this page
    </h1>
    <scrollactive :highlight-first-item="true">
      <ul>
        <li class="toc2">
          <NuxtLink :to="`#${titleId}`" class="scrollactive-item">
            {{ page.title }}
          </NuxtLink>
        </li>
        <li
          v-for="link of page.toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          class=""
        >
          <NuxtLink :to="`#${link.id}`" class="scrollactive-item">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </scrollactive>
  </figure>
</template>

<script>
import GithubSlugger from 'github-slugger'
export default {
  props: {
    page: {
      required: true,
      type: Object,
    },
  },
  computed: {
    titleId() {
      return GithubSlugger.slug(this.page.title)
    },
  },
}
</script>

<style scoped>
.toc2,
.toc3 {
  @apply dark:text-gray-300 text-gray-500 transition-opacity duration-75;
}
.toc2:hover,
.toc3:hover {
  @apply opacity-75;
}
.toc2 {
  @apply border-t border-gray-300 dark:border-gray-600 mt-2 pt-2;
}
.toc3 {
  @apply ml-1 pt-1;
}
.toc3::before {
  content: '·' / '';
}
a {
  @apply transition-colors duration-75;
}
a.is-active {
  @apply text-accent;
}
</style>
