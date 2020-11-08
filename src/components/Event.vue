<template>
  <section class="section">
    <div class="container">
      <div class="card is-horizontal mgn">
        <div class="card-content">
          <div class="columns">
            <div class="column is-two-fifths">
              <p class="title">
                <strong>{{ webTitle }}</strong>
              </p>
              <p class="subtitle is-5">
                {{ description }}
              </p>
              <p class="subtitle is-6">
                See you then!
              </p>
              <a
                href="url"
                class="button is-large is-primary"
                id="learn"
                target="_blank"
                >Join class</a
              >
              <div>
                <div title="Add to Calendar" class="addeventatc button">
                  Add to calendar
                  <span class="start">{{ start }}</span>
                  <span class="end">{{ end }}</span>
                  <span class="date_format">{{ date_format }}</span>
                  <span class="timezone">{{ timezone }}</span>
                  <span class="title">{{ meetingTitle }}</span>
                  <span class="description"
                    >{{ description }} <br /><br />Get the latest details at
                    https://bollyxwithdeirdre.netlify.app/<br /><br />Join Zoom
                    Meeting <br />{{ url }} <br /><br />Meeting ID:
                    {{ meetingId }} <br />Passcode: {{ passcode }}</span
                  >
                  <span class="location">{{ url }}</span>
                </div>
              </div>
              <div v-if="recurring">
                <div
                  title="Add Recurring Class to Calendar"
                  class="addeventatc button"
                >
                  Add recurring class to calendar
                  <span class="start">{{ start }}</span>
                  <span class="end">{{ end }}</span>
                  <span class="date_format">{{ date_format }}</span>
                  <span class="timezone">{{ timezone }}</span>
                  <span class="title">{{ meetingTitle }}</span>
                  <span class="description"
                    >{{ description }} <br /><br />Get the latest details at
                    https://bollyxwithdeirdre.netlify.app/<br /><br />Join Zoom
                    Meeting <br />{{ url }} <br /><br />Meeting ID:
                    {{ meetingId }} <br />Passcode: {{ passcode }}</span
                  >
                  <span class="location">{{ url }}</span>
                  <span class="recurring">{{ recurring }}</span>
                </div>
              </div>
            </div>
            <div class="card-image column is-three-fifths">
              <figure class="image">
                <img
                  class="i"
                  :src="require(`../assets/${image}`)"
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
  name: "Event",
  data: function() {
    return {
      date_format: "DD/MM/YYYY",
      timezone: "Europe/Dublin"
    };
  },
  props: {
    webTitle: String,
    meetingTitle: String,
    description: String,
    image: String,
    start: String,
    end: String,
    url: String,
    meetingId: String,
    passcode: String,
    recurring: String
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://addevent.com/libs/atc/1.6.1/atc.min.js"
    );
    document.head.appendChild(externalScript);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.mgn
  margin: 2em
</style>
