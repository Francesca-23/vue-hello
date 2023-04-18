const { createApp } = Vue

createApp({
  data() {
    return {
        message: "Hello World",
        image: "https://picsum.photos/seed/picsum/500/300"
    }
  },
  methods: {

  }
}).mount('#app')