import React from 'react';

const FormPreview = ({ form }) => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{form.title}</h1>
      {form.headerImage && <img src={form.headerImage} alt="Header" />}
      {form.questions.map((q, idx) => (
        <div key={idx} className="border p-4 my-3">
          <p>{q.question}</p>
          {q.type === 'Categorize' && (
            <ul>
              {q.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;
