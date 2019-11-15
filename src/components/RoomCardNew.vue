<template>
    <!-- <div cols="4" class="card" :style="{ backgroundImage: 'url('+image+')' }">
        {{ descripcion }}
    </div> -->
    <b-col cols="4">
        <b-card
        :title="price"
        :img-src="image"
        img-alt="Image"
        img-top
        style="width: 18rem;max-width: 18rem;"
    >
        <b-card-text>
        {{ descripcion }}
        </b-card-text>
            <b-button variant="info"><router-link :to="{
                name:'DetailRoom',
                params:{
                    idRoom: id
                }
            }">Ver Detalle</router-link></b-button>
            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </b-card>
    </b-col>
</template>

<script>
export default {
    name:"RoomCardNew",
    props: {
        id:{
            type:Number
        },
        image:{
            type: String,
            default: "https://www.the-connaught.co.uk/SysSiteAssets/rooms--suites/superior-queen-single-room/superior-queen-room---teaser.jpg?w=500&h=462&scale=both&mode=crop"
            },
        price: {
            type:String,
            default:'50'
        },
        type:{
            type:String,
            default:"FAMILY ROOM"
        },
        number:{
            type:Number,
            default: 201
        },
        reserved:{
            type: Boolean,
            default: false
        },
        descripcion:{
            type:String,
        }
    },
}
</script>

<style lang="scss">
    .p-card{
        background-repeat: none;
    }
</style>