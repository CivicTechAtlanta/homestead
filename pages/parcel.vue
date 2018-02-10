<template>
  <section class="container">
    <form class="usa-form-large" v-on:submit.prevent="onSubmit">
      <fieldset>
        <legend>Find Your Parcel Number</legend>
        <p>Your home's parcel number is set by Fulton County.</p>
        <div class="usa-alert usa-alert-info" >
          <div class="usa-alert-body">
            <h3 class="usa-alert-heading">There are three ways to find your parcel number.</h3>
            <p class="usa-alert-text">
              <ul>
                <li>Use <a href="http://qpublic9.qpublic.net/ga_search_dw.php?county=ga_fulton" target="_blank">Fulton County's official search tool</a>.</li>
                <li>It's on your Annual Notice of Assessment.</li>
                <li>It's on your property tax bill.</li>
              </ul>
            </p>
          </div>
        </div>
        <label for="parcel-number">Parcel Number</label>
        <input id="parcel-number" name="parcel-number" type="text">

        <button v-on:click="next()" id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
module.exports = {
  methods: {
    next(location) {
      window.location.href = '/address';
    }
  }
}
</script>

<style>

</style>