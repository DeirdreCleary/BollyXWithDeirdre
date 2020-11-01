<template>
  <section class="section">
    <div class="container">
      <form
        name="contact"
        @submit="checkForm"
        @submit.prevent="handleSubmit"
        novalidate="true"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <p hidden class="is-hidden">
          <label
            >Don’t fill this out if you're human: <input name="bot-field"
          /></label>
        </p>
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="name"
              class="input"
              type="text"
              placeholder="Name"
              v-model="form.name"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </div>
          <p class="help is-danger" v-if="!isNamePopulated">
            Uh oh! Looks like you forgot to include your name. Please enter it
            above!
          </p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="email"
              class="input"
              v-model="form.email"
              type="email"
              placeholder="Email"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <p class="help is-danger" v-if="!isEmailPopulated">
            Please include your email or I won't know how to get back to you!
          </p>
          <p class="help is-danger" v-if="!isValidEmail">
            Oops! Looks like there's a problem with your email format. Double
            check it please!
          </p>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              name="message"
              class="textarea"
              v-model="form.message"
              placeholder="Message"
            />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Description",
  data: function() {
    return {
      form: {
        name: null,
        email: null,
        message: null,
      },
      isNamePopulated: true,
      isEmailPopulated: true,
      isValidEmail: true,
    };
  },
  methods: {
    checkForm: function(e) {
      this.isNamePopulated = true;
      this.isEmailPopulated = true;
      this.isValidEmail = true;

      if (!this.name) {
        this.isNamePopulated = false;
      }

      if (!this.email) {
        this.isEmailPopulated = false;
      } else if (!this.validEmail(this.email)) {
        this.isValidEmail = false;
      }

      if (!this.hasError()) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    hasError: function() {
      return (
        !this.isNamePopulated || !this.isEmailPopulated || !this.isValidEmail
      );
    },
    handleSubmit: function() {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "applucation/x-www-urlencoded",
        },
        body: this.encode({ "form-name": "contact", ...this.form }),
      })
        .then(() => console.log("Successfully sent"))
        .catch((e) => console.error(e));
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.mgn
  margin: 2em
</style>
