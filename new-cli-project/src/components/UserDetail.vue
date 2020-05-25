<template>
  <div>
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <ul>
      <li>
        <span>이름:</span>
        <span class="align-end">{{name}}</span>
      </li>
      <li>
        <span>주소 :</span>
        <span>{{ address }}</span>
      </li>
      <li>
        <span>전화번호 :</span>
        <span>{{ phone }}</span>
      </li>
      <li>
        <span>반려견 유무 :</span>
        <span>{{ hasDogKr }}</span>
      </li>
      <li>
        <span>수정 일자</span>
        <span>{{ getDateAndTime(editedDate) }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { eventBus } from "../main";
import { dateFormat } from "../mixins/dateFormat";

export default {
  name: "UserDetail",
  data() {
    return {
      editedDate: null
    };
  },
  props: ["name", "address", "phone", "hasDog"],
  computed: {
    hasDogKr() {
      return this.hasDog === true ? "있음" : "없음";
    }
  },
  created() {
    eventBus.$on("userWasEdited", time => {
      this.editedDate = time;
    });
  },
  methods: {},
  mixins: [dateFormat]
};
</script>