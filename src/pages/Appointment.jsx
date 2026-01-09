import { motion } from "framer-motion";
import { useState } from "react";
import api from "../api/axios"; 
import "./Appointment.css";

const PROJECT_TYPES = [
  "Logement",
  "Rénovation",
  "Architecture commerciale",
  "Urbanisme",
  "Santé",
  "Autre",
];

export default function Appointment() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [minTime, setMinTime] = useState("08:00");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const selected = new Date(value);
      const now = new Date();
      if (selected.toDateString() === now.toDateString()) {
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        setMinTime(`${hours}:${minutes}`);
      } else {
        setMinTime("08:00");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const res = await api.post("/appointments/appointments/", formData);

      setSuccess("Votre rendez-vous a été envoyé avec succès !");
      setFormData({
        name: "",
        email: "",
        phone: "",
        project_type: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="appointment">
      <motion.div
        className="appointment-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="appointment-title">Prendre rendez-vous</h1>
        <p className="appointment-subtitle">
          Merci de renseigner les informations ci-dessous.
        </p>

        {success && <div className="form-success">{success}</div>}
        {error && <div className="form-error">{error}</div>}

        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              required
            >
              <option value="">Type de projet</option>
              {PROJECT_TYPES.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              min={minTime}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Décrivez brièvement votre projet"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={submitting}>
            {submitting ? "Envoi..." : "Envoyer la demande"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
