<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  generatedPassword: {
    type: String,
    required: true
  }
})

const isPasswordCopied = ref(false)

const password = computed(() => {
  return props?.generatedPassword
})

function handleCopyButtonClick() {
  navigator.clipboard.writeText(password.value)
  isPasswordCopied.value = true
}

watch(password, () => {
  isPasswordCopied.value = false
})
</script>

<template>
  <label for="generated-password" class="sr-only">Generated password</label>
  <div class="password-display box cluster center">
    <input
      type="text"
      name="generated-password"
      id="generated-password"
      :value="generatedPassword"
      placeholder="P4$5W0rD!"
      disabled
    />
    <div class="button cluster">
      <span v-show="isPasswordCopied">COPIED</span>
      <button @click="handleCopyButtonClick" class="button-copy" type="button">
        <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
          <title>copy password</title>
          <path
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
            fill="#A4FFAF"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.password-display {
  container: password;
  --column-gap: 0;
  --padding-inline: 1rem;
  --horizontal-alignment: space-between;
}

input {
  font-size: var(--font-size-heading-m);
  background-color: transparent;
  border: transparent;
  color: inherit;
  inline-size: 100%;
}
.button {
  --column-gap: 1rem;
}

span {
  color: var(--color-neon-green);
}

button {
  background-color: transparent;
  border: transparent;
  cursor: pointer;
}
.button-copy:hover path {
  fill: var(--color-almost-white);
  background-color: black;
}

svg {
  max-width: none;
}

@container (min-width:540px) {
  .password-display {
    --padding-inline: 2rem;
    --padding: 1.25rem;
  }

  input {
    font-size: var(--font-size-heading-l);
  }
}
</style>
