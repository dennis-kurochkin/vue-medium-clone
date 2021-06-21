<template>
  <v-app>
    <TheHeader />
    <v-main class="grey lighten-4">
      <v-container>
        <v-row>
          <v-col>
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
                  Login
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
                {{ field }}:
                <span
                  v-for="(error, errorIndex) in fieldErrors"
                  :key="errorIndex"
                >{{ error }}{{ errorIndex + 1 !== fieldErrors.length ? ', ' : '' }}</span>
              </v-alert>
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  computed: {
    ...mapState('auth', ['errors']),
  },
};
</script>
