<template>
  <div>
    <h2>Now Playing: {{ video.title }}</h2>
    <video width="720" controls :src="video.url" autoplay></video>
  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>
