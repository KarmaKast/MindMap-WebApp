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
      v-for="(filler, index) in fillersFinal"
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
          /**
           * -1 => true
           * @type {Boolean}
           */
          const condition1 =
            this.rawOrdersSorted[index] < 0 &&
            this.rawOrdersSorted.length === 1;

          /**
           * 1 => true
           * @type {Boolean}
           */
          const condition3 =
            this.rawOrdersSorted[index] > 0 &&
            this.rawOrdersSorted.length === 1;

          /**
           * 1 , 3 => true | 1 , 2 => false | -3, -1 => true
           * @type {Boolean}
           */
          const condition2 =
            index < this.rawOrdersSorted.length - 1 &&
            Math.abs(
              this.rawOrdersSorted[index + 1] - this.rawOrdersSorted[index]
            ) > 1;

          //console.table({ condition1, condition2, condition3 });
          //
          if (condition1) res.push(index - 1);
          else if (condition3 || condition2 || condition3) {
            res.push(index);
          }
        });
        return res;
      } else return undefined;
    },
    fillersFinal() {
      return this.fillers.map((value, index) => value + index);
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
        //console.log("-------------------------------------");
        //console.table(res);
        this.fillers.forEach((value, index) => {
          //console.log(value);
          if (value > 0)
            res.splice(value + index + 1, 0, res[value + index] + 1);
          else {
            res.unshift(1);
            //console.table(res);
            res = res.map((value, index) =>
              index === 0 ? value : value > 0 ? value + 1 : value
            );
            //console.table(res);
          }
        });
        //console.table(res);
        res.forEach((value, index) => {
          if (value < 0) res[index] = res[index - 1] + 1;
        });
        //console.table(res);
        //console.log("-------------------------------------");
        return res;
      } else return [];
    },
    gridElementsOrders() {
      return this.orders.filter(
        (value, index) => !this.fillersFinal.includes(index - 1)
      );
    },
    gridTemplate: function () {
      if (this.orders && this.gridElements) {
        if (this.orders.length === 0) return "auto";

        //let res = this.gridElements.map(() => "auto");
        let res = [];
        this.orders.forEach((value) => {
          if (value) res.push("auto");
        });
        //console.log("-------------------------------------");
        //console.table(res);
        this.gridElements.forEach((value, index) => {
          let y = value[this.axis];
          y = y > 0 ? y - 1 : res.length + y;
          if (this.fillers.includes(y)) {
            res[y + 1] = "auto";
            res[y + 2] = "max-content";
          }
          res[y] = "max-content";
        });
        //console.table(res);
        let resF = "";
        res.forEach((value) => (resF += value + " "));
        //console.log("-------------------------------------");
        return resF;
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
  border-radius: inherit;
}
.gridElement {
  box-sizing: border-box;
}
</style>
