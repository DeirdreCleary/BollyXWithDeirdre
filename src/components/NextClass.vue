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
                Our next class is this Wednesday at 8pm GMT on Zoom.
              </p>
              <p class="subtitle is-6">
                See you then!
              </p>
              <a
                href="https://us02web.zoom.us/j/85401207030?pwd=enJhVmZKZzQ5ckt6MWFUd080d2JuUT09"
                class="button is-large is-primary"
                id="learn"
                target="_blank"
                >Join class</a
              >
              <div>
              <div title="Add Next Class to Calendar" class="addeventatc button">
                Add next class to calendar
                <span class="start">{{ event.start }}</span>
                <span class="end">{{event.end}}</span>
                <span class="date_format">{{event.date_format}}</span>
                <span class="timezone">{{event.timezone}}</span>
                <span class="title">{{event.title}}</span>
                <span class="description">{{event.description}}</span>
              </div>
              </div>
              <div>
              <div title="Add Recurring Class to Calendar" class="addeventatc button">
                Add recurring class to calendar
                <span class="start">{{ event.start }}</span>
                <span class="end">{{event.end}}</span>
                <span class="date_format">{{event.date_format}}</span>
                <span class="timezone">{{event.timezone}}</span>
                <span class="title">{{event.title}}</span>
                <span class="description">{{event.description}}</span>
                <span class="recurring">{{event.recurring}}</span>
              </div>
              </div>
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
  data: function() {
    return {
      event: {
        start: "11/11/2020 08:00 PM",
        end: "11/11/2020 08:30 PM",
        date_format: "DD/MM/YYYY",
        timezone: "Europe/Dublin",
        title: "BollyX With Deirdre",
        description:
          "30 minute Bollywood inspired dance workout!<br /><br />Get the latest details on https://bollyxwithdeirdre.netlify.app/<br /><br />Join Zoom Meeting <br /><br />https://us02web.zoom.us/j/85401207030?pwd=enJhVmZKZzQ5ckt6MWFUd080d2JuUT09 <br /><br />Meeting ID: 854 0120 7030 <br />Passcode: BollyX",
        location:
          "https://us02web.zoom.us/j/85401207030?pwd=enJhVmZKZzQ5ckt6MWFUd080d2JuUT09",
        recurring: "FREQ=WEEKLY;BYDAY=WE"
      }
    };
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
