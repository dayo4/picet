<template>
  <div>
    <h1>Picet</h1>

    <section class="flex justify-center">
    <section class="flex justify-center">
      <div class="Section">
        <h3 class="Head">Description</h3>
        <span v-show="msg_err" class="Error t-red-1">{{ msg_err }}</span>
        <div
          ref="msgInput"
          @input="setMsg"
          class="TextArea bg-white font-5 br2 p-7 mt-2"
          contenteditable="true"
          placeholder="Type your message"
        ></div>
      </div>

      <!-- Send button -->
      <div class="flex j-c-center my-8">
        <Button @clicked="send" type="action" size="medium" icon="icon-forward">
          Send {{ target === "app" ? "Mail" : "" }}
        </Button>
      </div>
    </section>
    </section>
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
