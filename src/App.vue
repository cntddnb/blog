<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>浏览</router-link>
      <router-link to="/add" exact>写博客</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}

#nav {
  background: #409eff;
  padding: 30px;
}

#nav a {
  /* transition: all 0.1s linear; */
  font-weight: bold;
  text-decoration: none;
  padding: 15px;
  border-radius: 4px;
  color: #ffffff;
}
#nav a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.8);
  color: #409eff;
}
</style>
