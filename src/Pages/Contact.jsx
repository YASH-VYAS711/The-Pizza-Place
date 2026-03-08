import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { submitContactRequest } from "../Redux/Contact/actions";
import toast from "react-hot-toast";

export default function Contact() {
  const dispatch = useDispatch();

  const { loading, successMessage, errorMessage } = useSelector(
    (state) => state.contact
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // clear form on success
  useEffect(() => {
    if (successMessage) {
      toast.success("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  }, [successMessage]);

  // show error alert
  useEffect(() => {
    if (errorMessage) {
      toast.error("Failed to send message. Try again.");
    }
  }, [errorMessage]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      submitContactRequest({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
        subject: formData.subject
      })
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#be3636] via-[#630f00f3] to-[#f16b6b] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our menu, 
            want to make a reservation, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Us",
                info: "123 Pizza Street",
                subInfo: "Flavor Town, FT 12345"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                info: "(123) 456-7890",
                subInfo: "Daily 11AM - 10PM"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                info: "contact@thepizzaplace.com",
                subInfo: "We reply within 24 hours"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Opening Hours",
                info: "Mon-Fri: 11AM-10PM",
                subInfo: "Sat-Sun: 12PM-11PM"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-red-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.info}</p>
                <p className="text-gray-500 text-sm mt-1">{item.subInfo}</p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="catering">Catering Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right side stays unchanged */}
            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.508364299213!2d-73.699748!3d40.640722999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c264f8b6bdf1ef%3A0xcfe273d3bdfe8d7c!2sThe%20Pizza%20Place!5e0!3m2!1sen!2sin!4v1763306493825!5m2!1sen!2sin"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Pizza Place Location"
                ></iframe>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Find Us Easily</h3>
                  <p className="text-gray-600">
                    We're located in the heart of Flavor Town, just a few blocks from the main square. 
                    Plenty of parking available!
                  </p>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-semibold">Call us now</p>
                      <p className="text-red-100">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-semibold">Email us</p>
                      <p className="text-red-100">contact@thepizzaplace.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-red-500">
                  <p className="text-red-100 text-sm">
                    For urgent matters or same-day reservations, calling is the fastest way to reach us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Do you take reservations?",
                answer: "Yes! We accept reservations for parties of 4 or more. Call us or use our contact form to book your table."
              },
              {
                question: "Do you offer catering services?",
                answer: "Absolutely! We provide catering for events of all sizes. Contact us at least 48 hours in advance for catering orders."
              },
              {
                question: "Are you available for private events?",
                answer: "Yes, we can accommodate private events. Please contact us to discuss your requirements and availability."
              },
              {
                question: "Do you have vegetarian/vegan options?",
                answer: "We have a variety of vegetarian options and can accommodate vegan requests. Check our menu or ask our staff for details."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
