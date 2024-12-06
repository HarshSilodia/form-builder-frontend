import React from 'react';

const Question = ({ question, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({ ...question, [field]: value });
  };

  return (
    <div className="border p-4 my-3">
      <select
        value={question.type}
        disabled
        className="block border p-2 mb-2"
      >
        <option>{question.type}</option>
      </select>
      <textarea
        className="block border p-2 w-full"
        placeholder="Enter your question"
        value={question.question}
        onChange={(e) => handleChange('question', e.target.value)}
      />

      {question.type === 'Categorize' && (
        <div>
          <input
            type="text"
            className="block border p-2 w-full my-2"
            placeholder="Add options, separated by commas"
            onChange={(e) =>
              handleChange('options', e.target.value.split(',').map((opt) => opt.trim()))
            }
          />
        </div>
      )}
    </div>
  );
};

export default Question;
