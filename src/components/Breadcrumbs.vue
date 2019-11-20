<template>
    <b-breadcrumb :items="breadcrumbList"></b-breadcrumb>
</template>
<script>
export default {
    name:"Breadcrumbs",
    data(){
        return {
            breadcrumbList: []
        }
    },
    watch:{
        '$route'(){
            this.updateList()
        }
    },
    mounted(){
        this.updateList()
    },
    methods:{
        updateList(){
            this.breadcrumbList = this.$route.meta.breadcrumbs
        }
    }
}
</script>