<template>
  <div id="mindmap-about-section" :class="aboutPageclassList">
    <layout-manager
      axis="y"
      :gridElements="[
        { name: 'backBttnSection', position: 1 },
        { name: 'content', position: 2 },
      ]"
    >
      <template v-slot:backBttnSection>
        <layout-manager
          axis="x"
          :gridElements="[{ name: 'backBttn', position: 1 }]"
        >
          <template v-slot:backBttn>
            <button v-touch-compatible-hover v-touch:tap="hideAboutPage">
              <icon-base
                iconName="Back"
                class="icon"
                :height="24"
                :width="24"
                role="button"
                viewBox="0 0 48 48"
                ><icon-direction-left />
              </icon-base></button></template
        ></layout-manager>
      </template>
      <template v-slot:content>
        <p>
          <span :style="{ fontSize: '20px' }"
            ><a
              href="https://github.com/KarmaKast/MindMap-WebApp"
              target="_blank"
              ><icon-base
                :style="{ display: 'inline' }"
                class="icon"
                iconName="open in new Tab"
                viewBox="0 0 24 24"
                ><icon-open-in-new />
              </icon-base>
              {{ appName }}</a
            >
            - {{ appVersion }}</span
          >
          <br />
          <br />
          A Mindmap web app that uses
          <a href="https://github.com/KarmaKast/morph-dbms-core" target="_blank"
            ><icon-base
              :style="{ display: 'inline' }"
              class="icon"
              iconName="open in new Tab"
              viewBox="0 0 24 24"
              ><icon-open-in-new />
            </icon-base>
            morph-dbms-core</a
          >
          . Currently everything is in prototyping state. <br />
          <br />
          <br />
          - setup
          <a href="https://github.com/KarmaKast/morph-dbms-API/" target="_blank"
            ><icon-base
              :style="{ display: 'inline' }"
              class="icon"
              iconName="open in new Tab"
              viewBox="0 0 24 24"
              ><icon-open-in-new />
            </icon-base>
            morph-dbms-API</a
          >
          (runs at localhost:3000)
        </p>
      </template>
    </layout-manager>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  components: {
    iconBase: () => import("./helpers/iconBase"),
    iconOpenInNew: () => import("../icons/iconOpenInNew"),
    iconDirectionLeft: () => import("../icons/iconDirectionLeft"),
  },
  props: {
    aboutSectionToggle: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      appVersion:
        "v" +
        process.env.VUE_APP_VERSION +
        (process.env.VUE_APP_MODE === "development" ? "-dev" : ""),
      appName: process.env.VUE_APP_NAME,

      aboutPageclassList: ["show"],
    };
  },
  methods: {
    hideAboutPage() {
      this.aboutPageclassList = this.customs.classListHandler.dropClass(
        this.aboutPageclassList,
        "show"
      );
    },
  },
  watch: {
    aboutSectionToggle() {
      if (this.aboutSectionToggle)
        this.aboutPageclassList = this.customs.classListHandler.toggleClass(
          this.aboutPageclassList,
          "show"
        );
    },
  },
  mounted() {
    //console.info(this.customs.classListHandler.addClass);
  },
};
</script>

<style scoped>
#mindmap-about-section {
  position: absolute;
  pointer-events: all;
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-primary);
  border-radius: inherit;
  padding: 8px;
  display: none;
}
#mindmap-about-section.show {
  display: block;
}
a {
  pointer-events: initial;
  color: var(--color-primary);
}
p {
  color: var(--color-primary);
  max-width: 350px;
}
a > .icon {
  fill: var(--color-primary);
}
button {
  /** default corrections */
  background-color: unset;
  border: none;
  padding: 0px;

  border: 1px solid var(--color-primary);
  background-color: var(--color-bg-primary);
  fill: var(--color-primary);
  color: var(--color-bg-primary);

  border-radius: 999px;
  box-shadow: 0px 0px 2px 2px hsla(0, 0%, 0%, 0.15);
  outline: none;

  margin: 0px auto;
  cursor: pointer;
  text-align: center;
  display: flex;
}
button.hover {
  border: 1px solid var(--color-bg-primary);
  background-color: var(--color-primary);
  color: var(--color-bg-primary);
  fill: var(--color-bg-primary);
}
</style>
