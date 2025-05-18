import React, { useState } from 'react';
import { MapPin, Mail, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-sky-500" />,
      title: 'Location',
      content: 'BVRIT , Narsapur',
    },
    {
      icon: <Mail className="h-5 w-5 text-lavender-500" />,
      title: 'Email',
      content: '22211a0568@bvrit.ac.in',
    },
    
  ];
  
  return (
    <section id="contact" className="py-24 relative bg-gradient-to-br from-sky-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 right-1/4 w-72 h-72 bg-sky-200/40 dark:bg-sky-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-green-200/40 dark:bg-green-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-sky-500">Touch</span></h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">Have a project in mind or just want to say hello? Feel free to reach out!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="opacity-80">{item.content}</p>
                </div>
              </div>
            ))}
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
  <h3 className="text-lg font-medium mb-4">Follow Me</h3>
  <div className="flex space-x-4">
    
    <a 
      href="https://www.linkedin.com/in/sriharinichoul" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.2c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 10.2h-3v-4.5c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
      </svg>
    </a>

    
    <a 
      href="https://github.com/sriharinichoul" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    </a>

  
    <a 
      href="mailto:22211a0568@bvrit.ac.in" 
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M1.5 6.75v10.5a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75zm2.25-.75h16.5c.414 0 .75.336.75.75v.638l-9 5.625-9-5.625V6.75c0-.414.336-.75.75-.75zm-.75 2.622l8.664 5.418a.75.75 0 00.822 0L21 8.622V17.25a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V8.622z"/>
      </svg>
    </a>
  </div>
</div>

          </div>
          
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-sky-500 flex items-center justify-center transition-opacity duration-500 ease-in-out ${isSubmitted ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="text-center text-white">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-sky-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 outline-none transition-colors duration-300"
                    placeholder="enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-sky-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 outline-none transition-colors duration-300"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-sky-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 outline-none transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-sky-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 outline-none transition-colors duration-300 resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-6 py-3 rounded-lg font-medium text-white relative overflow-hidden transition-all duration-300 ${
                  isSubmitting || isSubmitted 
                    ? 'bg-green-500 cursor-not-allowed opacity-90' 
                    : 'bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 shadow-md hover:shadow-lg'
                }`}
              >
                <span className={`flex items-center justify-center transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isSubmitting ? 'opacity-100' : 'opacity-0'}`}>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;