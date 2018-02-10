<template>
  <section class="container">
    <form class="usa-form-large" v-on:submit.prevent="onSubmit">
      <fieldset>
        <legend>Home Owner</legend>
        <p></p>
        <label for="owner-first-name">First Name</label>
        <input id="owner-first-name" name="owner-first-name" type="text" required="" aria-required="true">

        <label for="owner-middle-name" class="usa-input-optional">Middle Name</label>
        <input id="owner-middle-name" name="owner-middle-name" type="text">

        <label for="owner-last-name">Last Name</label>
        <input id="owner-last-name" name="owner-last-name" type="text" required="" aria-required="true">

        <label for="owner-email">Email Address</label>
        <input id="owner-email" name="owner-email" type="text" required="" aria-required="true">

        <label for="owner-phone">Phone Number</label>
        <input id="owner-phone" name="owner-phone" type="text" required="" aria-required="true">

        <label for="owner-ssn">Last 4 Digits of Social Security Number</label>
        <input class="usa-input-medium" id="owner-ssn" name="owner-ssn" type="text" required="" aria-required="true">

          <label for="owner-state">Legal State of Residence</label>
          <select id="owner-state" name="owner-state">
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

        <p>Upload a picture or scanned copy of a state-issued identification card or driver's license.</p>
        <input name="owner-id-upload" type="file">
        <button v-on:click="next()" id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
module.exports = {
  methods: {
    next(location) {
      window.location.href = '/spouse';
    }
  }
}
</script>

<style>

</style>