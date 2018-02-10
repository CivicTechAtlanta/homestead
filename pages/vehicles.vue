<template>
  <section class="container">
    <form class="usa-form-large" v-on:submit.prevent="onSubmit">
        <div class="usa-alert usa-alert-info" >
          <div class="usa-alert-body">
            <h3 class="usa-alert-heading">Optional</h3>
            <p class="usa-alert-text">You may skip this step if you don't own any vehicles.</p>
          </div>
        </div>

      <fieldset>
        <legend>Registered Vehicle #1</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-small">
            <label for="vehicle-tag-1">Tag Number</label>
            <input class="usa-input-medium" id="vehicle-tag-1" name="vehicle-tag-1" type="text">
          </div>
        </div>

        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <p>Upload a picture or scanned copy of the vehicle's registration.</p>
            <input name="vehicle-reg-1" type="file">
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Registered Vehicle #2</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-small">
            <label for="vehicle-tag-2">Tag Number</label>
            <input class="usa-input-medium" id="vehicle-tag-2" name="vehicle-tag-2" type="text">
          </div>
        </div>

        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <p>Upload a picture or scanned copy of the vehicle's registration.</p>
            <input name="vehicle-reg-2" type="file">
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
