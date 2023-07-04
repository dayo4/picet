<template>
  <div>
    <section class="Top bg-img-masked noselect br1">
      <div class="Detail xs12 md8 noselect br1">
        <!-- Intro -->
        <div class="Intro text-center">
          <h2 class="MyName">SAMUEL ADENIYI</h2>
          <h5 class="MyRole">Fullstack Developer</h5>
          <h3 class="Sdesc">Innovative Digital Solutions</h3>
          <h5 class="Targ">For Creative Brands</h5>
        </div>

        <!-- image -->
        <div class="Img flex md6 j-c-center mb-9">
          <div class="xs10 sm7">
            <img
              src="/defaults/pgs/wpages.png"
              alt="apps-tiles-collage"
              draggable="false"
            />
          </div>
        </div>

        <!-- Summary Accordion Component -->
        <Accordion />
      </div>

      <!-- logo -->
      <!-- <div
        v-html="$appLogo('white')"
        class="Logo flex j-c-center noselect"
      ></div> -->

      <!-- CTA Button -->
      <div class="flex j-c-center my-10">
        <Button
          @clicked="$router.push({ path: '/create' })"
          type="cta"
          size="large"
        >
          START HERE
        </Button>
      </div>
    </section>

    <!-- Tech Stack Icons Slider Component -->
    <ClientOnly>
      <TechStackSlider  />
    </ClientOnly>
    <!-- Tech Stack Icons Slider Component -->

    <section class="SubText flex j-c-center">
      <div class="xs12 sm9 md4">
        Your Online Profile, Simplified and Elevated. Let's do it
      </div>
    </section>

    <section class="Section_2">
      <h3 class="SectionSubHead">
        <span class="icon-check mr-2"></span>
        <span>My Approach.. </span>
      </h3>
      <div class="Tiles bg-img-masked flex wrap j-c-center py-4 noselect">
        <article
          v-aos="'fade-left'"
          class="xs11 sm10 md9 lg7 shadow-3"
          v-for="(L, i) in list"
          :key="i"
        >
          <div class="noselect">
            <img
              :src="L.link ? L.link : '/defaults/pgs/icons/' + L.img + '.jpg'"
              :alt="L.text"
              draggable="false"
            />
          </div>
          <h2>{{ L.text }}</h2>
          <p>{{ L.detail }}</p>
        </article>
      </div>

      <div class="flex j-c-center mt-6">
        <Button
          @clicked="
            $router.push({
              name: 'about',
            })
          "
          size="medium"
          icon="icon-right"
          iconPos="right"
        >
          About Me
        </Button>
      </div>
    </section>

    <!--Designs Gallery -->
    <h3 class="SectionSubHead">
      <span class="icon-check mr-2"></span>
      <span> Some Designs gallery.. </span>
    </h3>

    <section>
      <h2 class="text-center t-blue-grey--1"></h2>

      <!-- Projects Gallery Component -->
      <ProjGallery />
      <!-- Projects Gallery Component -->

      <div class="flex j-c-center mb-10">
        <Button
          @clicked="$router.push('/projects')"
          size="medium"
          icon="icon-right"
          iconPos="right"
        >
          Projects
        </Button>
      </div>
    </section>

    <h3 class="SectionSubHead">
      <span class="icon-check mr-2"></span>
      <span> Some Feedbacks.. </span>
    </h3>

    <!-- Testimonial Component -->
    <Testimonial />
    <!-- Testimonial Component -->

    <h3 class="SectionSubHead">
      <span class="icon-mail mr-3"></span>
      <span> Talk To Me </span>
    </h3>
    <!-- Contact Component -->
    <div>
      <MainContact></MainContact>
    </div>

    <!-- FootNote   -->
    <section class="HomeFootNote mt-10">
      <div v-aos="'zoom-in'" class="flex j-c-center">
        <div class="xs12 md7 lg6">
          If you would love to have a more streamlined project discussion with
          me to request an estimate, use the button below
          <div class="flex j-c-center my-5">
            <Button
              @clicked="$router.push({ path: '/create' })"
              type="cta"
              size="large"
            >
              Get A Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  name: "Home",

  setup() {
    const { $myMetaInfo } = useNuxtApp();

    useSeoMeta($myMetaInfo({}));

    /* Element Refs */

    /* Other Static properties  */
    const list = [
      {
        img: "resp",
        text: "Flawlessly Responsive Pages for Modern Devices",
        detail:
          "Experience webpages that are carefully designed to adapt easily to any screen size. Whether your audience is browsing on a desktop, tablet, or mobile device, your apps will look stunning and provide an exceptional user experience.",
      },
      {
        img: "scale",
        text: "Performance-driven and Scalable Applications",
        detail:
          "With a focus on reliability and smart planning, I design and develop applications that are not only fast and efficient but also have the ability to scale effortlessly as your business grows. Say goodbye to bottlenecks.and hello to possibilities.",
      },
      {
        img: "",
        text: "Intuitive Designs and Fluid Navigation",
        link: "/defaults/pgs/icons/clean.png",
        detail:
          "From the layout and aesthetics to the underlying framework, every aspect of your website and app is carefully crafted to ensure smooth navigation and enhance user engagement. ",
      },
      {
        img: "flexb",
        text: "Tailored Solutions that Capture Your Unique Identity",
        // link: "/defaults/logo/orbrift-cy.png",
        detail:
          "Your website should reflect your brand's personality. Whether you prefer a sleek and minimalist design or a fully customized visual experience, I take the time to understand your needs and create a design that showcases the value of your products or services effectively.",
      },
      {
        img: "",
        text: "Agile Development Approach",
        link: "/defaults/pgs/icons/secure.png",
        detail:
          "Through an agile development methodology, I deliver iterative solutions that evolve with your requirements. This approach allows for flexibility and quick adaptations on your software development projects.",
      },
      {
        img: "",
        text: "Integration with Third-Party Services",
        link: "/defaults/pgs/icons/secure.png",
        detail:
          "Maximize the functionality of your apps by easily integrating it with third-party services. From e-commerce platforms to payment gateways and CRM systems, I ensure smooth integration to enhance your users experience and business operations.",
      },
      {
        img: "",
        text: "Streamlined Project Management",
        link: "/defaults/pgs/icons/secure.png",
        detail:
          "I employ user-friendly tools and streamlined processes to make communication and payment hassle-free. You can focus on your business while I handle the technicalities, ensuring a secure and efficient workflow.",
      },
      {
        img: "",
        text: "Continuous Support and Maintenance",
        link: "/defaults/pgs/icons/secure.png",
        detail:
          "I provide ongoing support and maintenance services to keep your website or application running smoothly. From updates and security enhancements to performance optimizations, I ensure your digital presence remains robust and up-to-date.",
      },
    ];

    // onMounted(() => {});

    // onUnmounted(() => { });

    return {
      list,
    };
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
