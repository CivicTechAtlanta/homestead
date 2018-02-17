<template>
  <section class="container">
    <h1 class="usa-heading">Additional Documents</h1>
    <p>If you're working with an attorney or caseworker, you may be encouraged to submit additional documents for verification. You may do so here.</p>
    <form class="usa-form-large" v-on:submit.prevent="onSubmit">
        <div class="usa-alert usa-alert-info" >
          <div class="usa-alert-body">
            <h3 class="usa-alert-heading">Optional</h3>
            <p class="usa-alert-text">You may skip this step if you don't have any additional documents to submit.</p>
          </div>
        </div>

      <fieldset>
        <legend>Additional Document #1</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <input name="addditional-document-1" type="file">
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Additional Document #2</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <input name="addditional-document-2" type="file">
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Additional Document #3</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <input name="addditional-document-3" type="file">
          </div>
        </div>
      </fieldset>

      <button v-on:click="next()" id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
    </form>
  </section>
</template>

<script>
module.exports = {
  methods: {
    next(location) {
      window.location.href = '/signature';
    }
  }
}
</script>

<style>

</style>
