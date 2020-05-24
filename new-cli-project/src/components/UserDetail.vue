<template>
  <div>
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ prop_name }}</p>
  </div>
</template>
<script>
export default {
  name: "UserDetail",
  data() {
    return {};
  },
  props: ["prop_name"]
};
</script>