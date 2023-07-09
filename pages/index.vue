<template>
  <div>
    <h1>Picet</h1>

    <div class="Section">
      <span class="Head"></span>
      <span v-show="msg_err" class="Error t-red-1">{{ msg_err }}</span>
      <div
        ref="msgInput"
        @input="setMsg"
        class="TextArea bg-white font-5 br2 p-7 mt-2"
        contenteditable="true"
        placeholder="Type your message"
      ></div>
    </div>

  </div>
</template>
<script lang="ts">
import { $baseApi } from "@/utils/Axios";

export default {
  name: "Home",

  setup() {
    // const { $myMetaInfo } = useNuxtApp();

    // useSeoMeta($myMetaInfo({}));

    return {};
  },
};
</script>
<style lang="scss" scoped></style>
