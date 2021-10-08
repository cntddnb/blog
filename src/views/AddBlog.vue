<template>
  <div id="addBlogs">
    <div class="blog" v-if="!success">
      <span class="title">添加博客</span>
      <form class="content">
        <div class="blogTitle">
          <label>博客标题：</label>
          <input type="text" v-model="blog.title" required />
        </div>
        <label>博客内容：</label>
        <textarea required v-model="blog.content"></textarea>
        <div class="categoires">
          <label>博客分类：</label>
          <input type="checkbox" value="Vue" v-model="blog.categories" />
          <label>Vue</label>
          <input type="checkbox" value="Node" v-model="blog.categories" />
          <label>Node</label>
          <input type="checkbox" value="其他" v-model="blog.categories" />
          <label>其他</label>
        </div>
        <div>
          <label style="margin-top: 15px; display: inline">博客作者：</label>
          <select style="width: 100px" v-model="blog.author">
            <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
          </select>
        </div>
        <button @click.prevent="addBlog">添加博客</button>
        <span class="info">提示：标题和内容均为必填项</span>
      </form>
    </div>
    <div class="blog" v-if="success">
      <span class="title">博客发布成功</span>
      <div>
        <router-link :to="'/blog/' + id">
          <button class="btn">详细内容</button>
        </router-link>
        <button class="btn" @click.prevent="back">返回</button>
      </div>
    </div>
    <div :class="[no ? 'shadow' : '']">
      <div class="blog no" v-if="no">
        <span class="title" style="color: #111">博客发布失败</span>
        <span style="padding: 10px 12px; color: #F00000;">{{ errCont }}</span>
        <div>
          <button class="btn" @click.prevent="back">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addBlog } from '@/utils/api/blog'
export default {
  name: 'AddBlogs',
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      authors: ['Tom', 'Jerry'],
      success: false,
      id: null,
      no: false,
      errCont: '',
    }
  },
  methods: {
    addBlog() {
      if (this.blog.title && this.blog.content) {
        addBlog(this.blog)
          .then((data) => {
            this.blog = { title: '', content: '', categories: [], author: '' }
            this.success = true
            this.id = data.name
          })
          .catch((error) => {
            this.no = true
            this.errCont = error
          })
      } else {
        this.no = true
        this.errCont = '标题和内容为必填项'
      }
    },
    back() {
      this.no = false
      this.success = false
    },
  },
}
</script>

<style scoped>
.blog {
  margin-top: 30px;
  padding-bottom: 50px;
}
.shadow {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
}
label {
  display: block;
  margin: 5px auto;
}
.blogTitle {
  margin-bottom: 20px;
}
.blogTitle label {
  margin: 10px auto;
}
.blogTitle input {
  display: block;
  width: 100%;
  height: 30px;
}
.categoires label {
  display: inline-block;
  margin-bottom: 10px;
}
button {
  margin-top: 30px;
  padding: 12px 15px;
  border: none;
  background: #409eff;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
}
button:hover {
  background: #1389ff;
}
.btn {
  margin: 15px 0 0 20px;
  padding: 8px 10px;
  font-size: 16px;
  transform: translate(0, 30px);
  background: #909399;
}
.btn:hover {
  background: #696a6b;
}
.info {
  display: inline-block;
  background: #909399;
  margin-left: 15px;
  border-radius: 4px;
  padding: 5px;
  color: #fff;
  font-size: 14px;
}
.no {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(233, 233, 233);
}
</style>
