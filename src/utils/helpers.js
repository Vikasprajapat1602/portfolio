/**
 * Utility function to send emails using EmailJS
 * @param {string} recipientEmail - Email to send to
 * @param {string} senderName - Name of sender
 * @param {string} senderEmail - Email of sender
 * @param {string} subject - Email subject
 * @param {string} message - Email message
 * @returns {Promise} Promise from EmailJS
 */
export const sendEmail = async (recipientEmail, senderName, senderEmail, subject, message) => {
  try {
    // Initialize EmailJS with your public key
    // Note: Replace with your actual EmailJS public key
    const emailjsKey = import.meta.env.VITE_EMAILJS_KEY;
    
    if (!emailjsKey) {
      console.error('EmailJS key not configured');
      return { success: false, message: 'Email service not configured' };
    }

    // Send email using fetch (EmailJS REST API)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: emailjsKey,
        template_params: {
          to_email: recipientEmail,
          from_name: senderName,
          from_email: senderEmail,
          subject: subject,
          message: message,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Format date to readable string
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

/**
 * Smooth scroll to element
 * @param {string} id - Element ID to scroll to
 */
export const smoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Filter projects by technology
 * @param {Array} projects - Array of projects
 * @param {string} technology - Technology to filter by
 * @returns {Array} Filtered projects
 */
export const filterProjectsByTech = (projects, technology) => {
  if (!technology || technology === 'All') {
    return projects;
  }
  return projects.filter((project) =>
    project.technologies.includes(technology)
  );
};

/**
 * Search projects by title or description
 * @param {Array} projects - Array of projects
 * @param {string} searchTerm - Search term
 * @returns {Array} Filtered projects
 */
export const searchProjects = (projects, searchTerm) => {
  const lowerSearch = searchTerm.toLowerCase();
  return projects.filter((project) =>
    project.title.toLowerCase().includes(lowerSearch) ||
    project.description.toLowerCase().includes(lowerSearch)
  );
};
