import { useState, useRef, useEffect } from 'react';
import './AIChatPanel.css';

const MOCK_RESPONSES = [
  'I can help you generate a dataset. Try: "Create a dataset of GDP growth for ASEAN countries 2020-2024" or "Compare inflation rates across South Asia."',
  'Dataset generated. You can save it to this space and share with your team from the dataset card.',
  'To invite collaborators, open the space and click "Invite" to add members by email.',
];

export default function AIChatPanel({ open, onToggle }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I\'m your ERDI Data Assistant. I can help you generate new datasets from economic indicators, compare countries, and run simple simulations. What would you like to do?' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      const reply = MOCK_RESPONSES[Math.min(messages.length, MOCK_RESPONSES.length - 1)];
      setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    }, 600);
  };

  return (
    <>
      <button
        type="button"
        className="ai-panel-toggle"
        onClick={onToggle}
        aria-label={open ? 'Close AI panel' : 'Open AI panel'}
        title="AI Assistant"
      >
        {open ? '→' : '←'} AI
      </button>
      {open && (
        <aside className="ai-chat-panel">
          <div className="ai-panel-header">
            <h3>AI Assistant</h3>
            <p className="ai-panel-subtitle">Generate datasets, compare indicators, simulate scenarios</p>
          </div>
          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ai-msg-${msg.role}`}>
                <span className="ai-msg-label">{msg.role === 'user' ? 'You' : 'Assistant'}</span>
                <p>{msg.text}</p>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <form className="ai-input-form" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask to generate a dataset or compare indicators..."
              aria-label="Message"
            />
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </aside>
      )}
    </>
  );
}
