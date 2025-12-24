<template>
  <div>
    <h2>Video List</h2>
    <ul>
      <li v-for="video in videos" :key="video._id">
        <button @click="select(video)">{{ video.title }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/videos')
      .then(res => res.json())
      .then(data => this.videos = data)
      .catch(err => console.error(err));
  },
  methods: {
    select(video) {
      this.$emit('select-video', video);
    }
  }
}
</script>
