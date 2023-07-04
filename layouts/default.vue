<template>
  <div>
    <div class="AppCont">
      <section class="Routes">
        <transition name="slide-fade" mode="out-in">
          <slot />
        </transition>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { $General } from "@/utils";

export default {
  setup() {
    // const { $aos } = useNuxtApp();

    onMounted(() => {
      $General.insertLinks();
      // $aos()
    });

    // onMounted(() => );

    // onUnmounted(() => {
    // });

    return {};
  },
};
</script>

<style lang="scss">
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.AppCont {
  display: table;
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  & > .Routes {
    padding-bottom: 50px;
  }
}
</style>
