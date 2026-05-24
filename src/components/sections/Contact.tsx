import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

interface FORM {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function Contact() {
  const [form, setForm] = useState<FORM>({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      alert("Por favor, completa todos los campos antes de enviar el mensaje.");
      return;
    }

    const templateForm = {
      nombre: form.nombre,
      email: form.email,
      mensaje: form.mensaje,
    };

    setLoading(true);
    setStatusMessage("");

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID as string,
        import.meta.env.VITE_TEMPLATE_ID as string,
        templateForm,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (response) => {
          console.log("Mensaje enviado:", response.status, response.text);
          setStatusMessage(
            "¡Mensaje enviado con éxito! Gracias por ponerte en contacto conmigo.",
          );
          setLoading(false);
          setForm({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setStatusMessage(
            "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
          );
          setLoading(false);
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="w-full lg:w-1/2 px-4">
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header>
          <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
          <p className="text-lg text-justify dark:text-gray-400">
            Si deseas ponerte en contacto conmigo, puedes enviarme un correo
            electrónico.
          </p>
        </header>

        <section className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full sm:w-sm lg:w-lg m-auto dark:bg-(--ascent-primary-30) bg-(--ascent-primary-30) p-6 rounded-lg shadow-md"
          >
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nombre
                </label>
                <input
                  required
                  type="text"
                  id="nombre"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="mt-1 py-2 px-4 block w-full rounded-md shadow-sm dark:text-white dark:bg-gray-700 dark:border-(--ascent-primary)"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Correo Electrónico
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 py-2 px-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </motion.div>
            </article>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Mensaje
              </label>
              <textarea
                required
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                rows={4}
                className="mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              type="submit"
              className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </form>
        </section>

        {statusMessage && <p className="text-sm">{statusMessage}</p>}
      </motion.div>
    </section>
  );
}
