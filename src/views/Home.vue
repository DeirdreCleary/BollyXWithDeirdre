<template>
  <div class="home">
    <Hero />
    <Description />
    <Official />
    <Spotify />
    <Faq />
  </div>
</template>

<script>
import Spotify from "../components/Spotify";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Faq from "../components/Faq";
import Official from "../components/Official";

export default {
  name: "home",
  components: { Spotify, Hero, Description, Faq, Official },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
</style>
