import { useState } from "react";
import CustomInput from "./CustomInput";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [toast, setToast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !email) {
      setToast("Por favor completá todos los campos.");
      return;
    }

    setToast(`Registrado ${nombre} ${apellido} con el correo ${email}`);

    setNombre("");
    setApellido("");
    setEmail("");
    setChecked(false);

    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-4 relative mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Formulario de Contacto
      </h2>

      {toast && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded shadow text-sm">
          {toast}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <CustomInput
          label="Nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
        />

        <CustomInput
          label="Apellido"
          name="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Tu apellido"
        />

        <CustomInput
          label="Correo electrónico"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@example.com"
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="accent-green-600"
          />
          <span>Quiero suscribirme</span>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
