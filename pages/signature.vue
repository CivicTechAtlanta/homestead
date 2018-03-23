<template>
  <section class="container">
    <form class="usa-form-large" @submit.prevent="saveData">
      <fieldset>
        <legend>Sign</legend>
        <p><em>In accordance with the provisions of the state constitution and laws of this state authorizing homestead exemption, I hereby make application for tax exemption on the above property. I, the undersigned, do solemnly swear that the statements made in support of this application are true and correct, that I am the bona fide owner of the property described in this application; that I truly occupied same on January 1 of this year as a legal resident of Fulton County, or the City of Atlanta and the real property above was owned and occupied by me as a permanent residence and homestead. I further swear that this is not a false or fraudulent claim contrary to the laws providing for same and neither I nor my spouse claims any other homestead.</em></p>

        <label for="signature">Type your full name as your signature</label>
        <input class="usa-input" id="signature" name="signature" type="text" v-model="signature" v-validate="'required'">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('signature')">Signature is required.</span>

        <ul class="usa-unstyled-list">
          <li>
            <input id="consent" type="checkbox" name="consent" v-model="consent" value="yes" v-validate="'required'">
            <label for="consent">By checking this box I consent to share the information in this application with Code for Atlanta and Atlanta Legal Aid Society, Inc. This information is for the purpose of applying for the Fulton County Homestead Exemption and will only be used to that end. I understand that my information will not be shared with any other persons, organizations, or interests unless required by law.</label>
            <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('consent')">Consent to share is required to submit this application.</span>
          </li>
          <li>
            <input id="shareEmail" type="checkbox" name="shareEmail" v-model="shareEmail" value="yes">
            <label for="shareEmail">I am working with Atlanta Legal Aid and would like a copy of this application to be shared with Atlanta Legal Aid Society. I understand that copying the application to Atlanta Legal Aid does not establish or guarantee current or future representation.</label>
          </li>
        </ul>

        <button id="next" class="usa-button-big button-forward">Sign and Submit</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
  import { fillFields, saveFieldsAndNext, serverTimestamp } from "~/lib/firebase"

  const fields = {
    'signature': '',
    'consent': '',
    'shareEmail': '',
    'signedAt': serverTimestamp
  }

  export default {
    data() {
      return fields;
    },
    mounted() {
      fillFields(fields, this);
    },
    methods: {
      saveData() {
        const nextPage = '/done'
        saveFieldsAndNext(fields, this, nextPage);
      }
    }
  }
</script>

<style>

</style>
