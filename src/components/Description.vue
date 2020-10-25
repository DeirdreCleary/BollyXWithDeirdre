<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <p class="title">
            <strong>What is BollyX?</strong>
          </p>
          <p>
            BollyX is a Bollywood-inspired dance-fitness program that combines
            dynamic choreography with the hottest music from around the world.
            Its 50-minute cardio workout cycles between higher and
            lower-intensity dance sequences to get you moving, sweating, and
            smiling. At the very core of a BollyX workout is the inspiration it
            draws from the music and dance of Bollywood, the film industry of
            India. Learn more at
            <a href="https://bollyx.com/">BollyX.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Description"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.pd
  +tablet
    padding: 2em 0
</style>
