import React from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import Magnetic from './Magnetic';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header">
           <div className="section-badge">
              <MessageSquare size={16} /> Open for Collaboration
           </div>
           <h2 className="heading-md">Let's Build Something <span className="text-gradient">Extraordinary</span></h2>
        </div>

        <div className="contact-grid">
           
           <div className="contact-info">
              <div className="contact-card glass-panel">
                 <div className="contact-item">
                    <div className="contact-icon"><Mail size={20} /></div>
                    <div className="contact-details">
                       <div className="contact-label">Email</div>
                       <a href="mailto:bhavinsolanki0815@gmail.com" className="contact-val">bhavinsolanki0815@gmail.com</a>
                    </div>
                 </div>

                 <div className="contact-item">
                    <div className="contact-icon"><MapPin size={20} /></div>
                    <div className="contact-details">
                       <div className="contact-label">Location</div>
                       <div className="contact-val">Surat, Gujarat India</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="contact-form glass-panel">
              <form>
                <div className="form-group row">
                   <div className="input-group">
                      <label>Name</label>
                      <input type="text" placeholder="Your Name" />
                   </div>
                   <div className="input-group">
                      <label>Email</label>
                      <input type="email" placeholder="Email Address" />
                   </div>
                </div>

                <div className="form-group">
                   <label>Message</label>
                   <textarea placeholder="Tell me about your project..."></textarea>
                </div>

                <Magnetic>
                   <button type="submit" className="btn-premium primary" style={{ width: '100%' }}>
                      Send Message <Send size={20} />
                   </button>
                </Magnetic>
              </form>
           </div>

        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 30px;
          margin-top: 4rem;
        }

        .contact-card {
          padding: 40px;
          border-radius: 24px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          height: 100%;
        }

        .contact-item {
          display: flex; gap: 1.5rem; align-items: center;
        }

        .contact-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(0, 242, 255, 0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-primary);
        }

        .contact-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .contact-val {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
        }

        .contact-form {
          padding: 40px;
          border-radius: 24px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group.row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
        }

        .input-group label {
          display: block; margin-bottom: 10px; font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);
        }

        .input-group input, .form-group textarea {
          width: 100%; padding: 14px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: #fff;
          font-family: inherit;
          transition: 0.2s;
        }

        .input-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-primary);
          outline: none;
        }

        .form-group textarea {
          height: 180px; resize: none;
        }

        @media (max-width: 1100px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .form-group.row { grid-template-columns: 1fr; }
          .contact-form { padding: 30px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
