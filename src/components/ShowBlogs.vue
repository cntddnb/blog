<template>
  <div id="showBlogs">
    <div class="blog" v-for="blog in newBlogs" :key="blog.id">
      <router-link :to="'/blog/' + blog.id">
        <span class="title">{{ blog.title | titleStrictLength }}</span>
        <div class="content" style="height: 100%">{{ blog.content | contentStrictLength }}</div>
      </router-link>
    </div>
    <search-blog :blogs="blogs" @filterBlogs="filterBlogs" @refresh="getBlogs" :home="true"></search-blog>
    <span class="title" style="color: rgb(200, 200, 200); font-weight: 300">暂无更多数据……</span>
  </div>
</template>

<script>
import { getBlogs } from '@/utils/api/blog'
import SearchBlog from '@/components/SearchBlog'
export default {
  name: 'ShowBlogs',
  data() {
    return {
      blogs: [],
      newBlogs: [],
    }
  },
  components: {
    SearchBlog,
  },
  created() {
    this.getBlogs()
  },
  methods: {
    getBlogs() {
      this.blogs = []
      this.newBlogs = []
      getBlogs()
        .then((data) => {
          let blogArr = []
          for (let key in data) {
            data[key].id = key
            blogArr.push(data[key])
          }
          this.blogs = blogArr
          this.newBlogs = this.blogs
          return this.$store.state.top
        })
        .then((data) => {
          window.scrollTo(0, data)
        })
    },
    filterBlogs(newBlogs) {
      this.newBlogs = newBlogs
    },
    scrollB(e) {
      if (e.target.documentElement.scrollTop !== 0) {
        this.$store.commit('setTop', e.target.documentElement.scrollTop)
      }
    },
  },
  filters: {
    contentStrictLength(value) {
      return value.length < 50 ? value : value.substring(0, 50) + '...'
    },
    titleStrictLength(value) {
      return value.length < 10 ? value : value.substring(0, 10) + '...'
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollB, true)
  },
}
</script>

<style scoped>
.blog {
  height: 200px;
  cursor: pointer;
}
.blog:hover {
  box-shadow: 0 0px 10px rgb(110, 110, 110);
  top: 4px;
}
</style>