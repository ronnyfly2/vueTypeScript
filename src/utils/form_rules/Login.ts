export default function () {
  return {
    email: [
      {
        required: true,
        message: "Correo es requerido",
        trigger: ["blur", "change"],
      },
      {
        type: "email",
        message: "Ingrese un correo válido",
        trigger: ["blur", "change"],
      },
    ],
    password: [
      {
        required: true,
        message: "Contraseña es requerida",
        trigger: ["blur", "change"],
      },
      {
        min: 6,
        message: "Debe tener al menos 6 caracteres",
        trigger: ["blur", "change"],
      },
    ],
  };
}
