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
        order: gridElementsOrders[value.name],
      }"
    >
      <slot :name="value.name"></slot>
    </div>
    <div
      v-for="(filler, index) in fillersFinal"
      :key="'filler' + index"
      class="gridElementEmpty"
      :style="{ order: Object.values(orders[Object.values(filler)[0] + 1])[0] }"
    ></div>
  </section>
</template>

<script>
const getVal = (val) => Object.values(val)[0];
const getKey = (val) => Object.keys(val)[0];
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
          if (!r.includes(pushVal)) r.push({ [value.name]: pushVal });
        });
      return r
        .filter((value) => getVal(value) > 0)
        .sort((a, b) => getVal(a) - getVal(b))
        .concat(
          ...r
            .filter((value) => getVal(value) < 0)
            .sort((a, b) => getVal(a) - getVal(b))
        );
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
            getVal(this.rawOrdersSorted[index]) < 0 &&
            this.rawOrdersSorted.length === 1;

          /**
           * 1 => true
           * @type {Boolean}
           */
          const condition3 =
            getVal(this.rawOrdersSorted[index]) > 0 &&
            this.rawOrdersSorted.length === 1;

          /**
           * 1 , 3 => true | 1 , 2 => false | -3, -1 => true
           * @type {Boolean}
           */
          const condition2 =
            index < this.rawOrdersSorted.length - 1 &&
            Math.abs(
              getVal(this.rawOrdersSorted[index + 1]) -
                getVal(this.rawOrdersSorted[index])
            ) > 1;

          //console.table({ condition1, condition2, condition3 });
          //
          if (condition1) res.push({ [getKey(value)]: index - 1 });
          else if (condition3 || condition2 || condition3) {
            res.push({ [getKey(value)]: index });
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
        this.rawOrdersSorted.forEach((value) => {
          res.push(value);
        });
        //console.log("-------------------------------------");
        //console.table(res);
        this.fillers.forEach((value, index) => {
          //console.log(value);
          const val = getVal(value);
          if (this.gridElements.length === 1) {
            if (val < 0) res.unshift({ filler: 1 });
            else res.push({ filler: -1 });
          } else {
            // -3, -1 : filler 0 => -3, -2 , -1
            //console.table(res);
            //console.table({ val, index });
            if (val === -1) {
              res.unshift({ filler: 1 });
            } else {
              const fillerVal = getVal(res[val + index]) + 1;
              res.splice(val + index + 1, 0, {
                filler: fillerVal,
              });
            }
            //console.table(res);
          }
          //console.table(res);
        });
        //console.table(res);
        res.forEach((value, index) => {
          const val = getVal(value);
          if (val < 0)
            if (index !== 0)
              res[index] = { [getKey(value)]: getVal(res[index - 1]) + 1 };
            else res[index] = { [getKey(value)]: 1 };
        });
        //console.table(res);
        //console.log("-------------------------------------");
        return res;
      } else return [];
    },
    fillersFinal() {
      return this.fillers.map((value, index) => {
        return { [getKey(value)]: getVal(value) + index };
      });
    },
    gridElementsOrders() {
      let res = {};
      this.fillers.forEach((value) => {
        this.orders.forEach((value2) => (res[getKey(value2)] = getVal(value2)));
      });
      return res;
    },
    gridTemplate: function () {
      if (this.orders && this.gridElements) {
        if (this.orders.length === 0) return "auto";

        //let res = this.gridElements.map(() => "auto");
        let res = [];
        this.orders.forEach(() => {
          res.push("auto");
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
