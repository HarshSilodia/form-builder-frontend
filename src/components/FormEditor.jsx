import React, { useState } from 'react';
import { saveForm } from '../utils/api';  // API utility to save the form
import Question from './Question';
import HeaderImageUploader from './HeaderImageUploader';

const FormEditor = () => {
  const [form, setForm] = useState({
    title: '',
    headerImage: '',
    questions: [],
  });

  const addQuestion = (type) => {
    const newQuestion = { 
      type, 
      question: '', 
      options: [],
      image: '',
      answer: '',
    };
    setForm({ ...form, questions: [...form.questions, newQuestion] });
  };

  const handleSave = async () => {
    try {
      const response = await saveForm(form);
      alert(`Form saved! Form ID: ${response.data._id}`);
    } catch (error) {
      console.error('Error saving form:', error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Form Editor</h1>
      
      <input
        type="text"
        placeholder="Form Title"
        className="block border p-2 my-3 w-full"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      {/* Header Image Upload */}
      <HeaderImageUploader
        onUpload={(imageUrl) => setForm({ ...form, headerImage: imageUrl })}
      />

      <div className="my-3">
        <button 
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={() => addQuestion('Categorize')}
        >
          Add Categorize Question
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 mr-2"
          onClick={() => addQuestion('Cloze')}
        >
          Add Cloze Question
        </button>
        <button 
          className="bg-purple-500 text-white px-4 py-2"
          onClick={() => addQuestion('Comprehension')}
        >
          Add Comprehension Question
        </button>
      </div>

      {/* Render questions */}
      {form.questions.map((q, idx) => (
        <Question
          key={idx}
          question={q}
          onUpdate={(updatedQuestion) =>
            setForm({
              ...form,
              questions: form.questions.map((ques, i) =>
                i === idx ? updatedQuestion : ques
              ),
            })
          }
        />
      ))}

      <button className="bg-orange-500 text-white px-6 py-2 mt-4" onClick={handleSave}>
        Save Form
      </button>
    </div>
  );
};

export default FormEditor;
