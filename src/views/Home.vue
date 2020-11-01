<template>
  <div class="home">
    <Hero :showLearnMore="true" />
    <NextClass />
    <Spotify />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import NextClass from "../components/NextClass";
import Spotify from "../components/Spotify";

export default {
  name: "home",
  components: { Hero, Spotify, NextClass }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.i
  max-width: 600px
  max-height: 600px
</style>
