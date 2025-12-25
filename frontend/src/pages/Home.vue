<template>
  <div>
    <app-header></app-header>
    <div class="home">
      <div class="relative w-full h-screen">
      <!-- Background Image -->
      <img src="@/assets/Banner.jpg" alt="Banner" class="absolute inset-0 w-full h-full object-cover brightness-50" />

      <!-- Heading (Top) -->
      <div class="relative z-10 px-8 md:px-16 pt-8">
        <div class="flex items-center gap-5">
          <h1 class="text-4xl md:text-5xl font-bold text-white">Movie & Series</h1>
          <div class="flex items-center border border-white px-5 py-5 rounded text-white rounded-none">
            <span class="text-xl mr-2">Categories</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Details (Center) -->
      <div class="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 text-white">
        <span class="text-lg md:text-xl uppercase">Universal Picture</span>
        <span class="text-2xl md:text-5xl font-semibold my-10">Wicked: For Good</span>
        <button class="flex text-3xl items-center gap-2 text-white">
          Watch the trailer
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      </div>
      
      <div class="bg-black mt-0">
        <VideoSection 
          v-for="section in sections" 
          :key="section" 
          :title="section" 
          :videos="videos"
          @select-video="playVideo"
        />

        <div v-if="currentVideo" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div class="relative w-3/4 h-3/4">
            <video :src="currentVideo.url" controls autoplay class="w-full h-full rounded-lg"></video>
            <button @click="currentVideo=null" class="absolute top-2 right-2 text-white text-2xl">✕</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import VideoSection from '../components/VideoSection.vue';

export default {
  name: "HomePage",   // เปลี่ยนจาก Home → HomePage
  components: {  AppHeader , VideoSection  },
  data() {
    return {
      videos: [],
      currentVideo: null,
      sections: [
        "New Release",
        "Top 10 Recommend Today",
        "Movies",
        "Series"
      ]
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/videos')
      .then(res => res.json())
      .then(data => this.videos = data)
      .catch(err => console.error(err));
  },
  methods: {
    playVideo(video) {
      this.currentVideo = video;
    }
  }
}
</script>
