<template>
  <div>
    <h1 class="text-center text-3xl uppercase my-5">Picet</h1>

    <section class="flex justify-center">
      <div class="w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12">
        <div class="">
          <h3 class="text-xl text-slate-700 font-bold pb-3">Description</h3>
          <span v-show="desc_err" class="text-red-500">{{ desc_err }}</span>
          <div
            ref="descInput"
            @input="setDesc"
            class="min-h-[70px] max-h-[100px]"
            contenteditable="true"
            placeholder="Enter your instruction here"
          ></div>
        </div>

        <!-- Send button -->
        <div class="flex j-c-center my-8">
          <Button @clicked="send" size="medium" icon="icon-forward">
            Submit
          </Button>
        </div>
      </div>
    </section>

    <section class="flex justify-center mt-5">
      <div
        class="w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 rounded bg-[#f5f5f5] p-2"
      >
        <div
          class="w-full min-h-[200px] select-none rounded bg-my-sec-color-trans p-2.5"
        >
          <img
            class="max-h-[400px] max-w-full"
            src="/defaults/pgs/software_websites_design_web_apps_development.jpg"
            draggable="false"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { $baseApi } from "@/utils/Axios";
import { $Validator } from "@/addons";

export default {
  name: "Home",

  setup() {
    // const { $myMetaInfo } = useNuxtApp();

    // useSeoMeta($myMetaInfo({}));

    const desc = ref("");
    const desc_err = ref("");

    const setDesc = (e: any) => {
      desc.value = (e.target as HTMLElement).textContent;
      if (desc_err.value) {
        desc_err.value = "";
      }
    };

    const send = () => {
      $baseApi.post("generations", {
        
      });
    };

    return {
      desc_err,
      setDesc,
      send,
    };
  },
};
</script>
<style lang="scss" scoped></style>
