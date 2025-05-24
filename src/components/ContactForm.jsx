import { useState } from "react";
import { Input, Button, Checkbox, Form, message } from "antd";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !email) {
      message.warning("Los campos están vacíos");
      return;
    }

    message.success(
      `Registrado ${nombre} ${apellido} con el correo electrónico ${email}`,
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Formulario de Contacto
      </h2>

      <Form layout="vertical" onSubmitCapture={handleSubmit}>
        <Form.Item label="Nombre" required>
          <Input
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Apellido" required>
          <Input
            placeholder="Tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Correo electrónico" required>
          <Input
            type="email"
            placeholder="tucorreo@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          >
            Quiero suscribirme
          </Checkbox>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
