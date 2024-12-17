import React from 'react';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
      <footer id="contact" className="bg-[#0d3445] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl">MemoRaid</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering individuals on their journey to memory recovery through
                innovative rehabilitation techniques and supportive community.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-blue-400">Features</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: <a href="mailto:memoraid6@gmail.com" className="hover:text-blue-400">memoraid6@gmail.com</a></li>
                <li className="text-gray-400">Instagram: <a href="https://instagram.com/memoraid.app" className="hover:text-blue-400">@memoraid.app</a></li>
                <li className="text-gray-400">Phone: <a href="tel:+94721513889" className="hover:text-blue-400">+94 721513889</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} MemoRaid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}
