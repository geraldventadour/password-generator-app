<script setup>
import { ref } from 'vue'

const emit = defineEmits(['sliderChangeEvent'])
const passwordLength = ref('0')

function handleSliderChange() {
  emit('sliderChangeEvent', passwordLength)
}
</script>

<template>
  <div class="stack">
    <div class="cluster">
      <label for="length">Character Length</label>
      <output>{{ passwordLength }}</output>
    </div>
    <input
      type="range"
      name="length"
      id="length"
      min="0"
      max="20"
      step="1"
      v-model="passwordLength"
      @change="handleSliderChange"
    />
  </div>
</template>

<style scoped>
.stack {
  container: wrapper;
  --margin-block-start: 1rem;
}

.cluster {
  --horizontal-alignment: space-between;
}

output {
  font-size: var(--font-size-heading-m);
  color: var(--color-neon-green);
}

input[type='range'] {
  cursor: pointer;
}

@container (min-width:33.75rem) {
  output {
    font-size: var(--font-size-heading-l);
  }
}
</style>
