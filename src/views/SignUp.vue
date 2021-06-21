<template>
  <v-form
    class="px-8 pt-4 pb-6"
    @submit.prevent="handleSubmit"
  >
    <v-text-field
      v-model="username"
      label="Username"
      required
    />
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
      large
    >
      Sign In
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('auth/register', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
