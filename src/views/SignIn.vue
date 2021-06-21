<template>
  <v-form
    class="px-8 pt-4 pb-6"
    @submit.prevent="handleSubmit"
  >
    <v-text-field
      v-model="email"
      type="email"
      label="E-mail"
      required
    />
    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      required
    />
    <v-btn
      block
      depressed
      color="primary"
      type="submit"
      :disabled="isSubmitting"
      large
    >
      Sign In
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState('auth', ['isSubmitting']),
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
