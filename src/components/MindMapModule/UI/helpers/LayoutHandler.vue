<template>
  <section
    class="gridContainer"
    :style="{
      '--gridTemplateRows': axis === 'y' ? gridTemplate : 'none',
      '--gridTemplateColumns': axis === 'x' ? gridTemplate : 'none',
    }"
  >
    <div
      class="gridElement"
      v-for="(value, index) in gridElements"
      :key="index"
      :style="{
        order: gridElementsOrders[index],
      }"
    >
      <slot :name="value.name"></slot>
    </div>
    <div
      v-for="(filler, index) in fillers"
      :key="'filler' + index"
      class="gridElementEmpty"
      :style="{ order: orders[filler + 1] }"
    ></div>
  </section>
</template>

<script>
export default {
  name: "LayoutHandler",
  props: {
    gridElements: Array,
    axis: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    rawOrdersSorted() {
      let r = [];
      if (this.gridElements)
        this.gridElements.forEach((value) => {
          const pushVal = value[this.axis] ? value[this.axis] : 1;
          if (!r.includes(pushVal)) r.push(pushVal);
        });
      return r
        .filter((value) => value > 0)
        .sort((a, b) => a - b)
        .concat(...r.filter((value) => value < 0).sort((a, b) => a - b));
    },
    fillers() {
      if (this.rawOrdersSorted) {
        let res = [];
        this.rawOrdersSorted.forEach((value, index) => {
          //
          if (
            (index < this.rawOrdersSorted.length - 1 &&
              this.rawOrdersSorted[index + 1] >
                this.rawOrdersSorted[index] + 1) ||
            (this.rawOrdersSorted[index] > 0 &&
              this.rawOrdersSorted[index + 1] < 0)
          ) {
            res.push(index);
          }
        });
        return res;
      } else return undefined;
    },
    orders() {
      if (this.fillers && this.gridElements) {
        /**
         * @type {Array}
         */
        let res = [];
        this.gridElements.forEach((value) => {
          if (value[this.axis] !== undefined) res.push(value[this.axis]);
        });
        console.log({ res });
        this.fillers.forEach((value) => {
          console.log(value);
          res.splice(value + 1, 0, res[value] + 1);
        });
        res.forEach((value, index) => {
          //
          if (value < 0) res[index] = res[index - 1] + 1;
        });
        return res;
      } else return [];
    },
    gridElementsOrders() {
      return this.orders.filter(
        (value, index) => !this.fillers.includes(index - 1)
      );
    },
    gridTemplate: function () {
      if (this.rawOrdersSorted !== undefined) {
        if (this.rawOrdersSorted.length === 1) return "auto";
        if (this.gridElements) {
          //let res = this.gridElements.map(() => "auto");
          let res = [];
          this.rawOrdersSorted.forEach((value) => {
            if (value) res.push("auto");
          });
          //console.table(res);
          this.gridElements.forEach((value, index) => {
            //
            //console.log(value);
            //if (res.length <= index) res.push("auto");
            let y = value[this.axis];
            y = y > 0 ? y - 1 : res.length + y;
            //console.log(y);
            if (this.fillers.includes(y)) {
              res[y + 1] = "auto";
              res[y + 2] = "max-content";
            }
            res[y] = "max-content";
          });
          let resF = "";
          res.forEach((value) => (resF += value + " "));
          // todo: add auto between gaps
          return resF;
        }
      }
      return "unset";
    },
  },
  watch: {},
};
</script>

<style scoped>
.gridContainer {
  display: grid;

  height: 100%;
  width: 100%;

  grid-template-rows: var(--gridTemplateRows);
  grid-template-columns: var(--gridTemplateColumns);

  box-sizing: border-box;
}
.gridElement {
  border: 1px solid rgb(118, 255, 90);
  box-sizing: border-box;
}
</style>
