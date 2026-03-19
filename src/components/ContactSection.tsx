import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  GithubIcon,
  SendIcon } from
'lucide-react';
// Animated Input Component
const AnimatedInput = ({
  id,
  name,
  label,
  type = 'text',
  isTextArea = false,
  value,
  onChange





}: {id: string;name: string;label: string;type?: string;isTextArea?: boolean;value: string;onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;}) => {
  const [isFocused, setIsFocused] = useState(false);
  const active = isFocused || value.length > 0;
  return (
    <div className="relative flex flex-col gap-2 mt-4">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${active ? '-top-6 text-xs text-accent-pink' : 'top-4 text-sm text-text-muted'}`}>
        {label}
      </label>
      {isTextArea ?
      <textarea
        id={id}
        name={name}
        rows={5}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
        className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none shadow-inner">
      </textarea> :

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
        className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-inner" />

      }
    </div>);

};
export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_pk0ogjj',
      'template_c2t4gk4',
      {
        from_name: form.name,
        to_name: 'Bamlake Feleke',
        from_email: form.email,
        to_email: 'bamlakefele@gmail.com',
        message: form.message,
      },
      'N2LA5PqhAJ_7oc_Wn'
    ).then(() => {
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert('Ahh, something went wrong. Please try again.');
    });
  };
  return (
    <section className="py-32 relative z-10 overflow-hidden" id="contact">
      {/* Decorative Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black text-white opacity-[0.02] whitespace-nowrap -rotate-6 pointer-events-none select-none z-0 tracking-tighter">
        LET'S TALK
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-20 text-center">
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent font-mono text-sm uppercase tracking-widest">
              Contact
            </span>
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          <h2 className="text-5xl font-black mb-4 inline-block relative text-shadow-glow">
            Get In Touch
            <div className="absolute -bottom-3 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-accent to-accent-pink rounded-full" />
          </h2>
          <p className="text-xl text-text-muted mt-8 max-w-2xl mx-auto font-light">
            Currently available for freelance opportunities or full-time roles.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative">
          {/* Decorative Animated Circle */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl z-0 pointer-events-none" />
          

          {/* Left: Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:col-span-2 flex flex-col gap-6 relative z-10">
            
            <a
              href="mailto:bamlakefele@gmail.com"
              className="glass p-6 rounded-3xl flex items-center gap-5 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg">
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-pink/20 flex items-center justify-center group-hover:from-accent group-hover:to-accent-pink transition-all duration-300 border border-white/10">
                <MailIcon className="w-6 h-6 text-accent-pink group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1 font-medium uppercase tracking-wider">
                  Email
                </p>
                <p className="text-white font-bold text-lg tracking-wide">
                  bamlakefele@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+251939616044"
              className="glass p-6 rounded-3xl flex items-center gap-5 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg">
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-pink/20 flex items-center justify-center group-hover:from-accent group-hover:to-accent-pink transition-all duration-300 border border-white/10">
                <PhoneIcon className="w-6 h-6 text-accent-pink group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1 font-medium uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-white font-bold text-lg tracking-wide">
                  +251 939 616 044
                </p>
              </div>
            </a>

            <div className="flex gap-4 mt-2">
              <a
                href="https://linkedin.com/in/bamlake-feleke-37a279264"
                target="_blank"
                rel="noreferrer"
                className="flex-1 glass p-6 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-[#0A66C2]/50 hover:bg-gradient-to-br hover:from-[#0A66C2]/20 hover:to-[#0A66C2]/5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                
                <LinkedinIcon className="w-8 h-8 text-text-muted group-hover:text-[#0A66C2] transition-colors relative z-10" />
                <span className="text-sm font-bold tracking-wide relative z-10">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/beamlakefeleke"
                target="_blank"
                rel="noreferrer"
                className="flex-1 glass p-6 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/20 hover:to-transparent transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                
                <GithubIcon className="w-8 h-8 text-text-muted group-hover:text-white transition-colors relative z-10" />
                <span className="text-sm font-bold tracking-wide relative z-10">
                  GitHub
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:col-span-3 glass-strong p-10 rounded-3xl relative z-10">
            
            <form
              ref={formRef}
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedInput id="name" name="name" label="Your Name" value={form.name} onChange={handleChange} />
                <AnimatedInput id="email" name="email" label="Your Email" type="email" value={form.email} onChange={handleChange} />
              </div>

              <AnimatedInput id="message" name="message" label="Message" isTextArea={true} value={form.message} onChange={handleChange} />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-accent to-accent-pink text-white font-black text-lg hover:glow-purple-strong transition-all duration-300 flex items-center justify-center gap-3 group mt-4 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                <span className="relative z-10 tracking-wider">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
                <SendIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}