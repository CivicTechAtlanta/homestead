<template>
  <section class="container">
    <form class="usa-form-large" v-on:submit.prevent="onSubmit">
      <fieldset>
        <legend>Mailing Address</legend>
        <div class="usa-alert usa-alert-info" >
          <div class="usa-alert-body">
            <h3 class="usa-alert-heading">Optional</h3>
            <p class="usa-alert-text">Only fill in if different from property address.</p>
          </div>
        </div>
        <label for="mailing-address-1">Street address 1</label>
        <input id="mailing-address-1" name="mailing-address-1" type="text">

        <label for="mailing-address-2" class="usa-input-optional">Street address 2</label>
        <input id="mailing-address-2" name="mailing-address-2" type="text">

        <div>
          <div class="usa-input-grid usa-input-grid-medium">
            <label for="mailing-city">City</label>
            <input id="mailing-city" name="mailing-city" type="text">
          </div>

          <div class="usa-input-grid usa-input-grid-small">
            <label for="mailing-state">State</label>
            <select id="mailing-state" name="mailing-state">
              <option value>- Select -</option>
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
          </div>
        </div>

        <label for="mailing-zip">ZIP Code</label>
        <input class="usa-input-medium" id="mailing-zip" name="mailing-zip" type="text" pattern="[\d]{5}(-[\d]{4})?">


        <button v-on:click="next()" id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
module.exports = {
  methods: {
    next(location) {
      window.location.href = '/vehicles';
    }
  }
}
</script>

<style>

</style>
