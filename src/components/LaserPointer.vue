<template>
  <div 
    v-if="isActive" 
    class="laser-spot"
    :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  isActive: { type: Boolean, default: false }
});

const mouseX = ref(-100);
const mouseY = ref(-100);

function handleMouseMove(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
.laser-spot {
  position: fixed;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #E91E63;
  box-shadow: 0 0 12px #E91E63, 0 0 24px #E91E63, 0 0 40px rgba(233, 30, 99, 0.9);
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease-out;
}
</style>
