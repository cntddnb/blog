<template>
  <div id="singleBlog">
    <div class="blog">
      <span class="title">{{ blog.title }}</span>
      <hr />
      <div class="content">{{ blog.content }}</div>
      <div style="margin-left: 20px">
        <span v-if="blog.categories">
          <b style="font-size: 18px">标签：</b>
          <span v-for="category in blog.categories" :key="category">
            <span class="cate">
              {{ category }}
            </span>
          </span>
        </span>
        <div v-if="blog.author">
          <b style="font-size: 18px">作者：</b>
          <span class="aut">
            {{ blog.author }}
          </span>
        </div>
        <div style="display: flex; justify-content: flex-end; align-items: center" v-if="show">
          <span class="del" @click="del">删除</span>
          <router-link :to="'/edit/' + id">
            <span class="edit">编辑</span>
          </router-link>
        </div>
      </div>
    </div>
    <search-blog :home="false"></search-blog>
  </div>
</template>

<script>
import { singleBlog, delBlog } from '@/utils/api/blog'
import SearchBlog from '@/components/SearchBlog'
export default {
  name: 'SingleBlog',
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      show: false,
    }
  },
  components: {
    SearchBlog,
  },
  created() {
    singleBlog(this.id).then((data) => {
      this.blog = data
      this.show = true
    })
  },
  methods: {
    del() {
      const result = confirm('确定要删除吗？')
      // console.log(result)
      if (result) {
        delBlog(this.id).then(() => {
          this.$router.push('/')
        })
      }
    },
  },
}
</script>

<style scoped>
.blog {
  padding-bottom: 15px;
}
.content {
  margin-bottom: 20px;
}
.cate,
.aut {
  display: inline-block;

  border-radius: 15px;
  color: #fff;
}
.cate {
  background: #b73fbb;
  padding: 4px 8px;
  margin: 0 2px;
}
.aut {
  background: #3f3f3f;

  padding: 4px 8px;
  margin: 5px 5px;
}
.del,
.edit {
  padding: 2px 5px;
  margin: 0 2px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.del {
  background: #f56c6c;
}
.del:hover {
  background: #f85555;
}
.edit {
  background: #909399;
  margin-right: 15px;
}
.edit:hover {
  background: #797979;
}
</style>