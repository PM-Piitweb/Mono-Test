<template>
  <div @click="$emit('select', video)" class="cursor-pointer relative w-full h-60 rounded-md overflow-hidden">
    <!-- Thumbnail -->
    <img 
      :src="video.thumbnail" 
      :alt="video.title" 
      class="w-full h-full object-cover transition duration-300"
    />

    <!-- Video preview -->
    <video 
      :src="video.url" 
      class="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-300"
      muted
      autoplay
      loop
      playsinline
    ></video>

    <!-- Title -->
    <p class="text-white mt-2">{{ video.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    video: Object
  }
}
</script>
