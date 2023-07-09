<template>
  <div class="GenBtnCont" @click="handleClick">
    <div class="GenBtnWrapper" :class="wrapperClasses">
      <button ref="GenBtn" :class="classes" class="GenBtn">
        <span>
          <span
            v-if="icon && iconPos !== 'right'"
            :class="icon"
            class="BtnIcon mr-3"
          >
          </span>
          <slot></slot>
          <span
            v-if="icon && iconPos === 'right'"
            :class="icon"
            class="BtnIcon ml-3"
          >
          </span>
        </span>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: "basic",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    iconPos: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  setup(props, { emit }) {
    const classes = computed(() => ({
      Large: props.size === "large",
      Medium: props.size === "medium",
      Small: props.size === "small",
      Xsmall: props.size === "xsmall",
    }));
    const wrapperClasses = computed(() => ({
      CtaBtn: props.type === "cta",
      BasicBtn: props.type === "basic",
      ActionBtn: props.type === "action",
      loading: props.loading,
    }));
    const icon = computed(() =>
      props.loading ? "icon-spin6 gen-btn-animate-spin" : props.icon
    );
    const iconPos = computed(() => props.iconPos);
    // const loading = compruted(() =>
    //   props.loading
    // );

    const handleClick = () => {
      if (!props.loading) {
        emit("clicked");
      }
    };

    return {
      classes,
      wrapperClasses,
      handleClick,

      icon,
      iconPos,
    };
  },
};
</script>
<style lang="scss">
.GenBtnCont {
  padding: 3px;
  border-radius: 3px;
  background-color: $sec-color;
}
.GenBtnWrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $pri-color;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  transition: 0.2s;
  z-index: 0;
  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: $sec-color;
    transition: 0.6s;
    z-index: -1;
  }
  &::after {
    top: -6px;
    bottom: -6px;
    width: 70%;
    // transition:  2s;
  }
  &::before {
    left: -6px;
    right: -6px;
    height: 60%;
  }
  &:not(.loading):hover {
    opacity: 0.9;
  }
  &:not(.loading):active {
    opacity: 0.77;
    box-shadow: none !important;
  }
  &.ActionBtn.loading::after {
    // width: 50%;
    animation: loading-a 0.4s alternate infinite linear;
  }
  &.ActionBtn.loading::before {
    // height: 50%;
    animation: loading-b 0.4s alternate infinite linear;
  }
  &.CtaBtn::after {
    animation: cta-a 0.5s alternate infinite linear;
  }
  &.CtaBtn::before {
    animation: cta-b 0.5s alternate infinite linear;
  }
  &.CtaBtn:hover::after {
    animation: cta-a-hover 0.2s alternate infinite linear;
  }
  &.CtaBtn:hover::before {
    animation: cta-b-hover 0.2s alternate infinite linear;
  }
  &.BasicBtn:hover::after {
    width: 30%;
  }
  &.BasicBtn:hover::before {
    height: 20%;
  }
}
.GenBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 7px 12px;
  cursor: pointer;
  outline: none;
  color: $pri-color;
  font-weight: bold;
  border-radius: 3px;
  /* shadow-3 */
  background-color: $sec-color;
  margin: 2px;
  transition: 0.1s;
  &.Xsmall {
    padding: none !important;
  }
  &.Small {
    min-height: 30px;
    min-width: 110px;
  }
  &.Medium {
    min-height: 40px;
    min-width: 120px;
  }
  &.Large {
    min-height: 50px;
    min-width: 130px;
  }
}
.gen-btn-animate-spin {
  animation: spin 1s infinite linear;
  display: inline-block;
}

@keyframes loading-a {
  0% {
    width: 45%;
  }
  100% {
    width: 40%;
  }
}
@keyframes loading-b {
  0% {
    height: 50%;
  }
  100% {
    height: 40%;
  }
}

@keyframes cta-a {
  0% {
    width: 70%;
  }
  100% {
    width: 60%;
  }
}
@keyframes cta-b {
  0% {
    height: 50%;
  }
  100% {
    height: 40%;
  }
}
@keyframes cta-a-hover {
  0% {
    width: 25%;
  }
  100% {
    width: 15%;
  }
}
@keyframes cta-b-hover {
  0% {
    height: 25%;
  }
  100% {
    height: 15%;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}
</style>
