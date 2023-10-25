<script setup>
import { ref } from 'vue';

const passwordLength = ref(10)
</script>

<template>
  <div class="stack">
    <div class="cluster">
      <label for="">Character Length</label>
      <output>{{ passwordLength }}</output>
    </div>
    <input type="range" name="" id="" min="0" max="20" step="1" v-model="passwordLength">
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

input[type="range"] {
  cursor: pointer;
}

@container (min-width:33.75rem) {
  output {
    font-size: var(--font-size-heading-l);
  }
}
</style>