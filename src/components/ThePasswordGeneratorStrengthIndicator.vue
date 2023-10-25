<script setup></script>
<template>
  <div class="box cluster">
    <span class="text">STRENGTH</span>
    <div class="value cluster">
      <span class="level">MEDIUM</span>
      <div class="indicators cluster"><span></span><span></span><span></span><span></span></div>
    </div>
  </div>
</template>
<style scoped>
.box {
  container: wrapper;
  --background-color: var(--color-very-dark-grey);
}

.cluster {
  --horizontal-alignment: space-between;
}

.text {
  color: var(--color-grey);
}

.value {
  --column-gap: 1rem;
}

.indicators {
  --column-gap: 0.5rem;
}

.indicators > span {
  block-size: 1.75rem;
  inline-size: 0.625rem;
  outline: var(--color-almost-white) solid 0.125rem;
  outline-offset: -0.125rem;
}

@container (min-width:33.75rem) {
  .box {
    padding: 1.25rem 2rem;
  }

  .level {
    font-size: var(--font-size-heading-m);
  }
}
</style>
