<template>
  <div>
    <input type="text" v-if="isSearch" v-model="searchbody" />
    <div class="menu">
      <div v-if="home">
        <div class="search icon iconfont icon-loupe-icon" @click="search" v-if="isSearch"></div>
        <div class="close icon iconfont icon-close-icon" @click="searchNull" v-if="isSearch"></div>
        <div class="search icon iconfont icon-loupe-icon" @click="showSearch" v-if="!isSearch"></div>
        <div class="ref icon iconfont icon-reload-2-icon" @click="refresh"></div>
        <div class="top icon iconfont icon-arrow-up-2-icon" @click="toTop"></div>
      </div>
      <div v-else>
        <div class="back icon iconfont icon-jump-left-down-icon" @click="back"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      isSearch: false,
      searchbody: '',
    }
  },
  props: ['blogs', 'home', 'id'],
  methods: {
    toTop() {
      window.scrollTo(0, 0)
    },
    showSearch() {
      this.isSearch = true
    },
    search() {
      const newBlogs = this.blogs.filter((blog) => blog.title.match(this.searchbody))
      this.$emit('filterBlogs', newBlogs)
      this.isSearch = false
      this.searchbody = ''
    },
    searchNull() {
      const newBlogs = this.blogs.filter((blog) => blog.title.match(''))
      this.$emit('filterBlogs', newBlogs)
      this.isSearch = false
      this.searchbody = ''
    },
    refresh() {
      this.$emit('refresh')
      this.toTop()
    },
    back() {
      this.id ? this.$router.push('/blog/' + this.id) : this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.menu {
  position: fixed;
  bottom: 30px;
  right: 15px;
  color: #fff;
}
input {
  position: fixed;
  bottom: 100px;
  right: 50px;
}
.search,
.top,
.close,
.ref,
.back {
  width: 30px;
  height: 30px;
  line-height: 30px;
  background: #409eff;
  cursor: pointer;
  border-radius: 10px;
  font-size: 5px;
  margin: 2px 0;
}
.search:hover,
.top:hover,
.close:hover,
.ref:hover,
.back:hover {
  background: #1389ff;
}
</style>