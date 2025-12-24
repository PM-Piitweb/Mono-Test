<template>
  <div>
    <h1>Smart TV Video App</h1>
    <video-list @select-video="selectVideo"></video-list>
    <video-player v-if="currentVideo" :video="currentVideo"></video-player>
  </div>
</template>

<script>
import VideoList from '../components/VideoList.vue';
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  name: "HomePage",   // เปลี่ยนจาก Home → HomePage
  components: { VideoList, VideoPlayer },
  data() {
    return {
      currentVideo: null
    }
  },
  methods: {
    selectVideo(video) {
      this.currentVideo = video;
    }
  }
}
</script>
