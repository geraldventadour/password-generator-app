<script setup>
import ThePasswordGeneratorTextField from './ThePasswordGeneratorTextField.vue';
import ThePasswordGeneratorSlider from './ThePasswordGeneratorSlider.vue';
import ThePasswordGeneratorCheckboxes from './ThePasswordGeneratorCheckboxes.vue';
import ThePasswordGeneratorStrengthIndicator from './ThePasswordGeneratorStrengthIndicator.vue';
</script>

<template>
  <form class="form stack">
    <div class="wrapper ">
      <ThePasswordGeneratorTextField />
    </div>
    <div class="password-options wrapper box stack">
      <ThePasswordGeneratorSlider />
      <ThePasswordGeneratorCheckboxes />
      <ThePasswordGeneratorStrengthIndicator />
      <button class="box cluster" type="submit">GENERATE<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg></button>
    </div>
  </form>
</template>

<style scoped>
form {
  --margin-block-start: 1.5rem;
  container-type: inline-size;
}

.wrapper {
  container: wrapper;
  --background-color: var(--color-dark-grey);
  --padding: 1rem;
}

.password-options {
  --margin-block-start: 2rem;
}

button {
  --background-color: var(--color-neon-green);
  --horizontal-alignment: center;
  --color: var(--color-dark-grey);
  --column-gap: 1.5rem;
  --padding: 1.25rem;
  cursor: pointer;
}

button:hover {
  --color: var(--color-neon-green);
  --background-color: transparent;
  outline: var(--color-neon-green) solid 2px;
  outline-offset: -4px;
}

button:hover path {
  fill: var(--color-neon-green);
}

@container (min-width:33.75rem) {
  .wrapper {
    --padding: 2rem;
  }
}
</style>