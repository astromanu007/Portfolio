import emailjs from '@emailjs/browser';

// EmailJS Configuration Keys
// Replace these with your actual keys from https://dashboard.emailjs.com/
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_en6b51i',
  TEMPLATE_ID_TRANSMIT: 'template_dzv1ocn',
  TEMPLATE_ID_SCHEDULE: 'template_dzv1ocn',
  PUBLIC_KEY: 'zoph62h4UrYzfJD6Y',
  RECEIVER_EMAIL: 'manishdhatrak1121@gmail.com'
};

export interface ContactEmailParams {
  from_name: string;
  from_email: string;
  subject?: string;
  message: string;
}

export interface ScheduleEmailParams {
  from_name: string;
  from_email: string;
  company?: string;
  topic: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string;
}

/**
 * Send contact message via EmailJS or fallback via mailto trigger
 */
export const sendContactEmail = async (params: ContactEmailParams): Promise<boolean> => {
  try {
    if (EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_TRANSMIT,
        {
          to_email: EMAILJS_CONFIG.RECEIVER_EMAIL,
          from_name: params.from_name,
          from_email: params.from_email,
          name: params.from_name,
          email: params.from_email,
          title: params.subject || 'Portfolio Contact Message',
          subject: params.subject || 'Portfolio Contact Message',
          message: params.message,
          time: new Date().toLocaleString()
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      return true;
    }
  } catch (error) {
    console.warn('EmailJS delivery fallback to direct mailto protocol:', error);
  }

  // Direct mailto trigger fallback ensuring receiver receives full email details immediately
  const mailtoUrl = `mailto:${EMAILJS_CONFIG.RECEIVER_EMAIL}?subject=${encodeURIComponent(
    `[Portfolio Contact] ${params.subject || 'New Message from ' + params.from_name}`
  )}&body=${encodeURIComponent(
    `Sender Name: ${params.from_name}\nSender Email: ${params.from_email}\n\nMessage:\n${params.message}`
  )}`;

  window.open(mailtoUrl, '_blank');
  return true;
};

/**
 * Send interview scheduling request via EmailJS or fallback via mailto trigger
 */
export const sendScheduleEmail = async (params: ScheduleEmailParams): Promise<boolean> => {
  try {
    if (EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_SCHEDULE,
        {
          to_email: EMAILJS_CONFIG.RECEIVER_EMAIL,
          from_name: params.from_name,
          from_email: params.from_email,
          company: params.company || 'N/A',
          topic: params.topic,
          preferred_date: params.preferred_date,
          preferred_time: params.preferred_time,
          notes: params.notes || 'N/A',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      return true;
    }
  } catch (error) {
    console.warn('EmailJS delivery fallback to direct mailto protocol:', error);
  }

  // Direct mailto trigger fallback ensuring receiver receives interview invitation details immediately
  const mailtoUrl = `mailto:${EMAILJS_CONFIG.RECEIVER_EMAIL}?subject=${encodeURIComponent(
    `[1-on-1 Interview Schedule Request] ${params.topic} - ${params.from_name}`
  )}&body=${encodeURIComponent(
    `1-on-1 Interview Schedule Request\n-----------------------------------\nName: ${params.from_name}\nEmail: ${params.from_email}\nCompany: ${params.company || 'N/A'}\nTopic: ${params.topic}\nDate: ${params.preferred_date}\nTime: ${params.preferred_time}\nNotes: ${params.notes || 'N/A'}`
  )}`;

  window.open(mailtoUrl, '_blank');
  return true;
};
