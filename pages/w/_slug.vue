<template>
  <div class="flex flex-col lg:flex-row m-4">
    <TableOfContents class="mb-4 lg:w-1/5" :page="page"></TableOfContents>
    <div class="lg:ml-64 xl:ml-80 flex flex-grow flex-col">
      <article class="prose dark:prose-dark">
        <nuxt-content :document="page" />
      </article>
      <TagList :tags="page.tags || []" />
    </div>
  </div>
</template>

<script>
import TableOfContents from '@/components/TableOfContents'
import TagList from '@/components/TagList'

const findIndex = (page, tag) => {
  for (let i = 0; i < page.body.children.length; i++) {
    const e = page.body.children[i]
    if (e.tag === tag) {
      return i
    }
  }
  return undefined
}

const moveFirstInfobox = (isMobile, page) => {
  const infoboxIndex = findIndex(page, 'infobox')
  if (infoboxIndex === undefined) {
    return page
  }

  let secondHeadingIndex = findIndex(page, 'h2')
  if (secondHeadingIndex === undefined) {
    secondHeadingIndex = page.body.children.length
  }

  if (isMobile) {
    // move to before second heading, or to last position in array
    if (
      infoboxIndex === page.body.children.length - 1 ||
      infoboxIndex === secondHeadingIndex - 1
    ) {
      return page
    }
    const infobox = page.body.children.splice(infoboxIndex, 1)
    console.log(secondHeadingIndex)
    page.body.children.splice(secondHeadingIndex - 1, 0, ...infobox)
  } else {
    // move to first position in array
    if (infoboxIndex === 0) {
      return page
    }
    const infobox = page.body.children.splice(infoboxIndex, 1)
    page.body.children.unshift(...infobox)
  }
  return page
}

const isMobile = () => window.innerWidth < 1024

export default {
  components: {
    TableOfContents,
    TagList,
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug
    let page = await $content(slug)
      .fetch()
      .catch((err) => {
        console.error(err)
        error({ statusCode: 404, mesage: 'Page not found' })
      })
    page = moveFirstInfobox(isMobile(), page)
    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title + ' | Jotunnheim Wiki',
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateInfoboxPosition)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateInfoboxPosition)
  },
  methods: {
    updateInfoboxPosition() {
      this.page = moveFirstInfobox(isMobile(), this.page)
    },
  },
}
</script>

<style>
article.prose {
  max-width: 100% !important;
}
.nuxt-content *:not(aside) {
  max-width: 65ch;
}
</style>
