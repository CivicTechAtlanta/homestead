<template>
  <section class="container">
    <form class="usa-form-large" @submit.prevent="saveData">
      <fieldset>
        <legend>Spouse</legend>

        <p>Are you (the property owner) married?</p>
        <ul class="usa-unstyled-list">
          <li>
            <input id="married-yes" type="radio" name="married" v-model="isMarried" value="yes">
            <label for="married-yes">Yes</label>
          </li>
          <li>
            <input id="married-no" type="radio"  name="married" v-model="isMarried" value="no">
            <label for="married-no">No</label>
          </li>
        </ul>

        <p class="description">If yes, fill in this section.</p>

        <label for="spouse-first-name">Spouse's First Name</label>
        <input id="spouse-first-name" name="spouse-first-name" v-model="spouseFirstName" type="text">

        <label for="spouse-middle-name" class="usa-input-optional">Spouse's Middle Name</label>
        <input id="spouse-middle-name" name="spouse-middle-name" v-model="spouseMiddleName" type="text">

        <label for="spouse-last-name">Spouse's Last Name</label>
        <input id="spouse-last-name" name="spouse-last-name" v-model="spouseLastName" type="text">

        <label for="spouse-ssn">Spouse's Last 4 Digits of Social Security Number</label>
        <input class="usa-input-medium" id="spouse-ssn" name="spouse-ssn" v-model="spouseSsn" type="text">

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

</style>
