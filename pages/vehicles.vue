<template>
  <section class="container">
    <form class="usa-form-large" @submit.prevent="saveData">
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
            <label for="vehicleTag1">Tag Number</label>
            <input class="usa-input-medium" id="vehicleTag1" name="vehicleTag1" type="text" v-model="vehicleTag1">
          </div>
        </div>

        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <p>Upload a picture or scanned copy of the vehicle's registration.</p>
            <input accept="image/*, application/pdf" @change="detectFiles1($event.target.files)" name="vehicleReg1" type="file" v-validate="vehicleTag1.trim() !== '' ? 'required' : ''">
            <input name="vehicleReg1Url" type="hidden" v-model="vehicleReg1Url" />
            <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('vehicleReg1')">Uploaded file required.</span>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Registered Vehicle #2</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-small">
            <label for="vehicleTag2">Tag Number</label>
            <input class="usa-input-medium" id="vehicleTag2" name="vehicleTag2" type="text" v-model="vehicleTag2">
          </div>
        </div>

        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <p>Upload a picture or scanned copy of the vehicle's registration.</p>
            <input accept="image/*, application/pdf" @change="detectFiles2($event.target.files)" name="vehicleReg2" type="file" v-validate="vehicleTag2.trim() !== '' ? 'required' : ''">
            <input name="vehicleReg2Url" type="hidden" v-model="vehicleReg2Url" />
            <span class="usa-input-error-message" id="input-error-message" role="alert" v-show="errors.has('vehicleReg2')">Uploaded file required.</span>
          </div>
        </div>
      </fieldset>

      <button id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
    </form>
  </section>
</template>

<script>
  import { fillFields, saveFieldsAndNext, storage, uploadFile } from "~/lib/firebase"

  const fields = {
    'vehicleTag1': '',
    'vehicleReg1Url': '',
    'vehicleTag2': '',
    'vehicleReg2Url': ''
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
        const nextPage = '/documents'
        saveFieldsAndNext(fields, this, nextPage);
      },
      detectFiles1(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
          uploadFile(fileList[x], 'vehicleReg1', 'vehicleReg1Url', this);
        });
      },
      detectFiles2(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
          uploadFile(fileList[x], 'vehicleReg2', 'vehicleReg2Url', this);
        });
      }
    }
  }
</script>

<style>

</style>
