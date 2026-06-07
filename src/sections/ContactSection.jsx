import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from '../hooks/useCustomHooks';
import { validateEmail, sendEmail } from '../utils/helpers';
import Notification from '../components/Notification';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';

/**
 * Contact Section Component with form validation and EmailJS integration
 */
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setNotification({
        message: 'Please enter your name',
        type: 'error',
        visible: true,
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setNotification({
        message: 'Please enter a valid email',
        type: 'error',
        visible: true,
      });
      return;
    }

    if (!formData.subject.trim()) {
      setNotification({
        message: 'Please enter a subject',
        type: 'error',
        visible: true,
      });
      return;
    }

    if (!formData.message.trim()) {
      setNotification({
        message: 'Please enter a message',
        type: 'error',
        visible: true,
      });
      return;
    }

    setIsLoading(true);

    // Send email (you need to configure EmailJS credentials)
    const result = await sendEmail(
      'your-email@example.com', // Replace with your email
      formData.name,
      formData.email,
      formData.subject,
      formData.message
    );

    setIsLoading(false);

    if (result.success) {
      setNotification({
        message: result.message,
        type: 'success',
        visible: true,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setNotification({
        message: result.message,
        type: 'error',
        visible: true,
      });
    }

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto" />
          <p className="text-slate-300 mt-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Email */}
            <motion.a
              whileHover={{ x: 10 }}
              href="prajapatvikas992@gmail.com"
              className="glassmorphism p-6 rounded-xl flex items-start gap-4 group cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-all">
                <FaEnvelope className="text-cyan-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-slate-400">prajapatvikas992@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              whileHover={{ x: 10 }}
              href="tel:+91-8233151526"
              className="glassmorphism p-6 rounded-xl flex items-start gap-4 group cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/40 transition-all">
                <MdPhone className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-slate-400">+91-8233151526</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ x: 10 }}
              className="glassmorphism p-6 rounded-xl flex items-start gap-4 group cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/40 transition-all">
                <MdLocationOn className="text-purple-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-slate-400">Jaipur, Rajasthan</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/vikas-prajapat-53a909293/', color: 'text-blue-400' },
                  { icon: FaGithub, link: 'https://github.com/Vikasprajapat1602', color: 'text-slate-300' },
                  { icon: FaTwitter, link: 'https://x.com/VikasPraja6479', color: 'text-cyan-400' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg glassmorphism ${social.color} hover:shadow-lg hover:shadow-cyan-500/50`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glassmorphism p-8 rounded-xl space-y-4"
          >
            {/* Name Field */}
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your-email@example.com"
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-white font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.visible}
      />
    </section>
  );
};

export default ContactSection;
