import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Send, Mail, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = 'service_cilivuo';
    const templateID = 'template_dyov7jv';
    const publicKey = 'zfxFELN8iqgb29kEv';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          toast.success('Message sent successfully!', {
            position: "bottom-right",
            autoClose: 3000,
            theme: "light",
          });
          e.target.reset();
      }, (error) => {
          toast.error('Failed to send message. Please try again.', {
            position: "bottom-right",
            autoClose: 3000,
            theme: "light",
          });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-white/30 border-t border-white/40">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-16 h-1 bg-accent-blue mb-6 rounded-full opacity-50"></div>
            <p className="text-text-secondary mb-10 leading-relaxed text-lg">
              Whether you have a question, a project opportunity, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:aditkewate@example.com" className="flex items-center gap-4 text-text-secondary hover:text-accent-blue transition-colors group">
                <div className="w-12 h-12 bg-white/50 border border-white/60 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">aditkewate@example.com</span>
              </a>
              
              <a href="https://linkedin.com/in/adit-kewate-a7708225a/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-accent-blue transition-colors group">
                <div className="w-12 h-12 bg-white/50 border border-white/60 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                  <FaLinkedin size={20} />
                </div>
                <span className="font-medium text-lg">LinkedIn</span>
              </a>
              
              <a href="https://github.com/Kewateadit" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors group">
                <div className="w-12 h-12 bg-white/50 border border-white/60 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                  <FaGithub size={20} />
                </div>
                <span className="font-medium text-lg">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-8 md:p-10">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/80 rounded-xl outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:border-accent-cyan/50 focus:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all duration-500 placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/80 rounded-xl outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:border-accent-cyan/50 focus:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all duration-500 placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/80 rounded-xl outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:border-accent-cyan/50 focus:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all duration-500 placeholder:text-gray-400 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-2 bg-text-primary text-white px-6 py-4 rounded-xl font-medium transition-all duration-500 hover:bg-gray-800 hover:shadow-[0_5px_20px_rgba(0,0,0,0.15)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Toast container for notifications */}
      <ToastContainer toastClassName="!bg-white/80 !backdrop-blur-md !border !border-white/60 !shadow-lg !rounded-xl" />
      
      <div className="container mx-auto px-6 max-w-6xl mt-24 pt-8 border-t border-gray-200/50 text-center text-sm text-text-secondary">
        <p>© {new Date().getFullYear()} Adit Kewate. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60">Designed with minimal premium aesthetics.</p>
      </div>
    </section>
  );
}
