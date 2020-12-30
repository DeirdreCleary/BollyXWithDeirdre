<template>
  <section class="section">
    <div class="container">
      <div class="card is-horizontal mgn">
        <div class="card-content">
          <div class="columns">
            <div class="column is-half">
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
                :href="url"
                class="button is-large is-primary"
                v-bind:class="{ disabled: !isInProgress }"
                id="learn"
                target="_blank"
                :disabled="isInProgress ? null : 'disabled'"
                >Join Zoom class</a
              >
              <div
                v-if="!isInProgress"
                class="has-text-weight-light is-italic is-size-7"
              >
                Link available an hour before the class
              </div>
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
                    https://www.dancewithdeirdre.com/<br /><br />Join Zoom
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
                    https://www.dancewithdeirdre.com/<br /><br />Join Zoom
                    Meeting <br />{{ url }} <br /><br />Meeting ID:
                    {{ meetingId }} <br />Passcode: {{ passcode }}</span
                  >
                  <span class="location">{{ url }}</span>
                  <span class="recurring">{{ recurring }}</span>
                </div>
              </div>
            </div>
            <div class="card-image column is-half">
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
import moment from "moment";

export default {
  name: "Event",
  data: function() {
    return {
      date_format: "DD/MM/YYYY",
      timezone: "Europe/Dublin",
      isInProgress: false
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

    this.isInProgress = this.checkIfIsInProgress();
  },
  methods: {
    getDayOfWeek: function(recurring) {
      var dayCode = recurring.substring(recurring.indexOf("BYDAY=") + 6);
      switch (dayCode) {
        case "MO":
          return 1;
        case "TU":
          return 2;
        case "WE":
          return 3;
        case "TH":
          return 4;
        case "FR":
          return 5;
        case "SA":
          return 6;
        case "SU":
          return 0;
      }
    },
    checkIfIsInProgress: function() {
      var current = moment();
      
      if (this.recurring) {
        var dayOfWeek = this.getDayOfWeek(this.recurring);
        if (!current.isSame(dayOfWeek, "d")) {
          return false;
        }
        var startTime = moment(
          this.start.substring(this.start.indexOf(" ") + 1),
          "HH:mm a"
        ).subtract(1, "h");
        var endTime = moment(
          this.end.substring(this.end.indexOf(" ") + 1),
          "HH:mm a"
        );
        return current.isBetween(startTime, endTime);
      } else {
        var start = moment(this.start, "DD-MM-YYYY HH:mm a").subtract(1, "h");
        var end = moment(this.end, "DD-MM-YYYY HH:mm a");
        return current.isBetween(start, end);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
a.disabled
  pointer-events: none
</style>
