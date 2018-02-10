<template>
  <section class="container">
    <form class="usa-form-large" v-on:submit.prevent="onSubmit">
      <fieldset>
        <legend>Sign</legend>
        <p><em>In accordance with the provisions of the state constitution and laws of this state authorizing homestead exemption, I hereby make application for tax exemption on the above property. I, the undersigned, do solemnly swear that the statements made in support of this application are true and correct, that I am the bona fide owner of the property described in this application; that I truly occupied same on January 1 of this year as a legal resident of Fulton County, or the City of Atlanta and the real property above was owned and occupied by me as a permanent residence and homestead. I further swear that this is not a false or fraudulent claim contrary to the laws providing for same and neither I nor my spouse claims any other homestead.</em></p>

        <label for="signature">Type your full name as your signature</label>
        <input class="usa-input" id="signature" name="signature" type="text">

        <button v-on:click="next()" id="next" class="usa-button-big button-forward">Sign and Submit</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
module.exports = {
  methods: {
    next(location) {
      window.location.href = '/done';
    }
  }
}
</script>

<style>

</style>
