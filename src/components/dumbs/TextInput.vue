<template>
  <div
    class="text-input"
    :class="{ focus: isFocus }"
    @click="focusInput"
    @focus="focusInput"
  >
    <label v-if="label" class="text-input__label">{{ label }}</label>
    <input
      :value="value"
      v-on="inputListeners"
      v-bind="$attrs"
      @focus="isFocus = true"
      @blur="isFocus = false"
      ref="input"
      class="text-input__input"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  inheritAttrs: false,
  props: {
    value: { type: [String, Number] },
    label: { type: String },
  },
  data() {
    return {
      isFocus: false,
    };
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
      this.isFocus = true;
    },
  },
  computed: {
    inputListeners() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit("input", event.target.value);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/exports.scss";
@import "~vuetify/src/styles/styles.sass";

.text-input {
  padding: 0.5rem 1rem;
  border: 1px solid $gray-l;
  border-radius: $border-radius-root;
  display: flex;
  flex-direction: column;
  cursor: text;
  transition: all 0.3s;

  &__label {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 1rem;
    color: $gray;
  }

  &__input {
    height: 24px;
  }

  &.focus {
    border-color: $gray;
  }

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
}
</style>
