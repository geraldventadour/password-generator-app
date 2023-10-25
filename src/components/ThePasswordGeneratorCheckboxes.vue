<script setup></script>

<template>
  <fieldset class="stack">
    <legend class="sr-only">Password must</legend>
    <div class="cluster">
      <input type="checkbox" name="" id="uppercase">
      <label for="uppercase">Include Uppercase Letters</label>
    </div>
    <div class="cluster">
      <input type="checkbox" name="" id="lowercase">
      <label for="lowercase">Include Lowercase Letters</label>
    </div>
    <div class="cluster">
      <input type="checkbox" name="" id="numbers">
      <label for="numbers">Include Numbers</label>
    </div>
    <div class="cluster">
      <input type="checkbox" name="" id="symbols">
      <label for="symbols">Include Symbols</label>
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: none;
}

.stack {
  --margin-block-start: 1.25rem
}

.cluster {
  --column-gap: 1.5rem
}

input {
  cursor: pointer;
}

input:hover {
  outline: var(--color-neon-green) solid 1px;
}
</style>