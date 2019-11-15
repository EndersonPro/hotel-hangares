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
        <b-button v-b-modal.modal-edit-reserve size="sm" variant="primary" @click="editReserve(data.item)" class="btn mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button size="sm" variant="danger" @click="cancelReserve(data.item)" class="mr-2">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <b-modal
      size="md"
      id="modal-prevent-closing"
      ref="modal"
      title="Factura"
      @hidden="resetModal"
      hide-footer
    >
      <form ref="form" @submit.stop.prevent="saveBill">
          <b-row>
          <b-col colmd="4">
            <b-form-group>
            <strong><label>Fecha:</label></strong>
              <b-form-input class="border-0" disabled
                id="resp-input"
                v-model="fecha"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="4">
            <b-form-group>
              <strong><label>Check In:</label></strong>
              <b-form-input class="border-0" disabled
                id="chkIn-input"
                v-model="checkIn"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="4">
            <b-form-group>
              <strong><label>Check Out:</label></strong>
              <b-form-input class="border-0" disabled
                id="chkOut-input"
                v-model="checkOut"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col colmd="6">
            <b-form-group>
            <strong><label>Responsable:</label></strong>
              <b-form-input class="border-0" disabled
                id="resp-input"
                v-model="responsable"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Cliente:</label></strong>
              <b-form-input class="border-0" disabled
                id="cli-input"
                v-model="cliente"
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
              <b-form-input class="border-0" disabled
                id="desc-input"
                v-model="descuento"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="6">
            <b-form-group>
              <strong><label>Sub Total:</label></strong>
              <b-form-input class="border-0" disabled
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
              <b-form-input class="border-0" disabled
                id="total-input"
                v-model="total"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col colmd="6">
              <b-button v-if="status=='Activo'" type="submit" variant="success" class="btn mr-2 cobrar">
                 Cobrar <i class="fa fa-dollar"></i>
              </b-button>
            </b-col>
        </b-row>
      </form>
    </b-modal>
   <b-modal
      size="xl"
      id="modal-edit-reserve"
      ref="modal"
      title=""
      hide-footer
    >
      <EditReserve :title="'Editar Reserva'" :edit="true" :reserveObject="currentRow"></EditReserve>
   </b-modal>
    <nav>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>
import axios from 'axios';
import EditReserve from "@/views/pages/NuevaReserva";

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
      currentRow:null,
      responsable: "",
      idReserve: "",
      cliente:"",
      fecha: "",
      checkIn:"",
      status:"",
      checkOut:"",
      subTotal: 0,
      total: 0,
      descuento:0,
      habitaciones:[]
    }
  },
  components:{
    EditReserve
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
      return status === 'Activo' ? 'success'
        : status === 'Inactivo' ? 'danger'
          : status === 'Pendiente' ? 'warning'
            : status === 'Cancelado' ? 'danger' : 'primary'
    },
    getRowCount: function () {
      return this.items.length
    },
    rowClicked (item) {
      this.$emit('row-clicked', item)
    },
    cancelReserve(row){
      
      let token = this.$store.state.user.token;
      let opts = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
      };
      this.$swal({
				title: "¿Estás seguro?",
				text: "La reserva sera cancelada y no podras recuperarla",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			  })
			  .then((willDelete) => {
				if (willDelete) {
					try { 
              axios.patch("http://localhost:8000/api/v1.0/reserves/"+row.actions+"/",
              {
                "activo":0
              },opts).then(response => {

                let { status, data } = response;
                
                switch (status) {
                  case 200:
                      row.status="Inactivo";
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
            
					} catch (err) {
						console.log(err);
					}
				}
			});	
  
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
      this.currentRow = row;
      this.fecha = new Date().toISOString().slice(0, 10)
      this.responsable = row.asigned;
      this.cliente = row.client;
      this.checkIn= row.checkIn;
      this.checkOut = row.checkOut;
      this.idReserve = row.actions;
      this.status = row.status;
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
    },
    saveBill(){

      let token = this.$store.state.user.token;
      let opts = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
      };
      let bill = {
        fecha: this.fecha,
        descuento: this.descuento,
        reserva: this.idReserve
      };

			this.$swal({
				title: "¿Estás seguro?",
				text: "El registro de pago sera asignado a la base de datos",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			  })
			  .then((willDelete) => {
				if (willDelete) {
					try {

            let { status, data } = axios.post("http://localhost:8000/api/v1.0/bills/",bill, opts)
            .then(response => {
                    let { status, data } = response;
                    switch (status) {
                        case 201:
                            // this.cancelReserve(this.currentRow);
                            swal("Guardado","La reserva ha sido cobrada","success");    
                          break;
                        default:
                          console.log("Ocurrio un error, en el proceso de cobro");
                    }
                  })
                  .catch(err => console.error); 

            
					} catch (err) {
						console.log(err);
					}
				}
			  });	
      
    },
    editReserve(row){
      this.currentRow = row;
    }
  }
}
</script>
<style lang="scss" scoped>
.form-control{
  background: #ffffff;
}
.cobrar{
  margin-top: 27px;
  margin-left: 110px;
}
</style>