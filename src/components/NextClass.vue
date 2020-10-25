<template>
  <section class="section">
    <div class="container">
      <div class="card is-horizontal mgn">
        <div class="card-content">
          <div class="columns">
            <div class="column is-two-fifths">
              <p class="title">
                <strong>Join my next class!</strong>
              </p>
              <p class="subtitle is-5">
                Our next class is this Wednesday at 8pm on Zoom.
              </p>
              <p class="subtitle is-6">
                See you then!
              </p>
              <a
                href="https://us02web.zoom.us/j/85401207030?pwd=enJhVmZKZzQ5ckt6MWFUd080d2JuUT09"
                class="button is-large is-primary"
                id="learn"
                >Join class</a
              >
            </div>
            <div class="card-image column is-three-fifths">
              <figure class="image">
                <img
                  class="i"
                  src="../assets/ClassAnnouncement.png"
                  alt="Class details"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NextClass",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.mgn
  margin: 2em
</style>
