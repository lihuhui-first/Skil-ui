<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Dialog :visible="x"></Dialog>
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
    return { x, toggle };
  },
};
</script>
