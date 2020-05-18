<template>
  <section
    class="gridContainer"
    :style="{
      '--gridTemplateRows': gridTemplateRows,
      '--gridTemplateColumns': gridTemplateColumns,
    }"
  >
    <div
      class="gridElement"
      v-for="(value, index) in gridElements"
      :key="index"
      :style="{
        order: gridElementsRowOrders[index],
      }"
    >
      <slot :name="value.name"></slot>
    </div>
    <div
      v-for="(filler, index) in rowFillers"
      :key="'rowFiller' + index"
      class="gridElementEmpty"
      :style="{ order: rowOrders[index + 1] }"
    ></div>
  </section>
</template>

<script>
export default {
  name: "LayoutHandler",
  props: {
    gridElements: Array,
  },
  data() {
    return {};
  },
  computed: {
    /*gridTemplateRows: function () {
      if (this.gridElements) {
        let res = this.gridElements.map(() => "auto");
        this.gridElements.forEach((value, index) => {
          //
          console.log(value);
          //if (res.length <= index) res.push("auto");
          if (value.name) res[index] = "max-content";
        });
        let resF = "";
        res.forEach((value) => (resF += value + " "));

        return resF;
      }
      return "unset";
    },*/
    rows() {
      let r = [];
      if (this.gridElements)
        this.gridElements.forEach((value) => {
          const pushVal = value.config.y ? value.config.y : 1;
          if (!r.includes(pushVal)) r.push(pushVal);
        });
      return r
        .filter((value) => value > 0)
        .sort((a, b) => a - b)
        .concat(...r.filter((value) => value < 0).sort((a, b) => a - b));
    },
    rowFillers() {
      if (this.rows) {
        let res = [];
        this.rows.forEach((value, index) => {
          //
          if (
            (index < this.rows.length - 1 &&
              this.rows[index + 1] > this.rows[index] + 1) ||
            (this.rows[index] > 0 && this.rows[index + 1] < 0)
          ) {
            res.push(index);
          }
        });
        return res;
      } else return undefined;
    },
    rowOrders() {
      if (this.rowFillers && this.gridElements) {
        /**
         * @type {Array}
         */
        let res = this.gridElements.map((value) => value.config.y);
        console.log({ res });
        this.rowFillers.forEach((value) => {
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
    gridElementsRowOrders() {
      return this.rowOrders.filter(
        (value, index) => !this.rowFillers.includes(index)
      );
    },
    gridTemplateRows: function () {
      if (this.rows !== undefined) {
        if (this.rows.length === 1) return "auto";
        if (this.gridElements) {
          //let res = this.gridElements.map(() => "auto");
          let res = [];
          this.rows.forEach((value) => {
            if (value) res.push("auto");
          });
          //console.table(res);
          this.gridElements.forEach((value, index) => {
            //
            //console.log(value);
            //if (res.length <= index) res.push("auto");
            let y = value.config.y;
            y = y > 0 ? y - 1 : res.length + y;
            //console.log(y);
            if (this.rowFillers.includes(y)) {
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
    columns() {
      let r = [];
      if (this.gridElements)
        this.gridElements.forEach((value) => {
          const pushVal = value.config.x ? value.config.x : 1;
          if (!r.includes(pushVal)) r.push(pushVal);
        });
      return r
        .filter((value) => value > 0)
        .sort((a, b) => a - b)
        .concat(...r.filter((value) => value < 0).sort((a, b) => a - b));
    },
    columnFillers() {
      if (this.columns) {
        let res = [];
        this.columns.forEach((value, index) => {
          //
          if (
            (index < this.columns.length - 1 &&
              this.columns[index + 1] > this.columns[index] + 1) ||
            (this.columns[index] > 0 && this.columns[index + 1] < 0)
          ) {
            res.push(index);
          }
        });
        return res;
      } else return undefined;
    },
    columnOrders() {
      if (this.columnFillers && this.gridElements) {
        /**
         * @type {Array}
         */
        let res = this.gridElements.map((value) => value.config.x);
        console.log({ res });
        this.columnFillers.forEach((value) => {
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
    gridTemplateColumns: function () {
      if (this.columns !== undefined) {
        if (this.columns.length === 1) return "auto";
        if (this.gridElements) {
          //let res = this.gridElements.map(() => "auto");
          let res = [];
          this.columns.forEach((value) => {
            if (value) res.push("auto");
          });
          //console.table(res);
          this.gridElements.forEach((value, index) => {
            let x = value.config.x;
            x = x > 0 ? x - 1 : res.length + x;
            //console.log(x);
            if (this.rowFillers.includes(x)) {
              res[x + 1] = "auto";
              res[x + 2] = "max-content";
            }
            res[x] = "max-content";
          });
          let columnsF = "";
          res.forEach((value) => (columnsF += value + " "));
          // todo: add auto between gaps
          return columnsF;
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
