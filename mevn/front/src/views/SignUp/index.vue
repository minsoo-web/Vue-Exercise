<template>
  <div class="mt-4">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Your Password:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Re Enter Your Password:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          type="password"
          v-model="form.re_password"
          required
          placeholder="Enter Password Again"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">SignUp</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        re_password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style></style>
