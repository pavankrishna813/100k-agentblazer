// "use client";
// import { Linkedin, Twitter, Youtube } from "lucide-react";

// export default function Footer() {
//   const quickLinks = [
//     { label: "Home", href: "home" },
//     { label: "Open Challenge", href: "challenge" },
//     { label: "Partners", href: "partners" },
//     { label: "Academia", href: "academia" },
//   ];

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="bg-[hsl(0,0%,10%)] text-white py-16">
//       <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="md:col-span-2">
//             <div className="font-montserrat font-bold text-2xl mb-4">
//               100K Agentblazer
//             </div>
//             <p className="text-gray-300 mb-6">
//               Empowering India's next generation with Salesforce and AI skills.
//               Join the movement to create 100,000 skilled professionals ready
//               for the future of work.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-[hsl(225,100%,60%)] hover:text-[hsl(225,100%,70%)] transition-colors"
//               >
//                 <Linkedin size={24} />
//               </a>
//               <a
//                 href="#"
//                 className="text-[hsl(225,100%,60%)] hover:text-[hsl(225,100%,70%)] transition-colors"
//               >
//                 <Twitter size={24} />
//               </a>
//               <a
//                 href="#"
//                 className="text-[hsl(225,100%,60%)] hover:text-[hsl(225,100%,70%)] transition-colors"
//               >
//                 <Youtube size={24} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-montserrat font-bold mb-4">Quick Links</h4>
//             <div className="space-y-2">
//               {quickLinks.map((link) => (
//                 <button
//                   key={link.href}
//                   onClick={() => scrollToSection(link.href)}
//                   className="block text-gray-300 hover:text-white transition-colors text-left"
//                 >
//                   {link.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="font-montserrat font-bold mb-4">Contact</h4>
//             <div className="space-y-2 text-gray-300">
//               <p>Email: hello@smartbridge.com</p>
//               <p>Phone: +91 9876543210</p>
//               <p>Address: Hyderabad, India</p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
//           <p>&copy; 2024 SmartBridge & Salesforce. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Product Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Powered by</h3>
            <div className="flex items-center justify-start ">
              <img
                className="object-contain w-[150px] md:w-[200px]"
                // src="https://www.thesmartbridge.com/homepage2020/img/SmartBridgewithVLSTag.png"
                src="https://myskillwallet.ai/SkillWallet-white-logo.png"
                alt="SmartBridge Logo"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              A career-building platform by SmartBridge, designed to empower
              learners with industry-relevant skills and certifications.
            </p>
          </div>

          {/* Privacy Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm text-white/80 hover:text-[#FFE27A] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="text-sm text-white/80 hover:text-[#FFE27A] transition-colors"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-sm text-white/80 hover:text-[#FFE27A] transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                <a
                  href="mailto:switchup@thesmartbridge.com"
                  className="text-sm text-white/80 hover:text-[#FFE27A] transition-colors"
                >
                  skillwallet@thesmartbridge.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Address Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Office Address</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">INDIA OFFICE</h4>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                  <p className="text-sm text-white/80 leading-relaxed">
                    6th Floor, Sundarayya Vignana Kendram, Technical Block,
                    Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana
                    500032.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">SINGAPORE OFFICE</h4>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                  <p className="text-sm text-white/80 leading-relaxed">
                    78 Bayshore Rd, #18-24, Singapore 469991.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          All rights reserved © 2025
        </div>
      </div>
    </footer>
  );
}
