<template>
  <div class="home">
    <show-blogs />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowBlogs from '@/components/ShowBlogs.vue'

export default {
  name: 'Home',
  components: {
    ShowBlogs,
  },
}
</script>
