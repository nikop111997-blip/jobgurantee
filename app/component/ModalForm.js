'use client';

import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
export default function GenAIEnrollModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    privacy: false
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

  // Listen for clicks on any button with the class 'open-genai-modal'
  useEffect(() => {
    const handleTriggerClick = (e) => {
      if (e.target.closest('.open-genai-modal')) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleTriggerClick);
    return () => document.removeEventListener('click', handleTriggerClick);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number starting with 6-9.';
    }
    
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level.';
    }
    
    if (!formData.privacy) {
      newErrors.privacy = 'You must accept the privacy policy to continue.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsLoading(true);
  setSubmitStatus("idle");

  try {
    const params = new URLSearchParams(window.location.search);

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      profile: formData.experience || "",
      consent: formData.privacy,

      // Required
      course: "MLOpsJobGurantee", // Change as needed
      level: "",

      // UTM Parameters
      source: params.get("utm_source") || "",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
      term: params.get("utm_term") || "",
      content: params.get("utm_content") || "",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",

      // Page Details
      landing_page: window.location.href,
      page_path: window.location.pathname,
      referrer: document.referrer || "",
    };

    const response = await fetch("https://salescrm-xi.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Something went wrong");
    }

    setSubmitStatus("success");

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      privacy: false,
    });
    window.location.href = "/thank-you";
  } catch (error) {
    console.error(error);
    setSubmitStatus("error");
  } finally {
    setIsLoading(false);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 p-2 bg-white/50 backdrop-blur-md rounded-full text-gray-800 hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>

        {/* LEFT COLUMN - Career Copy & Gradient */}
        <div 
          className="bg-gradient-to-tr from-black to-orange-500 hidden w-full md:w-5/12 p-10 md:p-12 text-white md:flex flex-col justify-end items-start relative"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Career Accelerator
          </div>
          <h2 
            className="font-bold leading-[1.1] mb-5 text-3xl md:text-4xl lg:text-[1.95rem]" 
            style={{ letterSpacing: '-0.03em' }}
          >
            Land a High-Paying MLOps Career.
          </h2>
          <ul className="space-y-4 text-sm font-medium opacity-90 mb-8">
            <li className="flex items-center gap-3">
              <CheckCircle size={18} className="text-white" />
              <span>Avg. ₹39.0 LPA for MLOps Engineers</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={18} className="text-white" />
              <span>100% Hands-On Production Labs</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={18} className="text-white" />
              <span>Zero ML Experience Required</span>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN - Lead Generation Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-white">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Be Future Ready, Enroll Now</h3>
            <p className="text-gray-500 text-sm">Fill out the form below to get a detailed curriculum and speak with our career counselors.</p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 flex flex-col items-center text-center">
              <CheckCircle size={48} className="text-green-500 mb-4" />
              <h4 className="text-xl font-bold text-green-800 mb-2">Application Received!</h4>
              <p className="text-green-600 text-sm">
                Thank you for your interest. Our career team will review your profile and contact you shortly with the next steps.
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-colors ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-colors ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone}</p>}
                </div>
              </div>

              {/* Experience Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Current Experience Level</label>
                <select 
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border outline-none appearance-none transition-colors ${errors.experience ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white text-gray-700'}`}
                >
                  <option value="" disabled>Select your experience</option>
                  <option value="fresher">Fresher (0 - 1 years)</option>
                  <option value="experienced">Experienced (1+ years)</option>
                </select>
                {errors.experience && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12}/> {errors.experience}</p>}
              </div>

              {/* Privacy Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-black checked:border-black transition-colors cursor-pointer"
                    />
                    <CheckCircle size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                    I agree to the <a href="https://grras.com/privacy-policy/?_gl=1*1mk695*_gcl_aw*R0NMLjE3ODI3NTM4NjkuQ2owS0NRandyNGpTQmhDU0FSSXNBT1gxRS1JeUJsZFZVUHNYZm45UG5mc24ybTBheTRHT3AtTFNlYUI2SUtkUjBFYjlVZnZUSllNYV80MGFBdFpHRUFMd193Y0I.*_gcl_au*ODY3NzM1MjI5LjE3ODU5MzIxOTAuLS4tLjE3ODU5MzIxOTAuODM2NjI2MjguMTc4NjEyMzUwNC4xNzg2MTY3ODY0*_ga*MTQ3NjM1OTA0NS4xNzg1OTMyMTkw*_ga_RFSFN2LPTL*czE3ODYxNjc1NTUkbzEzJGcxJHQxNzg2MTY3ODgyJGo2MCRsMCRoMA..*_ga_EC1FZPG4T8*czE3ODYxNjc1NTUkbzEzJGcxJHQxNzg2MTY3ODgyJGo2MCRsMCRoMA.." target='_blank' rel="noreffer"> privacy policy</a> and authorize the team to contact me via email or phone regarding the curriculum.
                  </span>
                </label>
                {errors.privacy && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.privacy}</p>}
              </div>

              {/* Submit Error Banner */}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg flex items-center gap-2">
                  <AlertCircle size={16} /> Something went wrong. Please try submitting again.
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`w-full bg-neutral-900  text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  boxShadow: (!isLoading && isHovering) ? '0 14px 30px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.15)',
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processing Application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}