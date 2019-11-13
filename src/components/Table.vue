<template>
  <b-card>
    <div slot="header" v-html="caption"></div>
    <b-table :dark="dark" :hover="hover"  :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="captions" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
      <template slot="actions" slot-scope="data">
        <b-button v-b-modal.modal-prevent-closing size="sm" @click="generateBill(data.item)" variant="success" class="btn mr-2">
          <i class="fa fa-dollar"></i>
        </b-button>
        <b-button size="sm" variant="primary" class="btn mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button size="sm" variant="danger" @click="deleteRow(data.item)" class="mr-2">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <b-modal
      size="lg"
      id="modal-prevent-closing"
      ref="modal"
      title="Factura"
      @hidden="resetModal"
      @ok="saveBill"
    >
      <form ref="form" @submit.stop.prevent="saveBill">
        <b-row>
          <b-col colmd="6">
            <b-form-group>
            <strong><label>Responsable:</label></strong>
              <b-form-input class="border-0"
                id="resp-input"
                v-model="responsable"
                :state="respState"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Cliente:</label></strong>
              <b-form-input class="border-0"
                id="cli-input"
                v-model="cliente"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
          <b-row>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Check In:</label></strong>
              <b-form-input class="border-0"
                id="chkIn-input"
                v-model="checkIn"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Check Out:</label></strong>
              <b-form-input class="border-0"
                id="chkOut-input"
                v-model="checkOut"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col colmd="5">
          <b-form-group>
            <strong><label>Habitaciones Reservadas:</label></strong>
          <b-table striped hover :items="habitaciones"></b-table>
          </b-form-group>
          </b-col>
        </b-row>
          <b-row>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Descuento:</label></strong>
              <b-form-input class="border-0"
                id="desc-input"
                v-model="descuento"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Sub Total:</label></strong>
              <b-form-input class="border-0"
                id="total-input"
                v-model="subTotal"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Total a pagar:</label></strong>
              <b-form-input class="border-0"
                id="total-input"
                v-model="total"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </form>
    </b-modal>
    <nav>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'c-table',
  inheritAttrs: false,
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: [Array, Function],
      default: () => []
    },
    fields: {
      type: [Array, Object],
      default: () => []
    },
    perPage: {
      type: Number,
      default: 5
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      currentPage: 1,
      responsable: "",
      respState: "",
      cliente:"",
      checkIn:"",
      checkOut:"",
      subTotal: 0,
      total: 0,
      descuento:0,
      habitaciones:[]
    }
  },
  computed: {
    items: function() {
      const items =  this.tableData
      return Array.isArray(items) ? items : items()
    },
    totalRows: function () { return this.getRowCount() },
    captions: function() { return this.fields }
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'danger'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount: function () {
      return this.items.length
    },
    rowClicked (item) {
      this.$emit('row-clicked', item)
    },
    async deleteRow(row){
      
      let token = this.$store.state.user.token;
      let opts = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
      };
      await axios.patch("http://localhost:8000/api/v1.0/reserves/"+row.actions+"/",
      {
        "activo":0
      },opts).then(response => {

        let { status, data } = response;
        
        switch (status) {
          case 200:
              row.status="Inactive";
              row.roomsObject.forEach(e => {
                  axios.patch("http://localhost:8000/api/v1.0/rooms/"+e.id+"/",
                  {
                    "reservada":0
                  },opts).then(response => {
                    let { status, data } = response;
                    switch (status) {
                      case 200:
                        
                        break;
                      default:
                        console.log("Ocurrio un error, en la cancelacion");
                    }
                  })
                  .catch(err => console.error); 
              });
            break;
          default:
            console.log("Ocurrio un error, en la cancelacion");
        }
      })
      .catch(err => console.error);     
    },
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.respState = valid ? 'valid' : 'invalid'
        return valid
    },
    resetModal() {
      this.responsable = ''
      this.cliente = '';
      this.checkIn= '';
      this.checkOut = '';
      this.habitaciones = [];
      this.subTotal = 0;
      this.total = 0;
      this.descuento = 0;
    },
    generateBill(row){
      console.log(row)
      this.responsable = row.asigned;
      this.cliente = row.client;
      this.checkIn= row.checkIn;
      this.checkOut = row.checkOut;
      row.roomsObject.forEach(e => {
        this.subTotal+= parseFloat(e.precio);
        this.habitaciones.push(
          {
            habitacion: e.tipoHabitacion.nombre,
            numero: e.numero,
            precio: parseFloat(e.precio)
          }
        )
      });
      this.total = this.subTotal - this.descuento;
      console.log(this.total);
    },
    saveBill(){
      console.log("save")
    },
    editReserve(row){

    }
  }
}
</script>
<style lang="scss" scoped>
</style>