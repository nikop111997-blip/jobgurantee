"use client";

import { Image, MessageCircle } from "lucide-react";

export default function StickyWhatsApp() {
  const phoneNumber = "916350618066"; // Replace with your WhatsApp number
  const message = "Hello! I would like to know more about Job Gurantee MLOps course.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
   <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-22     right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#6e8530]/35 bg-emerald-700 z-0  shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
  aria-label="Chat with us on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-8 w-8 fill-current"
  >
    <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.357.613 4.657 1.78 6.69L2.667 29.333l6.81-1.75A13.27 13.27 0 0 0 16.003 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.003 2.667zm0 24.223a10.84 10.84 0 0 1-5.523-1.507l-.397-.237-4.043 1.04 1.08-3.94-.26-.407a10.85 10.85 0 1 1 9.143 5.05zm5.95-8.123c-.327-.163-1.94-.957-2.24-1.067-.3-.11-.52-.163-.74.163-.217.327-.85 1.067-1.04 1.287-.19.217-.383.243-.71.08-.327-.163-1.38-.51-2.627-1.627-.97-.867-1.627-1.937-1.817-2.263-.19-.327-.02-.503.143-.663.147-.147.327-.383.49-.573.163-.19.217-.327.327-.547.11-.217.053-.407-.027-.573-.08-.163-.74-1.783-1.013-2.443-.267-.64-.54-.553-.74-.563h-.63c-.217 0-.567.08-.863.407-.3.327-1.133 1.107-1.133 2.697 0 1.59 1.16 3.127 1.32 3.343.163.217 2.277 3.477 5.517 4.877.77.333 1.37.533 1.84.683.773.247 1.477.213 2.033.13.62-.093 1.94-.793 2.213-1.56.273-.767.273-1.423.19-1.56-.08-.137-.3-.217-.627-.38z" />
  </svg>
</a>
  );
}