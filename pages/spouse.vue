<template>
  <section class="container">
    <form class="usa-form-large" @submit.prevent="saveData">
      <fieldset>
        <legend>Spouse</legend>

        <p>Are you (the property owner) married?</p>
        <ul class="usa-unstyled-list">
          <li>
            <input id="isMarriedYes" type="radio" name="isMarried" v-model="isMarried" value="yes" v-validate="'required'">
            <label for="isMarriedYes">Yes</label>
          </li>
          <li>
            <input id="isMarriedNo" type="radio" name="isMarried" v-model="isMarried" value="no">
            <label for="isMarriedNo">No</label>
          </li>
        </ul>
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('isMarried')">Answer yes or no.</span>

        <p class="description">If yes, fill in this section.</p>

        <label for="spouseFirstName">Spouse's First Name</label>
        <input id="spouseFirstName" name="spouseFirstName" v-model="spouseFirstName" type="text" v-validate="isMarried === 'yes' ? 'required' : ''">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('spouseFirstName')">First Name is required.</span>

        <label for="spouse-middle-name" class="usa-input-optional">Spouse's Middle Name</label>
        <input id="spouse-middle-name" name="spouse-middle-name" type="text" v-model="spouseMiddleName">

        <label for="spouseLastName">Spouse's Last Name</label>
        <input id="spouseLastName" name="spouseLastName" v-model="spouseLastName" type="text" v-validate="isMarried === 'yes' ? 'required' : ''">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('spouseFirstName')">Last Name is required.</span>

        <fieldset>
          <legend class="sublegend">Spouse's Date of Birth</legend>
          <span class="usa-form-hint" id="dobHint">For example: 12 12 1972</span>
          <div class="usa-date-of-birth">
            <div class="usa-form-group usa-form-group-month">
              <label for="spouseBirthMonth">Month</label>
              <input aria-describedby="dobHint" class="usa-input-inline" id="spouseBirthMonth" name="spouseBirthMonth" type="number" v-model="spouseBirthMonth" v-validate="isMarried === 'yes' ? 'required|between:1,12' : ''">
            </div>
            <div class="usa-form-group usa-form-group-day">
              <label for="spouseBirthDay">Day</label>
              <input aria-describedby="dobHint" class="usa-input-inline" id="spouseBirthDay" name="spouseBirthDay" type="number" v-model="spouseBirthDay" v-validate="isMarried === 'yes' ? 'required|between:1,31' : ''">
            </div>
            <div class="usa-form-group usa-form-group-year">
              <label for="spouseBirthYear">Year</label>
              <input class="usa-input-inline" aria-describedby="dobHint" id="spouseBirthYear" name="spouseBirthYear" type="number" v-model="spouseBirthYear" v-validate="isMarried === 'yes' ? 'required|between:1890,2010' : ''">
            </div>
          </div>
        </fieldset>
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('spouseBirthMonth') || errors.has('spouseBirthDay') || errors.has('spouseBirthYear')">Valid Date of Birth is required.</span>


        <label for="spouseSsn">Spouse's Last 4 Digits of Social Security Number</label>
        <input class="usa-input-medium" data-vv-delay="1000" id="spouseSsn" name="spouseSsn" type="text" v-model="spouseSsn" v-validate="isMarried === 'yes' ? 'required|digits:4' : ''">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('spouseSsn')">Four digits required.</span>

        <button id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
  import { fillFields, saveFieldsAndNext } from "~/lib/firebase"

  const fields = {
    'isMarried': '',
    'spouseFirstName': '',
    'spouseMiddleName': '',
    'spouseLastName': '',
    'spouseBirthDay': '',
    'spouseBirthMonth': '',
    'spouseBirthYear': '',
    'spouseSsn': ''
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
        const nextPage = '/mailing'
        saveFieldsAndNext(fields, this, nextPage);
      }
    }
  }
</script>

<style>
  legend.sublegend {
    font-size: 1.8rem;
    font-weight: normal;
  }
</style>
