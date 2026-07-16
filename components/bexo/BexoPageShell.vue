<template>
  <main class="bexo min-h-[100dvh] bg-white">
    <div class="lg:hidden">
      <slot name="mobile" />
    </div>
    <div class="bexo-canvas-wrap hidden lg:flex">
      <slot name="desktop" />
    </div>
  </main>
</template>
