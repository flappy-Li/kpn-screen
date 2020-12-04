<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@font-face {
  font-family: "txwhgzb";
  src: url(assets/fonts/font.ttf) format("truetype");
}

* {
  padding: 0;
  margin: 0;
}

// html,
// body {
//   width: 100%;
//   height: 100%;
// }

#app {
  // width: 100%;
  // height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #fff;
  ul,
	li,
	i,
	a {
		list-style: none;
		text-decoration: none;
		font-style: normal;
	}
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  created() {
    this.initFontSize(document, window);
  },
  methods: {
    initFontSize(doc, win) {
      let fn = () => {
        let docEl = doc.documentElement,
          clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 12 * (clientWidth / 1920) + "px";
        console.log(docEl.style.fontSize);
      };
      if (!doc.addEventListener) return;
      win.addEventListener("resize", fn);
      doc.addEventListener("DOMContentLoaded", fn);
    },
  }
};
</script>