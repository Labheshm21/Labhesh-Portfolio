import React from 'react';
import { Mail, MapPin, Send,Phone } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      toast.success('✅ Message sent!');
      formRef.current.reset();
    } catch {
      toast.error('❌ Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable inline styles
  const sectionStyle = {
    backgroundColor: 'var(--page-bg)',
    padding: '4rem 0'
  };

  const cardStyle = {
    backgroundColor: 'var(--card-bg)',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  };

  const iconCircle = {
    backgroundColor: 'var(--accent-bg)',
    borderRadius: '9999px',
    padding: '0.7rem',
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const
  };

  return (
    <section id="contact" style={sectionStyle}>
      <Toaster position="top-right" />

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Left Info Card */}
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginTop: 0, fontSize: '2rem', color: 'var(--accent)' }}>
            Get in Touch
          </h2>
          <p style={{ color: 'white' }}>
            Feel free to ping me about collabs, job offers, or just to say hi.
          </p>

          <div style={{ marginTop: '2rem', display: 'grid', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
              <div style={iconCircle}>
                <Mail style={{ color: 'var(--accent)', width: 20, height: 20 }} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>Email</p>
                <p style={{ margin: 0, fontWeight: 500 }}>labheshmahajan01@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
              <div style={iconCircle}>
                <MapPin style={{ color: 'var(--accent)', width: 20, height: 20 }} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>Location</p>
                <p style={{ margin: 0, fontWeight: 500 }}>Worcester,MA</p>
              </div>
              
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={iconCircle}>
                <Phone style={{ color: 'var(--accent)', width: 24, height: 24 }} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.75 }}>Phone</p>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 500 }}>+1 (774) 312 9812</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form Card */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          style={cardStyle}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'grid', gap: '1rem' }}>
            <label style={{ fontSize: '0.875rem', color: 'white' }}>Name</label>
            <input
              name="user_name"
              required
              style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db' }}
            />

            <label style={{ fontSize: '0.875rem', color: 'white' }}>Email</label>
            <input
              name="user_email"
              type="email"
              required
              style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db' }}
            />

            <label style={{ fontSize: '0.875rem', color: 'white' }}>Message</label>
            <textarea
              name="message"
              rows={4}
              required
              style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', resize: 'vertical' }}
            />
          </div>
<br/>
          <motion.button
           type="submit"
           disabled={isSubmitting}
           style={{
             // full width, large padding, accent color from var, etc.
             width: '100%',
             padding: '0.75rem 1.25rem',
             border: 'none',
             borderRadius: '0.75rem',
             backgroundColor: 'var(--accent)',
             color: 'var(--fg-on-accent)',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             gap: '0.5rem',
             cursor: isSubmitting ? 'not-allowed' : 'pointer',
             opacity: isSubmitting ? 0.7 : 1,
             boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
             transition: 'transform 0.1s ease, opacity 0.2s ease'
           }}
           whileHover={isSubmitting ? {} : { scale: 1.02 }}
           whileTap={isSubmitting ? {} : { scale: 0.98 }}
          >
            {isSubmitting
              ? 'Sending…'
              : (<>
                   <Send style={{ width: 18, height: 18 }} />
                   <span>Send Message</span>
                 </>)
            }
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}