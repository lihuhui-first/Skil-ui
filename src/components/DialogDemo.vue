<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <div style="position: relative; z-index: 1">
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <div>hi</div>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
    <Button @click="toggle">toggle</Button>
  </div>
  <div
    style="
      position: relative;
      z-index: 2;
      width: 300px;
      height: 300px;
      background: red;
    "
  ></div>
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
