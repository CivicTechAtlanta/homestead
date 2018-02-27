<template>
  <section class="container">
    <form class="usa-form-large" @submit.prevent="saveData">
      <fieldset>
        <legend>Verify Your Homestead Exemption Status </legend>



        <div class="usa-alert usa-alert-info">
          <div class="usa-alert-body">
            <h3 class="usa-alert-heading"></h3>
            <p class="usa-alert-text">
              By law, you (and your spouse, if you have one) can <strong>only claim the homestead exemption on one property</strong>.
              In order to proceed with the application, verify that you do not currently claim a homestead exemption on any other property.
            </p>
          </div>
        </div>

        <ul class="usa-unstyled-list">
          <li>
            <input id="truth" type="checkbox" name="historical-figures-1" value="truth" checked>
            <label for="truth">I do not currently claim a homestead exemption on another property.</label>
          </li>
        </ul>

        <button id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
  import { auth, db, serverTimestamp } from "~/lib/firebase"
  const fields = {
    'verifyStatus': true
  }
  export default {
    data() {
      return fields;
    },
    mounted() {
      auth.signInAnonymously()
        .then( (user) => {
          const userId = user.uid;
          this.$cookie.set('userId', userId);
        });
    },
    methods: {
      saveData() {
        const nextPage = '/parcel'
        const userId = this.$cookie.get('userId');
        let updatedFields = {
          createdAt: serverTimestamp,
          updatedAt: serverTimestamp
        };

        db.collection('applications').doc(userId).set(updatedFields)
          .then( (docRef) => {
            window.location.href = nextPage;
          });
        }
    }
  }
</script>

<style>

</style>
