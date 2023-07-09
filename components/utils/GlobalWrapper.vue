<template>
  <transition name="slide-fade" mode="out-in">
    <div id="GBLMWrapper">
      <!-- At The very Top -->
      <section v-if="header" class="HeaderGBL bg-img-masked br1 noselect">
        <h2 class="Title">
          <slot name="Title"></slot>
        </h2>
        <section v-if="subText" class="SubText flex j-c-center">
          <div class="xs12 sm11 md6">
            <slot name="SubText"></slot>
          </div>
        </section>
      </section>

      <div class="InnerWrapper">
        <!-- Main Container (START) -->
        <article :class="rightPane ? 'xs12 md8' : 'xs12'" class="mb-5">
          <!-- Main Container Header-->
          <section v-if="subHead" class="SubHeadGBL">
            <slot name="subHead"></slot>
          </section>

          <!-- Main Container Body-->
          <slot name="WrapperBody"></slot>
        </article>
        <!-- Main Container (END) -->

        <!-- Right Side Pane -->
        <article v-if="rightPane" class="RightPane xs12 md3">
          <slot name="RightPane"></slot>
        </article>
      </div>

      <!-- At The very Bottom -->
      <section v-if="footNote" class="FootNoteGBL">
        <div
          data-aos="zoom-in"
          v-if="useDefaultFootNote"
          class="flex j-c-center"
        >
          <div class="xs12 md7 lg6">
            Thank you. If you would like to discuss a potential job or project,
            I would be delighted to hear from you.
            <NuxtLink to="/contact"> Contact me</NuxtLink>, or use the button
            below
            <div class="flex j-c-center my-5">
              <Button
                @clicked="$router.push({ path: '/create' })"
                type="cta"
                size="large"
              >
                HIRE ME
              </Button>
            </div>
          </div>
        </div>
        <slot v-else name="FootNote"></slot>
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  props: {
    header: { required: false, type: Boolean, default: true },
    subText: { required: false, type: Boolean, default: true },
    footNote: { required: false, type: Boolean, default: false },
    useDefaultFootNote: { required: false, type: Boolean, default: false },
    subHead: { required: false, type: Boolean, default: false },
    rightPane: { required: false, type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.HeaderGBL {
  position: relative;
  min-height: 200px;
  width: 100%;
  padding-top: 60px;
  margin-bottom: 50px;
  background-color: $sec-color;
  background-image: url("/defaults/pgs/orbrift_web_design_and_development.jpg");
  background-attachment: fixed;
  background-position: center;
  & .Title {
    position: relative;
    text-align: center;
    font-size: 30px;
    margin-bottom: 35px;
    // color: $light-color;
    color: rgba(204, 235, 238, 0.7);
    &::after {
      content: "";
      height: 3px;
      width: 70px;
      position: absolute;
      bottom: -2px;
      left: calc(50% - 35px);
      background-color: $pri-color;
      @media (prefers-color-scheme: dark) {
        background-color: $pri-color;
      }
    }
  }
  & .SubText {
    text-align: center;
    font-size: 24px;
    width: 100%;
    color: $pri-color;
    background-color: $sec-color-trans-3;
    padding: 15px;
  }
}
.FootNoteGBL {
  font-size: 16px;
  text-align: center;
  color: $pri-color;
  background-color: $sec-color-trans;
  padding: 15px;
  & a {
    color: lightblue;
  }
}
.InnerWrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
.SubHeadGBL {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: $sec-color;
  color: white;
  border-radius: 20px 20px 4px 4px;
  padding: 8px 12px 8px 12px;
  margin-bottom: 8px;
}
.RightPane {
  margin-left: 16px;
}

@include xs-only {
  .HeaderGBL {
    font-size: 16px !important;
  }
  .SubHeadGBL {
    justify-content: space-around;
    & > *:not(:only-child),
    & > *:not(:last-child) {
      margin-bottom: 4px;
    }
  }
  .RightPane {
    margin-left: 0;
  }
}

@keyframes xpand {
  0% {
    width: 70%;
    height: 70%;
    opacity: 0.7;
  }
  100% {
    width: 150%;
    height: 150%;
    opacity: 0;
  }
}
</style>
