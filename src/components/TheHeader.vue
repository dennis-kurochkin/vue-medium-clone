<template>
  <v-app-bar
    app
    flat
    color="white"
  >
    <v-container class="fill-height py-0 px-0">
      <v-toolbar-title
        class="mr-auto"
      >
        Medium
      </v-toolbar-title>
      <v-btn
        text
        to="/"
      >
        Home
      </v-btn>
      <v-btn
        text
        :to="{ name: 'sign-in' }"
      >
        Sign in
      </v-btn>
      <v-btn
        text
        to="/sign-up"
      >
        Sign up
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
