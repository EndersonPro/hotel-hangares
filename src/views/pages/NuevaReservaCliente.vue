<template>
    <div class="bg-reservas">
        <b-container>
            <b-row class="d-flex flex-row align-content-center justify-content-center">
                <b-col sm="12">
                    <SearchBar></SearchBar>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

import SearchBar from '@/components/SearchBar';

export default {
    name:"NewReserveClient",
    components:{
        SearchBar,
    }
}
</script>

<style lang="scss" scoped>

.bg-reservas{
  background: {
    image: url('../../assets/images/bg_reservas.png');
    size: cover;
    repeat: no-repeat;
  }
}
.d-flex{
    height: 95vh;
}
</style>