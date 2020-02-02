<template>
    <div class="node" :style="this.nodeStyle" >

    </div>
</template>

<script>
export default {
    name: "nodeComponent",
    props: {
        ID: String
    },
    computed: {
        nodeStyle: function() {
            return ''
        }
    },
    created: function() {
        if (this.ID===undefined) {
            // create new node using the nodeAPI and take its ID
        }
    }
}
</script>

<style lang="sass" scoped>

</style>