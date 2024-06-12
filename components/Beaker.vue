<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    role="img"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      data-name="layer1"
      d="M39.917 25.746A4.885 4.885 0 0 1 37 21.331V8H27v13.315a4.909 4.909 0 0 1-2.929 4.436 18.972 18.972 0 0 0-11.056 17.876 25.392 25.392 0 0 0 19.008 1.358c8.142-2.714 14.766-.888 18.617 1.681a18.952 18.952 0 0 0-10.723-20.92z"
      fill="#dff4fc"
    ></path>
    <path
      data-name="layer4"
      d="M32.022 44.985a25.392 25.392 0 0 1-19.008-1.358c.018.567.057 1.14.126 1.717a19 19 0 0 0 37.5 1.322c-3.852-2.566-10.476-4.394-18.618-1.681z"
      :fill="liquid"
    ></path>
    <path
      data-name="layer3"
      d="M36 8V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4z"
      fill="#a56660"
    ></path>
    <circle
      class="bubble1"
      data-name="layer2"
      cx="34.1"
      cy="29"
      r="2"
      :fill="bubble"
    ></circle>
    <!-- <circle
      data-name="opacity"
      cx="39"
      cy="38"
      r="2"
      fill="#fff"
      opacity=".5"
    ></circle> -->
    <circle
      class="bubble2"
      data-name="layer2"
      cx="36"
      cy="51"
      r="2"
      :fill="bubble"
    ></circle>
    <circle
      class="bubble3"
      data-name="layer2"
      cx="28"
      cy="38"
      r="3"
      :fill="bubble"
    ></circle>
    <circle data-name="stroke" cx="34" cy="29" r="2" fill="none"></circle>
    <circle
      class="bubble4"
      data-name="layer2"
      cx="39"
      cy="38"
      r="2"
      :fill="bubble"
    ></circle>
    <circle data-name="stroke" cx="36" cy="51" r="2" fill="none"></circle>
    <circle data-name="stroke" cx="28" cy="38" r="3" fill="none"></circle>
    <path
      data-name="layer1"
      d="M38 9H26a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"
      fill="#dff4fc"
    ></path>
    <path
      data-name="opacity"
      d="M38 9H26a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"
      fill="#000064"
      opacity=".15"
    ></path>
    <path
      data-name="opacity"
      d="M32 2h-2a2 2 0 0 0-2 2v3h-2a1 1 0 0 0 0 2h1v12.315a4.909 4.909 0 0 1-2.929 4.436 18.972 18.972 0 0 0-11.056 17.876c.018.567.057 1.14.126 1.717a19.044 19.044 0 0 0 16.665 16.533 19.625 19.625 0 0 0 2.194.111z"
      fill="#000064"
      opacity=".15"
    ></path>
  </svg>
</template>

<style scoped>
.bubble1 {
  animation: bubble1 2.1s infinite ease-in-out;
}
.bubble2 {
  animation: bubble2 2.3s infinite ease-in-out;
}
.bubble3 {
  animation: bubble3 2.7s infinite ease-in-out;
}
.bubble4 {
  animation: bubble4 2.9s infinite ease-in-out;
}

@keyframes bubble1 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4%);
  }
}

@keyframes bubble2 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6%);
  }
}

@keyframes bubble3 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%);
  }
}

@keyframes bubble4 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4%);
  }
}
</style>

<script lang="ts" setup>
const props = defineProps<{
  liquid: string;
  bubble: string;
}>();
</script>
