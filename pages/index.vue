<template>
  <div class="md:mt-16 justify-center w-11/12 mx-auto">
    <div class="p-2 md:p-4 py-16 rounded-xl flex flex-col items-center">
      <h1
        class="text-4xl leading-none font-extrabold tracking-tight text-center mb-10"
      >
        A linguistics-based conworld with focuses on
        <span class="text-accent">realism</span> and
        <span class="text-accent">collaboration</span>.
      </h1>
      <div class="text-center dark:text-gray-100 text-gray-600 text-2xl mb-10">
        Project: Jotunnheim is a unique conworld with deep roots and this
        landing page sucks ass.
      </div>
      <div
        class="flex flex-grow flex-col items-center md:flex-row justify-between md:justify-around w-full lg:w-9/12 xl:w-1/2"
      >
        <nuxt-link
          to="/"
          class="rounded p-4 bg-accent text-gray-50 block w-64 text-center"
        >
          See an overview
        </nuxt-link>
        <nuxt-link
          to="/w/about"
          class="rounded p-4 bg-gray-500 text-gray-50 block w-64 text-center mt-4 md:mt-0"
        >
          About the project itself
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home | Jotunnheim Wiki',
  },
}
</script>
