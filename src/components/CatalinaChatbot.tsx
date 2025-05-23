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
  const [isOpen, setIsOpen] = useState(false);

  const suggestedQuestions = [
    '¿Qué habilidades blandas tiene Catalina?',
    '¿Cuál es su experiencia en automatización QA?',
    '¿Cómo puedo contactarla profesionalmente?',
  ];

  const handleSend = async (msg?: string) => {
    const finalInput = msg || input;
    if (!finalInput.trim()) return;

    const userMessage = { sender: 'Tú', text: finalInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      await fetch('https://hook.us2.make.com/0ypbzvfjgcovtg72dpmx4re679fgeov2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: finalInput }),
      });

      await new Promise((res) => setTimeout(res, 2500));

      const response = await fetch(
        `https://hook.us2.make.com/0ypbzvfjgcovtg72dpmx4re679fgeov2?text=${encodeURIComponent(finalInput)}`
      );
      const resultText = await response.text();

      setMessages((prev) => [...prev, { sender: 'CatalinaBot', text: resultText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'CatalinaBot',
          text: '❌ Lo siento, hubo un error al procesar tu mensaje. ¡Intenta nuevamente más tarde!',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          ¿Conversemos?
        </button>
      )}

      {/* Chat emergente */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-lg shadow-lg z-50">
          <div className="bg-blue-600 text-white p-2 rounded-t-lg flex justify-between items-center">
            <span>Chat con CatalinaBot</span>
            <button onClick={() => setIsOpen(false)} className="text-white font-bold">×</button>
          </div>
          <div className="p-2 h-64 overflow-y-auto text-sm">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}

            {/* Preguntas sugeridas */}
            {!isSending && (
              <div className="flex flex-wrap gap-2 mt-2">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="bg-gray-200 hover:bg-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
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
              onClick={() => handleSend()}
              className="bg-blue-600 text-white px-3 rounded text-sm"
              disabled={isSending}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalinaChatbot;
