<template>
  <section class="container">
    <h1 class="usa-heading">Additional Documents</h1>
    <p>If you're working with an attorney or caseworker, you may be encouraged to submit additional documents for verification. You may do so here.</p>
    <form class="usa-form-large" @submit.prevent="saveData">
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
            <input name="addditional-document-1" type="file" accept="image/*, application/pdf" @change="detectFiles1($event.target.files)">
            <input name="addditional-document-1-url" type="hidden" v-model="additionalDoc1Url" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Additional Document #2</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <input name="addditional-document-2" type="file" accept="image/*, application/pdf" @change="detectFiles2($event.target.files)">
            <input name="addditional-document-2-url" type="hidden" v-model="additionalDoc2Url" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Additional Document #3</legend>
        <div>
          <div class="usa-input-grid usa-input-grid-large">
            <input name="addditional-document-3" type="file" accept="image/*, application/pdf" @change="detectFiles3($event.target.files)">
            <input name="addditional-document-3-url" type="hidden" v-model="additionalDoc3Url" />
          </div>
        </div>
      </fieldset>

      <button :disabled='disableSubmit' v-on:click="next()" id="next" class="usa-button-big button-forward">Next &rightarrow;</button>
    </form>
  </section>
</template>

<script>
  import { fillFields, saveFieldsAndNext, storage, uploadFile } from "~/lib/firebase"

  const fields = {
    'additionalDoc1Url': '',
    'additionalDoc2Url': '',
    'additionalDoc3Url': ''
  }

  export default {
    data() {
      const pageOnlyFields = {
        'uploadInProgress': false
      };
      return Object.assign(pageOnlyFields, fields);
    },
    mounted() {
      fillFields(fields, this);
    },
    computed: {
      disableSubmit() {
        return this.uploadInProgress;
      }
    },
    methods: {
      saveData() {
        const nextPage = '/signature'
        saveFieldsAndNext(fields, this, nextPage);
      },
      detectFiles1(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
          uploadFile(fileList[x], 'additionalDoc1', 'additionalDoc1Url', this);
        });
      },
      detectFiles2(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
          uploadFile(fileList[x], 'additionalDoc2', 'additionalDoc2Url', this);
        });
      },
      detectFiles3(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
          uploadFile(fileList[x], 'additionalDoc3', 'additionalDoc3Url', this);
        });
      }
    }
  }
</script>

<style>

</style>
