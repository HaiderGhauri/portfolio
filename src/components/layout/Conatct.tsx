import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactIcons from '../ui/Contact-Icons';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(50, { message: 'Name must be less than 50 characters' }),
  email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }).max(500, { message: 'Message must be less than 500 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validatedData = contactSchema.parse(formData);
      setErrors({});
      setStatusMessage(null);

      const response = await fetch('https://formspree.io/f/xnnpbaek', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatusMessage(null), 3000);
      } else {
        setStatusMessage({ type: 'error', text: 'Error sending message.' });
        setTimeout(() => setStatusMessage(null), 3000);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages: Record<string, string> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          errorMessages[field] = err.message;
        });
        setErrors(errorMessages);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <section
      id="contact"
      className=" bg-slate-800 text-slate-100 px-6 xl:px-0 py-20 shadow-2xl rounded-3xl border border-slate-600"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Text */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6">
              Send me a message, and I'll get back to you!
            </p>
            <ContactIcons showlabel={true} className='flex-col' />
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 rounded-lg bg-slate-700/50 text-slate-100 border border-slate-600 focus:outline-none focus:border-purple-400 w-full"
                required
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 rounded-lg bg-slate-700/50 text-slate-100 border border-slate-600 focus:outline-none focus:border-purple-400 w-full"
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded-lg bg-slate-700/50 text-slate-100 border border-slate-600 focus:outline-none focus:border-purple-400 w-full"
                required
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }} // Honeypot field
            />
            <button
              type="submit"
              className="bg-purple-600 text-white p-3 rounded-lg cursor-pointer hover:bg-purple-500 transition hover:scale-102"
            >
              Send Message
            </button>
            
            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {statusMessage.text}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;