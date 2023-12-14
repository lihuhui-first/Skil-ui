<demo>
    支持disabled
</demo>
<template>
  <div>
    <Button theme="link" :disabled="true">禁用链接按钮</Button>
    <Button theme="text" :disabled="true">禁用按钮</Button>
    <Button :disabled="true">禁用按钮</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
