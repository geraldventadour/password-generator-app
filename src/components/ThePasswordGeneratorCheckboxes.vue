<script setup>
import { ref } from 'vue'

const passwordOptions = ref([])
const emit = defineEmits(['passwordOptionsChange'])

function handlePasswordOptionsChange() {
  emit('passwordOptionsChange', passwordOptions)
}
</script>

<template>
  <fieldset class="stack">
    <legend class="sr-only">Password must</legend>
    <div class="cluster">
      <input
        type="checkbox"
        name="uppercase"
        id="uppercase"
        value="uppercase"
        v-model="passwordOptions"
        @change="handlePasswordOptionsChange"
      />
      <label for="uppercase">Include Uppercase Letters</label>
    </div>
    <div class="cluster">
      <input
        type="checkbox"
        name="lowercase"
        id="lowercase"
        value="lowercase"
        v-model="passwordOptions"
        @change="handlePasswordOptionsChange"
      />
      <label for="lowercase">Include Lowercase Letters</label>
    </div>
    <div class="cluster">
      <input
        type="checkbox"
        name="numbers"
        id="numbers"
        value="numbers"
        v-model="passwordOptions"
        @change="handlePasswordOptionsChange"
      />
      <label for="numbers">Include Numbers</label>
    </div>
    <div class="cluster">
      <input
        type="checkbox"
        name="symbols"
        id="symbols"
        value="symbols"
        v-model="passwordOptions"
        @change="handlePasswordOptionsChange"
      />
      <label for="symbols">Include Symbols</label>
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: none;
}
.stack {
  --margin-block-start: 1.25rem;
}
.cluster {
  --column-gap: 1.5rem;
}

input {
  cursor: pointer;
}

input:hover {
  outline: var(--color-neon-green) solid 1px;
}
</style>
