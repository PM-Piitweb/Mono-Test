<template>
  <header class="sticky top-0 z-50 flex justify-between items-center bg-black px-6 py-3">
    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" class="h-10">
    </div>

    <!-- Menu -->
    <nav class="menu">
      <ul class="flex space-x-6">
        <li>
          <a href="/" class="menu-item">Home</a>
        </li>
        <li>
          <a href="#" class="menu-item">Movies</a>
        </li>
        <li>
          <a href="#" class="menu-item">Series</a>
        </li>
        <li>
          <a href="#" class="menu-item">My Watchlist</a>
        </li>
      </ul>
    </nav>

    <!-- CTA -->
    <div class="cta flex space-x-3">
      <button class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
        Subscribe
      </button>
      <button class="bg-[#ef5e24] text-white px-4 py-2 rounded hover:bg-orange-600 transition">
        Login
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.menu-item {
  @apply text-gray-300 text-sm transition-colors duration-200;
}

.menu-item:hover,
.menu-item:active {
  @apply text-white;
}
</style>
