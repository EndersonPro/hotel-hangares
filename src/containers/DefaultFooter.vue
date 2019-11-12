<template>
  <TheFooter>
    <div>
      <!--footer-->
      <a href="#">CoreUI</a>
      <span class="ml-1">&copy; 2019 Hotel Los Hangares</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">
        Desarrollado con mucho
        <i style="color: red" class="fa fa-heart"></i> por
      </span>
      <a href="#">Enderson Vizcaino</a>
      <span> & </span>
      <a href="#">Christian Rodriguez</a>
    </div>
  </TheFooter>
</template>
<script>
import { Footer as TheFooter } from "@coreui/vue";
export default {
  name: "DefaultFooter",
  components: {
    TheFooter
  }
};
</script>
