<template>
  <NuxtLink
    :to="to"
    target="_blank"
    class="overflow-hidden relative group underline duration-500 decoration-zinc-900/20 hover:decoration-zinc-900/80 hover:opacity-80"
  >
    <span class="">
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
