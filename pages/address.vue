<template>
  <section class="container">
    <form autocomplete="off" class="usa-form-large" @submit.prevent="saveData">
      <fieldset>
        <legend>Property Address</legend>
        <p class="description">Your home in Fulton County. You must have resided here on January 1 of this year.</p>

        <label for="propertyStreetAddress1">Street Address 1</label>
        <input id="propertyStreetAddress1" name="propertyStreetAddress1" type="text" v-model="propertyStreetAddress1" v-validate="'required'">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('propertyStreetAddress1')">Street Address is required.</span>

        <label for="propertyStreetAddress2" class="usa-input-optional">Street Address 2</label>
        <input id="propertyStreetAddress2" name="propertyStreetAddress2" type="text" v-model="propertyStreetAddress2">

        <div>
          <div class="usa-input-grid usa-input-grid-medium">
            <label for="propertyCity">City</label>
            <input id="propertyCity" name="propertyCity" type="text" v-model="propertyCity" v-validate="'required'">
            <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('propertyCity')">City is required.</span>
          </div>

          <div class="usa-input-grid usa-input-grid-small">
            <label for="propertyState">State</label>
            <select id="propertyState" name="propertyState" v-model="propertyState" v-validate="'required'">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA" selected="selected">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
              <option value="AA">AA - Armed Forces Americas</option>
              <option value="AE">AE - Armed Forces Africa</option>
              <option value="AE">AE - Armed Forces Canada</option>
              <option value="AE">AE - Armed Forces Europe</option>
              <option value="AE">AE - Armed Forces Middle East</option>
              <option value="AP">AP - Armed Forces Pacific</option>
            </select>
            <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('propertyState')">State is required.</span>
          </div>
        </div>

        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <label for="propertyZip">ZIP Code</label>
            <input class="usa-input-medium" id="propertyZip" name="propertyZip" type="text" v-model="propertyZip" v-validate="'required'">
            <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('propertyZip')">ZIP Code is required.</span>
          </div>
        </div>

        <button id="next" class="usa-button-big button-forward" type="submit">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
  import { fillFields, saveFieldsAndNext } from "~/lib/firebase"

  const fields = {
    'propertyStreetAddress1': '',
    'propertyStreetAddress2': '',
    'propertyCity': '',
    'propertyState': 'GA',
    'propertyZip': ''
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
        const nextPage = '/owner'
        saveFieldsAndNext(fields, this, nextPage);
      }
    }
  }
</script>

<style>

</style>
