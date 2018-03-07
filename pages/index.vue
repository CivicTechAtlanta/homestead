<template>
  <section class="container">
    <div>
      <h1 class="usa-heading">Apply for the Fulton County Homestead Exemption</h1>

      <div class="usa-alert usa-alert-error" role="alert">
        <div class="usa-alert-body"><h3 class="usa-alert-heading">Under Construction</h3>
        <p class="usa-alert-text">This tool is under active development. Visit the <a href="http://fultonassessor.org/exemptions/">Fulton County Assessors site</a> to apply for the Homestead Exemption.</p>
        </div>
      </div>

      <p><img class="smile-image" src="~/assets/couple.jpg" align="right" width="250"/>Fulton County homeowners are entitled to a homestead tax exemption on their home property.</p>

      <p>To apply, you must own your home and it must have been your legal residence as of January 1 of this year. Additionally, you (and your spouse if you have one) may not claim a homestead exemption on any other property.</p>

      <p>Once granted, the exemption is automatically renewed each year as long as you continue to own the home and reside in it.</p>

      <div class="usa-alert usa-alert-warning" >
        <div class="usa-alert-body">
          <h3 class="usa-alert-heading">Claiming a special exemption?</h3>
          <p class="usa-alert-text">Senior citizen exemptions (and all other special exemptions) must be applied for in person at a <a href="http://fultonassessor.org/exemptions/">Fulton County Board of Assessors office</a>.</p>
        </div>
      </div>

      <p>
        <strong>In order to complete this application</strong>, you will need pictures or scanned copies of these documents:
        <ul>
          <li>A state-issued identification card or driver's license.</li>
          <li>A vehicle registration card for every vehicle registered at your home.</li>
        </ul>
        <strong>Please take a moment to gather your documents.</strong> If you're on a phone or tablet, you can take a clear photo of each document.
      </p>

      <p>This application takes less than 10 minutes to fill out.</p>

      <a href="#"><button class="usa-button-big button-forward">Get Started &rightarrow;</button></a>
    </div>
  </section>
</template>

<script>
  import { auth } from "~/lib/firebase"

  export default {
    mounted () {
      auth.signOut();
      this.$cookie.delete('userId');
    }
  }
</script>

<style>

</style>
