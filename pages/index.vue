<template>
  <div></div>
</template>
<script lang="ts">
export default {
  name: "Home",

  setup() {
    // const { $myMetaInfo } = useNuxtApp();

    // useSeoMeta($myMetaInfo({}));

    return {};
  },
};
</script>
<style lang="scss" scoped>
.SubText {
  text-align: center;
  font-size: 24px;
  color: $pri-color;
  background-color: $sec-color-trans-1;
  padding: 15px;
  margin-bottom: 40px;
}

.SectionSubHead {
  position: relative;
  color: $blue-grey;
  text-align: center;
  &::after {
    content: "";
    height: 3px;
    width: 70px;
    position: absolute;
    bottom: -5px;
    left: calc(50% - 35px);
    background-color: $pri-color;
  }
}

.Top {
  position: relative;
  min-height: 500px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
  // margin-bottom: 50px;
  background-color: $sec-color;
  background-image: url("/defaults/pgs/orbrift_web_design_and_development.jpg");
  background-attachment: fixed;
  & .Detail {
    z-index: 1;
    & .Intro {
      padding: 5px 0 0 0;
      & > div {
        letter-spacing: 1px;
        font-weight: bold;
      }
      & > .MyName {
        color: rgba(204, 235, 238, 0.7);
        font-size: 35px;
        margin-bottom: 0;
      }
      & > .MyRole {
        position: relative;
        color: white;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 0;
        z-index: 0;
        &::after {
          position: absolute;
          content: "";
          bottom: -2px;
          left: 50%;
          margin-left: -95px;
          width: 190px;
          height: 15px;
          background-color: $pri-color-trans-3;
          z-index: -1;
        }
      }
      & > .Sdesc {
        // font-family: "Itim", "Roboto", sans-serif;
        color: $pri-color;
        // color: white;
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 8px;
        padding: 0 10px;
      }
      & > .Targ {
        font-size: 15px;
        margin-top: 0px;
        color: $light-color;
      }
    }

    & .Img {
      position: absolute;
      right: 0;
      top: 220px;
      height: 350px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }

  & button {
    margin-top: 40px;
    z-index: 2;
  }
}

// .TStack {
//   min-width: 65px;
// }
.Section_2 {
  margin-bottom: 50px;
  & .Tiles {
    background-color: $sec-color;
    background-attachment: fixed;
    background-image: url("/defaults/pgs/orbrift_pfbg.jpg");
    & > article {
      z-index: 2;
      min-height: 330px;
      background-color: $light-color;
      border-radius: 28px;
      margin: 0px 30px 30px 20px;
      border-top: solid 3px $pri-color;
      border-bottom: solid 3px $pri-color;
      & img {
        width: 90px;
        height: 90px;
      }

      & > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 150px;
      }

      & > h2 {
        padding: 12px 5px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        // color: white;
        color: $pri-color;
        background-color: $sec-color;
        // background-color: #0A2647;
        // @include bg-gradient-2;
      }
      & > p {
        padding: 10px 10px 15px 10px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        // color: $blue-grey-2;
        color: $dark-text-color;
      }
    }
  }
}

.HomeFootNote {
  font-size: 16px;
  text-align: center;
  color: $pri-color;
  background-color: $sec-color-trans-1;
  padding: 15px;
  & a {
    // color:$pri-color;
    color: lightblue;
  }
}

@include sm-and-down {
  .Top {
    & .Detail {
      & .Img {
        position: relative;
        top: 40px;
      }
    }
  }
}

@include xs-only {
  .Top {
    .Detail {
      & .Intro {
        & > .MyName {
          font-size: 26px;
        }
        & > .Sdesc {
          font-size: 28px;
        }
      }
    }
  }

  .Section_2 {
    & .Tiles {
      & > article {
        margin: 0px 8px 30px 8px;
      }
    }
  }
}
@include xxs-only {
  .Section_2 {
    & .Tiles {
      & > article {
        flex: 0 0 91.66%;
        max-width: 91.66%;
      }
    }
  }
}
</style>
