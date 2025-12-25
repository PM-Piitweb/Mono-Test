<template>
  <div class="my-0 relative py-8 flex justify-center">
    <div class="w-5/6">
      <!-- Section Title -->
      <h3 class="text-white text-3xl mb-4">{{ title }}</h3>

      <div class="relative">
        <!-- ปุ่มซ้าย -->
        <button 
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Scroll container -->
        <div ref="scrollContainer" class="flex overflow-hidden gap-4">
          <div
            v-for="video in videos"
            :key="video._id"
            class="flex-none" 
            :style="{ flexBasis: 'calc(25% - 12px)' }"
            >
            <VideoCard :video="video" @select="$emit('select-video', $event)" />
          </div>

        </div>

        <!-- ปุ่มขวา -->
        <button 
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue';

export default {
  props: {
    title: String,
    videos: Array
  },
  components: { VideoCard },
  methods: {
    scrollLeft() {
      const container = this.$refs.scrollContainer;
      const cardWidth = container.querySelector('div').clientWidth + 16; // 16 = gap-4
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    },
    scrollRight() {
      const container = this.$refs.scrollContainer;
      const cardWidth = container.querySelector('div').clientWidth + 16;
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }
}
</script>
