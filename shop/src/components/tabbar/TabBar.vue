<template>
    <div class="tabs">
        <div  @click="toggle(item.path,item.index)"  v-for="(item) in tabs" :key="item.index"  :class="item.checked? 'tab active':'tab'">
                <img :src="item.actImg" v-if="item.checked">
                <img :src="item.img" v-else>
                <div>
                    {{item.name}}
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        tabs: Array,
        default: []
    },
    computed:{
    },
    methods:{
        toggle(path,index){
            this.$router.replace(path);
            this.$emit('toggle',index);
        }
    }
}
</script>

<style scoped>
    .tabs{
        display: flex;
        justify-content: center;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
        box-shadow: 0 -1px 0  0 rgba(155, 155, 155, .1);
        padding: 5px;
    }
    .tabs .tab{
        flex: 1;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    .tabs .tab img{
        width: 20px;
    }
    .active{
        color: rgb(224, 110, 120);
    }

</style>