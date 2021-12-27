jQuery.validator.addMethod("accept", function(value, element, param){
  return value.match(new RegExp("." + param + "$"));
})

function calcularEdad (){
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var currentTime = new Date();
  var edad = currentTime.getFullYear() - parseInt(year);
  var m = currentTime.getMonth() - parseInt (month);

  if (m < 0 || (m === 0 && currentTime.getDate() < parseInt(day))) {
    edad--;
  }
  return edad;
  }
  var edad = calcularEdad;
  if (edad<18){
    alert ("Debes ser mayor de edad para enviar el formulario");
  }

$("#signupForm").validate({
    rules:{
      name:{
        required: true,
        minlength: 2,
        maxlength: 25,
        number: false,
        accept: "[a-zA-Z]+"
      },
      lastname: {
        required: true,
        minlength: 2,
        maxlength: 25,
        number: false,
        accept: "[a-zA-Z]+"
      },
      id:{
        required: true,
        number: true,
        min: 6,
        max: 12
      },
      tel:{
        required: true,
        number: true,
        min: 7,
        max: 12
      },
      mail:{
        required: true,
        email:true
      },
      prov:"required",
      gen:"required",
      day:{
        required: true,
        number: true,
        min: 2,
        max: 2
      },
      month:"required",
      year:{
        required: true,
        number: true,
        min: 4,
        max: 4
      },
      agree:"required"
    },
    messages:{
      name:{
        required: "Este campo es obligatorio",
        minlength:"Su nombre debe tener al menos 2 caracteres",
        maxlength: "Su nombre debe tener menos de 25 caracteres",
        number: "Por favor ingrese solo letras",
        accept: "Por favor ingrese solo letras"
      },
      lastname: {
        required: "Este campo es obligatorio",
        minlength:"Su apellido debe tener al menos 2 caracteres",
        maxlength: "Su nombre debe tener menos de 25 caracteres",
        number: "Por favor ingrese solo letras",
        accept: "Por favor ingrese solo letras"
      },
      id:{
        required: "Este campo es obligatorio",
        number: "Por favor ingrese solo números",
        min: "Su identificación debe tener al menos 6 caracteres",
        max: "Su identificación debe tener máximo 12 caracteres"
      },
      tel:{
        required: "Este campo es obligatorio",
        number: "Por favor ingrese solo números",
        min: "Su teléfono debe tener al menos 7 caracteres",
        max: "Su teléfono debe tener máximo 12 caracteres"
      },
      mail:{
        required: "Este campo es obligatorio",
        email:"Ingrese un correo valido"
      },
      prov:"Este campo es obligatorio",
      gen:"Este campo es obligatorio",
      day:{
        required: "Este campo es obligatorio",
        number: "Por favor ingrese solo números",
        min: "Su teléfono debe tener al menos 2 caracteres",
        max: "Su teléfono debe tener máximo 2 caracteres"
      },
      month:"Este campo es obligatorio",
      year:{
        required: "Este campo es obligatorio",
        number: "Por favor ingrese solo números",
        min: "Su teléfono debe tener al menos 4 caracteres",
        max: "Su teléfono debe tener máximo 4 caracteres"
      },
      agree:"Debes aceptar terminos y condiciones"
    }
})
