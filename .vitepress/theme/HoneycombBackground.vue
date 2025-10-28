<!-- .vitepress/theme/HoneycombBackground.vue -->
<template>
  <div class="honeycomb-container" :style="{ opacity: opacity }">
    <div class="honeycomb-pattern"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const opacity = ref(1)

const handleScroll = () => {
  const maxScroll = 300; 
  const currentScroll = window.scrollY;
  
  opacity.value = Math.max(0, 1 - (currentScroll / maxScroll));
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* استایل‌های لانه زنبور عسل */
.honeycomb-container {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; 
  z-index: -1; 
  pointer-events: none; 
  transition: opacity 0.3s ease-out; 
  /* گرادیانت محو شونده از بالا به پایین */
  background: linear-gradient(to bottom, var(--vp-c-bg-alt), transparent 50%); 
}

.honeycomb-pattern {
  height: 100%;
  width: 100%;
  background-color: var(--vp-c-bg);
  opacity: 0.15; 
  
  /* الگوی لانه زنبور با گرادیانت‌های تکراری */
  /* این یک روش CSS-only برای شبیه‌سازی طرح لانه زنبور است */
  background-image: 
    radial-gradient(circle at 50% 100%, rgba(255, 183, 0, 0.5) 4%, transparent 5%),
    radial-gradient(circle at 50% 0, rgba(255, 183, 0, 0.5) 4%, transparent 5%),
    radial-gradient(circle at 0 50%, rgba(255, 183, 0, 0.5) 4%, transparent 5%),
    radial-gradient(circle at 100% 50%, rgba(255, 183, 0, 0.5) 4%, transparent 5%),
    radial-gradient(circle at 25% 75%, rgba(255, 183, 0, 0.5) 4%, transparent 5%),
    radial-gradient(circle at 75% 25%, rgba(255, 183, 0, 0.5) 4%, transparent 5%),
    radial-gradient(circle at 75% 75%, rgba(255, 183, 0, 0.5) 4%, transparent 5%),
    radial-gradient(circle at 25% 25%, rgba(255, 183, 0, 0.5) 4%, transparent 5%);
  
  background-size: 50px 50px; 
  background-repeat: repeat;
}
</style>
