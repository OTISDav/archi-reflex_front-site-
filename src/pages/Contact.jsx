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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

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
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess(true);
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
      setError("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="internship-form-container">
      <form className="internship-form" onSubmit={handleSubmit}>
        <h1>Stage / Internship</h1>

        {success && <p className="text-green-400">Votre candidature a été envoyée !</p>}
        {error && <p className="text-red-400">{error}</p>}

        <div className="grid-2">
          <input
            type="text"
            name="name"
            placeholder="Nom / Name"
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
        </div>

        <div className="grid-2">
          <input
            type="text"
            name="phone"
            placeholder="Téléphone / Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="school"
            placeholder="École / School"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />

        <div className="grid-2">
          <label>
            CV (PDF)
            <input
              type="file"
              name="cv"
              accept=".pdf"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Lettre de motivation (PDF)
            <input
              type="file"
              name="letter"
              accept=".pdf"
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
