import React, { useState } from 'react';
import { HiEnvelope, HiPhone } from 'react-icons/hi2';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState({ message: '', status: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formSubmitEndpoint = "https://formsubmit.co/mdshamse19@gmail.com";
  
    try {
      const res = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setResponseMessage({ message: 'Form submitted successfully!', status: 'success' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setResponseMessage({ message: 'Submission failed!', status: 'error' });
      }
    } catch (error) {
      setResponseMessage({ message: 'Network error, please try again', status: 'error' });
    } finally {
      setLoading(false);
      setTimeout(() => setResponseMessage({ message: '', status: '' }), 5000);
    }
  };
  
  return (
    <section className="w-full px-4 lg:px-0 py-24  bg-gray-50 dark:bg-gray-900" id="Contact">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Contact</h2>
        <div className="w-full tracking-wide space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:mdshamse19@gmail.com" className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2">
              <HiEnvelope className="w-6 h-6" />
              <span>mdshamse@gmail.com</span>
            </a>
            <a href="tel:+917986039442" className="text-sm hover:text-gray-400 font-medium flex items-center space-x-2">
              <HiPhone className="w-6 h-6" />
              <span>+91-7986039442</span>
            </a>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} 
                className="px-2 py-2 w-full  bg-gray-50 dark:bg-gray-900 border border-zinc-700 rounded-md" placeholder="Example" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} 
                className="px-2 py-2 w-full  bg-gray-50 dark:bg-gray-900 border border-zinc-700 rounded-md" placeholder="example@gmail.com" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} 
                className="px-2 py-2 w-full h-40  bg-gray-50 dark:bg-gray-900 border border-zinc-700 rounded-md" placeholder="Hey, have a query? Write here. We'll get back soon..." required />
            </div>
            <button type="submit" className="w-full py-1.5 text-white font-medium dark:text-black dark:hover:text-white bg-black dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-700 flex items-center justify-center rounded-md">
              {loading ? <div className="w-6 h-6 border border-t-2 border-t-white dark:border-t-gray-700 border-transparent rounded-full animate-spin"></div> : <span>Submit</span>}
            </button>
            {responseMessage.message && (
              <div className={`text-center ${responseMessage.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {responseMessage.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;