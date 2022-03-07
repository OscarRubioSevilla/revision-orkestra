<template>
    <navigation />
    <div>
      <router-view></router-view>
    </div>
</template>

<script>

import Navigation from './components/layout/Navigation.vue';

export default {
  components:  {Navigation},
  setup() {
  }
}
</script>