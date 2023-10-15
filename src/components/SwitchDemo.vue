<template>
  <div>
    <Switch :value="y" @update:value="y = $event" />
  </div>
</template>
<script>
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const y = ref(true);
    return { y };
  },
};
</script>
