<template>
  <div class="home">
    <Hero showLearnMore />
    <div v-for="event in events" :key="event.title">
      <Event
        :webTitle="event.webTitle"
        :meetingTitle="event.meetingTitle"
        :description="event.description"
        :image="event.image"
        :date="event.date"
        :startTime="event.startTime"
        :endTime="event.endTime"
        :recurring="event.recurring"
        :meetingId="event.meetingId"
        :passcode="event.passcode"
        :url="event.url"
      />
    </div>
    <Spotify />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Spotify from "../components/Spotify";
import Event from "../components/Event";
import json from "../json/events.json";

export default {
  name: "home",
  components: { Hero, Spotify, Event },
  data() {
    return {
      events: json
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.i
  max-width: 600px
  max-height: 600px
</style>
