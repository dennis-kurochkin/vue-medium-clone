<template>
  <BaseAuthContainer>
    <v-form
      class="px-8 pt-4 pb-6"
      @submit.prevent="handleSubmit"
    >
      <v-text-field
        v-model="email"
        :disabled="isSubmitting"
        type="email"
        label="E-mail"
        required
      />
      <v-text-field
        v-model="password"
        :disabled="isSubmitting"
        type="password"
        label="Password"
        required
      />
      <v-btn
        :disabled="isSubmitting"
        block
        depressed
        color="primary"
        type="submit"
        large
      >
        Log In
      </v-btn>
    </v-form>
  </BaseAuthContainer>
</template>

<script>
import { mapState } from 'vuex';
import BaseAuthContainer from '@/components/BaseAuthContainer';

export default {
  name: 'SignIn',
  components: { BaseAuthContainer },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState('auth', ['isSubmitting', 'user', 'errors']),
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      }).then(() => {
        if (this.user) {
          this.$router.push({ name: 'home' });
        }
      });
    },
  },
  beforeRouteLeave(to, _from, next) {
    if (to.name === 'sign-up' && this.errors) {
      this.$store.commit('auth/clearErrors');
    }

    next();
  },
};
</script>
