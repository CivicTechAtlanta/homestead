<template>
  <div class="usa-grid main-content">
    <div class="usa-width-one-whole">
      <header class="usa-banner-header">
        <p>This free service is provided by <a href="http://www.codeforatlanta.org" target="_blank">Code for Atlanta</a> and <a href="https://www.atlantalegalaid.org" target="_blank">Atlanta Legal Aid Society</a>.</p>
      </header>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  next(location) {
    window.location.href = `/${location}`;
  }
}
</script>

<style lang="scss">
  body {
    background-color: $color-blue-darkest;
  }

  h1, h2, h3 {
    font-family: "Source Sans Pro";
  }

  h1 {
    margin-top: 20px;
  }

  legend {
    padding-top: 20px;
  }

  fieldset {
    margin-bottom: 30px;
  }

  .main-content {
    max-width: 64rem;
    background-color: white;
  }
  p.description {
    font-style: italic;
  }

  .button-forward {
    float: right;
    margin-right: 0px;
  }

  img.smile-image {
    padding-left: 5px;
  }
</style>

