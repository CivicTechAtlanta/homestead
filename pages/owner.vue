<template>
  <section class="container">
    <form class="usa-form-large" @submit.prevent="saveData">
      <fieldset>
        <legend>Home Owner</legend>

        <label for="ownerFirstName">First Name</label>
        <input id="ownerFirstName" name="ownerFirstName" type="text" v-model="ownerFirstName" v-validate="'required'">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('ownerFirstName')">First Name is required.</span>

        <label for="ownerMiddleName" class="usa-input-optional">Middle Name</label>
        <input id="ownerMiddleName" name="ownerMiddleName" type="text" v-model="ownerMiddleName">

        <label for="ownerLastName">Last Name</label>
        <input id="ownerLastName" name="ownerLastName" type="text" v-model="ownerLastName" v-validate="'required'">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('ownerLastName')">Last Name is required.</span>

        <label for="ownerEmail">Email Address</label>
        <input data-vv-delay="1000" id="ownerEmail" name="ownerEmail" v-model="ownerEmail" type="text" v-validate="'email'">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('ownerEmail')">Email must be valid.</span>

        <label for="ownerPhone">Phone Number</label>
        <input id="ownerPhone" name="ownerPhone" type="text" v-model="ownerPhone">

        <fieldset>
          <legend class="sublegend">Date of Birth</legend>
          <span class="usa-form-hint" id="dobHint">For example: 12 12 1972</span>
          <div class="usa-date-of-birth">
            <div class="usa-form-group usa-form-group-month">
              <label for="ownerBirthMonth">Month</label>
              <input aria-describedby="dobHint" class="usa-input-inline" id="ownerBirthMonth" name="ownerBirthMonth" type="number" v-model="ownerBirthMonth" v-validate="'required|between:1,12'">
            </div>
            <div class="usa-form-group usa-form-group-day">
              <label for="ownerBirthDay">Day</label>
              <input aria-describedby="dobHint" class="usa-input-inline" id="ownerBirthDay" name="ownerBirthDay" type="number" v-model="ownerBirthDay" v-validate="'required|between:1,31'">
            </div>
            <div class="usa-form-group usa-form-group-year">
              <label for="ownerBirthYear">Year</label>
              <input class="usa-input-inline" aria-describedby="dobHint" id="ownerBirthYear" name="ownerBirthYear" type="number" v-model="ownerBirthYear" v-validate="'required|between:1890,2010'">
            </div>
          </div>
        </fieldset>
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('ownerBirthMonth') || errors.has('ownerBirthDay') || errors.has('ownerBirthYear')">Valid Date of Birth is required.</span>

        <label for="ownerSsn">Last 4 Digits of Social Security Number</label>
        <input data-vv-delay="1000" class="usa-input-medium" id="ownerSsn" maxlength="4" name="ownerSsn" type="text" v-model="ownerSsn" v-validate="'required|digits:4'">
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('ownerSsn')">Four digits required.</span>

        <label for="ownerState">Legal State of Residence</label>
        <select id="ownerState" name="ownerState" v-model="ownerState" v-validate="'required'">
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
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('ownerState')">State must be selected.</span>

        <p>Upload a picture or scanned copy of a state-issued identification card or driver's license.</p>
        <input @change="detectFiles($event.target.files)" name="ownerIdUpload" type="file" accept="image/*, application/pdf" v-validate="'required'">
        <input name="owner-id-url" type="hidden" v-model="ownerIdUrl" />
        <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('ownerIdUpload')">Uploaded file required.</span>

        <button id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
  import { fillFields, saveFieldsAndNext, storage, uploadFile } from "~/lib/firebase"

  const fields = {
    'ownerFirstName': '',
    'ownerMiddleName': '',
    'ownerLastName': '',
    'ownerEmail': '',
    'ownerPhone': '',
    'ownerState': 'GA',
    'ownerBirthDay': '',
    'ownerBirthMonth': '',
    'ownerBirthYear': '',
    'ownerSsn': '',
    'ownerIdUrl': ''
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
        const nextPage = '/spouse'
        saveFieldsAndNext(fields, this, nextPage);
      },
      detectFiles(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
          uploadFile(fileList[x], 'ownerId', 'ownerIdUrl', this);
        });
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
