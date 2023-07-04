<template>
  <div>
    <div class="GBLMContainer">
      <TopNav @search="searchOn = !searchOn" />
      <HoverPanel />
      <Process />

      <ClientOnly>
        <Search v-show="searchOn" @searchoff="searchOn = false" />
      </ClientOnly>

      <section class="Routes">
        <transition name="slide-fade" mode="out-in">
          <slot />
        </transition>
      </section>

      <Footer />
      <BottomNav />
    </div>
  </div>
</template>

<script lang="ts">
import { $General } from "@/addons";

import { useNavs } from "@/store";

export default {
  setup() {
    const { $aos } = useNuxtApp();

    const $Navs = useNavs();
    const searchOn = ref(false);

    onMounted(() => {
      $Navs.setContainer(window ? window : document.body);
      $Navs.setScrollEvent();
      $General.insertLinks();
      $General
        .loadScript()
        .then(() => {
          $General.hideCaptchaBadge();
        })
        .catch((e) => {});
    });

    onMounted(() => $aos());

    onUnmounted(() => {
      $Navs.removeScrollEvent();
    });

    return {
      searchOn,
    };
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
.GBLMContainer {
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
