<template>
    <div class="containerf">
        <div class="animate__animated animate__lightSpeedInRight">   
            <h1>Arma tu menú</h1>
        </div>
      <form @submit.prevent="guardarFormulario" class="my-4">
            <!---------------------- Día ------------------------>
            
            <div class="mb-3">
                <label for="dia">Día:</label>
                <input v-model="form.dia" type="date" class="form-control" :max="obtenerFechaActual()" required />
                <span v-if="!validarDia" class="error">Por favor, ingresa una fecha válida.</span>
            </div>
    
            <!---------------------- Desayuno ------------------------>
            
            <div class="mb-3">
            <h2>Desayuno</h2>
            <label for="desayuno">Selecciona una opción:</label>
            <select v-model="form.desayuno" class="form-control" required>
                <option value="-">-</option>
                <option v-for="opcion in opcionesDesayuno" :key="opcion" :value="opcion">{{ opcion }}</option>
            </select>
            </div>
    
            <!---------------------- Almuerzo ------------------------>
            
            <div class="mb-3">
            <h2>Almuerzo</h2>
            <label for="almuerzo">Selecciona una opción:</label>
            <select v-model="form.almuerzo" class="form-control" required>
                <option value="-">-</option>
                <option v-for="opcion in opcionesAlmuerzo" :key="opcion" :value="opcion">{{ opcion }}</option>
            </select>
            </div>
    
            <!---------------------- Merienda ------------------------>
            
            <div class="mb-3">
            <h2>Merienda</h2>
            <label for="merienda">Selecciona una opción:</label>
            <select v-model="form.merienda" class="form-control" required>
                <option value="-">-</option>
                <option v-for="opcion in opcionesMerienda" :key="opcion" :value="opcion">{{ opcion }}</option>
            </select>
            </div>
    
            <!---------------------- Cena ------------------------>
            
            <div class="mb-3">
            <h2>Cena</h2>
            <label for="cena">Selecciona una opción:</label>
            <select v-model="form.cena" class="form-control" required>
                <option value="-">-</option>
                <option v-for="opcion in opcionesCena" :key="opcion" :value="opcion">{{ opcion }}</option>
            </select>
            </div>
    
            <!---------------------- Comentario ------------------------>
            
            <div class="mb-3">
            <label for="comentario">Comentario:</label>
            <textarea v-model.trim="form.comentario" class="form-control" required></textarea>
            </div>
    
            <!---------------------- Botones ------------------------>
            
            <div class="btnguardar">
            <button type="submit" class="btn btn-primary">{{ formularioGuardado ? 'Editar' : 'Guardar' }}</button>
            </div>
      </form>
  
      <!---------------------- Ver formularios guardados ------------------------>
        <div v-if="formulariosGuardados.length > 0">
            <h2>Formularios Guardados</h2>
            <div class="animate__animated animate__zoomIn">
                <div class="formguard">
                    <div v-for="(formulario, index) in formulariosGuardados" :key="index" class="formulario-guardado">
                        <p><strong>Día:</strong> {{ formulario.dia }}</p>
                        <p><strong>Desayuno:</strong> {{ formulario.desayuno }}</p>
                        <p><strong>Almuerzo:</strong> {{ formulario.almuerzo }}</p>
                        <p><strong>Merienda:</strong> {{ formulario.merienda }}</p>
                        <p><strong>Cena:</strong> {{ formulario.cena }}</p>
                        <p><strong>Comentario:</strong> {{ formulario.comentario }}</p>
                            <div class="btneob">
                                <button @click="cargarFormulario(formulario)" class="btn btn-warning">Editar</button>
                                <button @click="borrarFormulario(formulario)" class="btn btn-danger">Borrar</button>
                            </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          dia: '',
          desayuno: '-',
          almuerzo: '-',
          merienda: '-',
          cena: '-',
          comentario: '',
        },
        opcionesDesayuno: ['Yogurt con Granola y Frutas', 'Rebanada de Pan Integral con Queso Untable y Huevo Revuelto + Infusión', 'Panqueque de Avena con Fruta y Mantequilla de Maní + Infusión', 'Avena con Leche y Frutos Secos', 'Wafle o Budín Integral + Infusión', 'Yogurt con Compota y Semillas de Sésamo'],
        opcionesAlmuerzo: ['Enzalada de Zanahoria y Tomate, Palta, Huevo Duro + Omelette', 'Puré de Ciruelas + 1 Bife de Cerdo', 'Ensalada de Rúcula, Apio y Tomate + 1/2 Pechiga de Pollo + 2 Ciruelas', '1 Porción de Lomo + Pure de Zapallo', 'Soufleé de Verduras + 2 Rodajas de Cerdo', 'Asado + Ensalada Rusa'],
        opcionesMerienda: ['Yogurt con Trocitos de Fruta de Temporada', 'Yogurt Descremado con Avena', 'Infusión con Pan Árabe con 1 Casette de Queso Port Salut Light', 'Infusión + 1 Rebanada de Pan con Mermelada', 'Infusión + 1 Figazza con Queso Blanco', 'Infusión + Pan Integral con Mermelada'],
        opcionesCena: ['Sopa de Verduras + Tortilla de Verduras + 1 Pera', 'Milanesa de Carne con Revuelto de Zapallitos', 'Porción de Tarta de Espinaca y Ricota con Ensalada de Zanahoria y Huevo', 'Bife de Cerdo con Puré de Batatas y Ensalada de Tomate y Lechuga', 'Pata Muslo con Calabazas al Horno Gratinadas con Queso', 'Hamburguesa de Carne Casera en Pan Árabe con Jamón, Queso, Lechuga y Tomate'],
        formularioGuardado: null,
        formulariosGuardados: [],
        validarDia: true,
      };
    },
    methods: {
      obtenerFechaActual() {
        const hoy = new Date();
        const mes = hoy.getMonth() + 1;
        const dia = hoy.getDate();
        const fecha = `${hoy.getFullYear()}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
        return fecha;
      },
      guardarFormulario() {
        const fechaIngresada = new Date(this.form.dia);
        const fechaActual = new Date();
  
        if (isNaN(fechaIngresada.getTime()) || fechaIngresada > fechaActual) {
          this.validarDia = false;
          return;
        } else {
          this.validarDia = true;
        }
  
        console.log('Guardando formulario...');
        if (this.formularioGuardado) {
          const index = this.formulariosGuardados.findIndex(f => f.dia === this.form.dia);
          if (index !== -1) {
            this.$set(this.formulariosGuardados, index, { ...this.form });
          }
        } else {
          this.formulariosGuardados.push({ ...this.form });
        }
  
        localStorage.setItem('formularios', JSON.stringify(this.formulariosGuardados));
        this.formularioGuardado = null;
        this.form = {
          dia: '',
          desayuno: '-',
          almuerzo: '-',
          merienda: '-',
          cena: '-',
          comentario: '',
        };
        console.log('Formulario guardado:', this.formulariosGuardados);
      },
      borrarFormulario(formulario) {
        console.log('Borrando formulario...');
        const index = this.formulariosGuardados.findIndex(f => f.dia === formulario.dia);
        if (index !== -1) {
          this.formulariosGuardados.splice(index, 1);
        }
        localStorage.setItem('formularios', JSON.stringify(this.formulariosGuardados));
  
        this.formularioGuardado = null;
        this.form = {
          dia: '',
          desayuno: '-',
          almuerzo: '-',
          merienda: '-',
          cena: '-',
          comentario: '',
        };
        console.log('Formulario reiniciado:', this.form);
      },
      cargarFormulario(formulario) {
        this.formularioGuardado = formulario;
        this.form = { ...formulario };
        console.log('Formulario cargado para editar:', this.form);
      },
    },
    mounted() {
      const formulariosGuardados = localStorage.getItem('formularios');
      if (formulariosGuardados) {
        this.formulariosGuardados = JSON.parse(formulariosGuardados);
        console.log('Formularios cargados al inicio:', this.formulariosGuardados);
      }
    },
  };
  </script>  
  
  <style>

  .containerf{
    background-color: rgba(27, 27, 27, 0.7);
	margin: 15px auto;
	box-shadow: 2px 2px 4px black;
	border-radius: 10px;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
  }

  .containerf h2{
    text-shadow: 2px 2px 4px black;
    padding: 0 0.5em 0.3em 0.5em;
    background-color: rgba(10, 10, 10, 0.4);
    border-bottom: 1px rgb(88, 221, 88) solid;
    font-size: 16pt;
    text-align: center;
    color: rgb(209, 209, 209);
    font-family: 'Roboto', sans-serif;
  }

  .containerf .btnguardar{
    text-align: center;
  }

  .containerf .btneob{
    display: flex;
    gap: 10px;
  }

  .formguard{
    display: flex;
    gap: 20px;
    margin: 10px;
  }

  .formulario-guardado {
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 4px black;
    border-radius: 5px;
    background-color: rgba(20, 20, 20, 0.8);
    font-family: 'Montserrat', sans-serif;
  }

  .error {
  color: red;
  font-size: 0.8em;
}
  
  </style>
  