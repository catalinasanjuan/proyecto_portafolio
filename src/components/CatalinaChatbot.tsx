// src/components/CatalinaChatbot.tsx
import React, { useState } from 'react';

const CatalinaChatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'CatalinaBot',
      text: '👋 ¡Hola! Soy CatalinaBot. Puedes preguntarme sobre mi experiencia, habilidades, proyectos o cómo contactarme profesionalmente.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);


const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: 'Tú', text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');
  setIsSending(true);

  try {
    // 1. Enviar mensaje al webhook de entrada
    await fetch('https://hook.us2.make.com/0ypbzvfjgcovtg72dpmx4re679fgeov2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });

    // 2. Esperar a que Make termine
    await new Promise((res) => setTimeout(res, 2500));

    // 3. Obtener la respuesta desde el webhook con el mensaje como parámetro
    const response = await fetch(
      `https://hook.us2.make.com/0ypbzvfjgcovtg72dpmx4re679fgeov2?text=${encodeURIComponent(input)}`
    );
    const resultJson = await response.json();
    const resultText = resultJson.result;


    setMessages((prev) => [...prev, { sender: 'CatalinaBot', text: resultText }]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        sender: 'CatalinaBot',
        text: 'Lo siento, hubo un error al procesar tu mensaje. ¡Intenta nuevamente más tarde!',
      },
    ]);
  } finally {
    setIsSending(false);
  }
};


  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-lg shadow-lg z-50">
      <div className="bg-blue-600 text-white p-2 rounded-t-lg flex justify-between items-center">
        <span>Chat con CatalinaBot</span>
        <button onClick={() => window.location.reload()} className="text-white font-bold">×</button>
      </div>
      <div className="p-2 h-64 overflow-y-auto text-sm">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex gap-1">
        <input
          className="flex-1 border rounded px-2 text-sm"
          type="text"
          placeholder="Ej: ¿Qué habilidades blandas tiene Catalina?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isSending}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-3 rounded text-sm"
          disabled={isSending}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default CatalinaChatbot;