import React, { useState } from 'react';
import '../styles/BookingComponent.css'; // Asegúrate de tener el archivo CSS correspondiente.

const BookingComponent = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar la cita, como enviarla a la base de datos
    alert(`Cita agendada:\nFecha: ${date}\nHora: ${time}\nNotas: ${notes}`);
  };

  return (
    <div className="booking-container">
      <h2>Agendar Cita</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Hora:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <label>
          Notas (opcional):
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Algo que deba saber el barbero..."
          />
        </label>
        <button type="submit">Confirmar Cita</button>
      </form>
    </div>
  );
};

export default BookingComponent;
