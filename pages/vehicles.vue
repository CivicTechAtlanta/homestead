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
            <label for="vehicle-tag-1">Tag Number</label>
            <input class="usa-input-medium" id="vehicle-tag-1" name="vehicle-tag-1" v-model="vehicleTag1" type="text">
          </div>
        </div>

        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <p>Upload a picture or scanned copy of the vehicle's registration.</p>
            <input name="vehicle-reg-1" type="file" accept="image/*, application/pdf" @change="detectFiles1($event.target.files)">
            <input name="vehicle-reg-1-url" type="hidden" v-model="vehicleReg1Url" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Registered Vehicle #2</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-small">
            <label for="vehicle-tag-2">Tag Number</label>
            <input class="usa-input-medium" id="vehicle-tag-2" name="vehicle-tag-2" v-model="vehicleTag2" type="text">
          </div>
        </div>

        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <p>Upload a picture or scanned copy of the vehicle's registration.</p>
            <input name="vehicle-reg-2" type="file" accept="image/*, application/pdf" @change="detectFiles2($event.target.files)">
            <input name="vehicle-reg-2-url" type="hidden" v-model="vehicleReg2Url" />
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
