<script setup>
import ThePasswordGeneratorTextField from './ThePasswordGeneratorTextField.vue'
import ThePasswordGeneratorSlider from './ThePasswordGeneratorSlider.vue'
import ThePasswordGeneratorCheckboxes from './ThePasswordGeneratorCheckboxes.vue'
import ThePasswordGeneratorStrengthIndicator from './ThePasswordGeneratorStrengthIndicator.vue'
import { computed, ref } from 'vue'
import { generatePassword } from '../helpers/password.mjs'

const passwordLength = ref(0)
const checkedPasswordOptions = ref(null)
const generatedPassword = ref('')

function updatePasswordLength(length) {
  passwordLength.value = parseInt(length.value, 10)
}

function updatePasswordOptions(options) {
  checkedPasswordOptions.value = options.value
}

const STRENGTH_VALUES = {
  0: '',
  1: 'Too weak!',
  2: 'Weak',
  3: 'Medium',
  4: 'Strong'
}

const isValidPassword = computed(() => {
  return passwordLength.value && checkedPasswordOptions.value
})

const passwordStrength = computed(() => {
  if (isValidPassword.value) {
    return STRENGTH_VALUES[checkedPasswordOptions.value?.length]
  }
  return null
})

function generatePasswordOptionsFrom(checkedPasswordOptions) {
  const options = {}
  if (checkedPasswordOptions.includes('uppercase')) {
    options.hasUpperCaseLetters = true
  }
  if (checkedPasswordOptions.includes('lowercase')) {
    options.hasLowerCaseLetters = true
  }
  if (checkedPasswordOptions.includes('numbers')) {
    options.hasNumbers = true
  }
  if (checkedPasswordOptions.includes('symbols')) {
    options.hasSymbols = true
  }
  return options
}

function handleFormSubmit() {
  const passwordOptions = generatePasswordOptionsFrom(checkedPasswordOptions.value)
  generatedPassword.value = generatePassword(passwordLength.value, passwordOptions)
}
</script>

<template>
  <form @submit.prevent="handleFormSubmit" class="form stack">
    <div class="wrapper">
      <ThePasswordGeneratorTextField :generated-password="generatedPassword" />
    </div>
    <div class="password-options wrapper box stack">
      <ThePasswordGeneratorSlider @slider-change-event="updatePasswordLength" />
      <ThePasswordGeneratorCheckboxes @password-options-change="updatePasswordOptions" />
      <ThePasswordGeneratorStrengthIndicator :password-strength="passwordStrength" />
      <button class="box cluster" type="submit">
        GENERATE<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </button>
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
