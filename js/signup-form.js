$(document).ready(function(){
    $(#signupForm).validate({
        rules:{
          name:{
            required: true,
            minlength:2
          },
          lastname: {
            required: true,
            minlength:2
          },
          id={
            required: true,
            minlength:6
          },
          tel={
            required: true,
            minlength:7
          },
          mail={
            required: true,
            email:true
          },
          prov="required",
          gen="required",
          day={
            required: true,
            minlength:2
          },
          month="required",
          year={
            required: true,
            minlength:2
          },
          agree:"required"
        },
        messages{
          name:{
            required: "Este campo es obligatorio",
            minlength:"Su nombre debe tener al menos 2 caracteres"
          },
          lastname: {
            required: "Este campo es obligatorio",
            minlength:"Su apellido debe tener al menos 2 caracteres"
          },
          id={
            required: "Este campo es obligatorio",
            minlength:"Su identificación debe tener al menos 6 caracteres"
          },
          tel={
            required: "Este campo es obligatorio",
            minlength:"Su telefono debe tener al menos 7 caracteres"
          },
          mail={
            required: "Este campo es obligatorio",
            email:true
          },
          prov="Este campo es obligatorio",
          gen="Este campo es obligatorio",
          day={
            required: "Este campo es obligatorio",
            minlength:"El dia debe tener 2 caracteres"
          },
          month="Este campo es obligatorio",
          year={
            required: "Este campo es obligatorio",
            minlength:"El año debe tener 4 caracteres"
          },
          agree:"Debes aceptar terminos y condiciones"
        }
    })
});