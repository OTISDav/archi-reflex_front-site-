import { useState } from "react";
import axios from "../api/axios";
import "./Internship.css";

export default function Internship() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
    cv: null,
    letter: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* Gestion changement */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      // Vérifier PDF
      if (file && file.type !== "application/pdf") {
        alert("Veuillez sélectionner un fichier PDF uniquement.");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  /* Envoi */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      await axios.post("/internships/internships/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);

      // Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        school: "",
        message: "",
        cv: null,
        letter: null,
      });

    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="internship">

      <div className="internship-container">

        {/* Titres */}
        <h1 className="internship-title">Stage / Internship</h1>

        <p className="internship-subtitle">
          Envoyez votre candidature pour rejoindre notre équipe
        </p>

        {/* Messages */}
        {success && (
          <div className="success-message">
            ✅ Candidature envoyée avec succès !
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {/* Formulaire */}
        <form className="internship-form" onSubmit={handleSubmit}>

          {/* Infos */}
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
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="school"
              placeholder="École / Université"
              value={formData.school}
              onChange={handleChange}
              required
            />

          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />

          {/* Upload */}
          <div className="file-group">

            {/* CV */}
            <div className="file-upload">

              <label htmlFor="cv">
                CV (PDF uniquement)
                <span className="file-hint">
                  Format : .pdf
                </span>
              </label>

              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,application/pdf"
                onChange={handleChange}
                required
              />

              {formData.cv && (
                <p className="file-name">
                  📄 {formData.cv.name}
                </p>
              )}

            </div>

            {/* Lettre */}
            <div className="file-upload">

              <label htmlFor="letter">
                Lettre de motivation (PDF uniquement)
                <span className="file-hint">
                  Format : .pdf
                </span>
              </label>

              <input
                type="file"
                id="letter"
                name="letter"
                accept=".pdf,application/pdf"
                onChange={handleChange}
                required
              />

              {formData.letter && (
                <p className="file-name">
                  📄 {formData.letter.name}
                </p>
              )}

            </div>

          </div>

          {/* Bouton */}
          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer ma candidature"}
          </button>

        </form>

      </div>

    </div>
  );
}
