<template>
  <div>
    <section class="SectHead">
      <slot name="SectHead"></slot>
    </section>
    <section class="SectBody">
      <slot name="SectBody"></slot>
    </section>
  </div>
</template>

<script lang="ts">

export default {};
</script>

<style lang="scss" scoped>
.SectHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: $pri-color;
  border-radius: 4px;
  color: $sec-color;
  font-size: 16px;//
  letter-spacing: 0.5px;
  font-weight: bold;
  padding: 8px 12px 8px 16px;
  margin-bottom: 8px;
}

@include xs-only {
  .SectHead {
    justify-content: space-around;
    padding: 8px 5px 8px 5px;
    & > *:not(:only-child),
    & > *:not(:last-child) {
      margin-bottom: 4px;
    }
  }
}
</style>
