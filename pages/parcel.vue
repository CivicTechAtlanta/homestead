<template>
  <section class="container">
    <form class="usa-form-large" @submit.prevent="saveData">
      <fieldset>
        <legend>Find Your Parcel Number</legend>
        <p>Your home's parcel number is set by Fulton County and is usually 14 digits long.</p>

        <div class="usa-alert usa-alert-info" >
          <div class="usa-alert-body">
            <h3 class="usa-alert-heading">There are three ways to find your parcel number.</h3>
            <p class="usa-alert-text">
              <ul>
                <li>Use <a href="http://qpublic9.qpublic.net/ga_search_dw.php?county=ga_fulton" target="_blank">Fulton County's official search tool</a>. <img src="~/assets/parcel-id-example.png" /></li>
                <li>It's on your Annual Notice of Assessment.</li>
                <li>It's on your property tax bill.</li>
              </ul>
            </p>
          </div>
        </div>
        <label for="parcel-number">Parcel Number</label>
        <input id="parcel-number" name="parcel-number" type="text" v-model="parcelNumber">

        <button id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
  import { fillFields, saveFieldsAndNext } from "~/lib/firebase"
  const fields = { 'parcelNumber': '' };
  export default {
    data() {
      return fields;
    },
    mounted() {
      fillFields(fields, this);
    },
    methods: {
      saveData() {
        const nextPage = '/address'
        saveFieldsAndNext(fields, this, nextPage);
      }
    }
  }
</script>

<style>

</style>
