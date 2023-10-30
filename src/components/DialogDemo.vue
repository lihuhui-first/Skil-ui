<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  ></Dialog>
  <Button @click="toggle">toggle</Button>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {};
    const f2 = () => {};
    return { x, toggle, f1, f2 };
  },
};
</script>
