<script setup>
import { computed } from 'vue'

const props = defineProps({
  passwordStrength: {
    type: String
  }
})

const passwordStrengthInUppercase = computed(() => {
  return props.passwordStrength?.toUpperCase()
})

const passwordStrengthCssClass = computed(() => {
  return props.passwordStrength?.match(/\w+/g)?.join('-').toLowerCase()
})
</script>
<template>
  <div class="box cluster">
    <span class="text">STRENGTH</span>
    <div class="value cluster">
      <span class="level">{{ passwordStrengthInUppercase }}</span>
      <div class="indicators cluster" :class="passwordStrengthCssClass">
        <span></span><span></span><span></span><span></span>
      </div>
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

.indicators.too-weak > span:first-of-type {
  background-color: var(--color-red);
  outline-color: var(--color-red);
}

.indicators.weak > span:nth-of-type(1),
.indicators.weak > span:nth-of-type(2) {
  background-color: var(--color-orange);
  outline: var(--color-orange);
}

.indicators.medium > span:nth-of-type(1),
.indicators.medium > span:nth-of-type(2),
.indicators.medium > span:nth-of-type(3) {
  background-color: var(--color-yellow);
  outline: var(--color-yellow);
}

.indicators.strong > span {
  background-color: var(--color-neon-green);
  outline-color: var(--color-neon-green);
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
