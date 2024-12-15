import React from 'react';
import { Icons } from '../icons';

export default function MobileApp() {
  return (
    <section id="mobile-app" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Coming Soon to Mobile</h2>
            <p className="text-xl text-gray-600 mb-8">
              Take your memory recovery journey with you wherever you go. 
              Our mobile app provides seamless access to exercises, progress tracking, 
              and support - all in your pocket.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                <Icons.Brain className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Coming soon on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                <Icons.Brain className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Coming soon on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=600"
              alt="Mobile App Preview"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}