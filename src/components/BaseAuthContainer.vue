<template>
  <v-sheet
    rounded
    class="mx-auto"
    max-width="456px"
  >
    <v-tabs
      centered
      grow
    >
      <v-tab
        :to="{ name: 'sign-in' }"
        replace
      >
        Log in
      </v-tab>
      <v-tab
        :to="{ name: 'sign-up' }"
        replace
      >
        Register
      </v-tab>
    </v-tabs>
    <v-alert
      v-for="(fieldErrors, field, index) in errors"
      :key="index"
      dense
      outlined
      type="error"
      class="ma-4 mb-0"
    >
      <strong>{{ field }}:</strong>
      <span
        v-for="(error, errorIndex) in fieldErrors"
        :key="errorIndex"
      >
        {{ error }}{{ errorIndex + 1 !== fieldErrors.length ? ', ' : '' }}
      </span>
    </v-alert>
    <slot />
  </v-sheet>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BaseAuthContainer',
  computed: {
    ...mapState('auth', ['errors']),
  },
};
</script>
