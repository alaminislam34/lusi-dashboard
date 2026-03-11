"use client";

import React, { useState } from "react";

export default function Settings() {
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    description: "",
    website: "",
    email: "",
    phone: "",
  });

  return (
    <div className="">
      <div className="bg-[#11141b] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8 space-y-10">
          {/* Business Name */}
          <SettingsRow
            title="Business Name"
            description="The official name of your business. This will appear in AI conversations, reports, and customer interactions."
          >
            <input
              type="text"
              placeholder="Enter your registered business name"
              className="settings-input"
            />
          </SettingsRow>

          {/* Business Category */}
          <SettingsRow
            title="Business Category"
            description="Select the industry your business operates in. This helps LUSI tailor AI responses and lead qualification logic."
          >
            <select className="settings-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.67%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-position-[right_1rem_center] bg-no-repeat">
              <option value="">Select your industry</option>
              <option value="real-estate">Real Estate</option>
              <option value="ecommerce">E-commerce</option>
              <option value="services">Professional Services</option>
            </select>
          </SettingsRow>

          {/* Business Description */}
          <SettingsRow
            title="Business Description"
            description="Briefly describe what your business offers and who your ideal customers are. This helps the AI better understand and qualify leads."
          >
            <textarea
              placeholder="Enter your business details..."
              rows={4}
              className="settings-input resize-none"
            />
          </SettingsRow>

          {/* Website URL */}
          <SettingsRow
            title="Website URL"
            description="Your business website link. LUSI may use this to improve AI understanding of your services."
          >
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              className="settings-input"
            />
          </SettingsRow>

          {/* Business Email */}
          <SettingsRow
            title="Business Email"
            description="Primary email used for account notifications, performance reports, and system updates."
          >
            <input
              type="email"
              placeholder="contact@yourbusiness.com"
              className="settings-input"
            />
          </SettingsRow>

          {/* Business Phone */}
          <SettingsRow
            title="Business Phone"
            description="Main contact number for your business. This may be shared with qualified leads when appropriate."
          >
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              className="settings-input"
            />
          </SettingsRow>
        </div>

        {/* Action Footer */}
        <div className="bg-[#0f1115] border-t border-white/5 p-6 flex justify-end">
          <button className="bg-[#61c9b8] hover:bg-[#52ab9c] text-[#0a0a0b] font-bold py-3 px-12 rounded-xl transition-all shadow-[0_0_20px_rgba(97,201,184,0.15)] hover:scale-[1.02] active:scale-[0.98]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable layout row for settings
 */
function SettingsRow({ title, description, children }: any) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start pb-10 border-b border-white/3 last:border-0 last:pb-0">
      <div className="lg:w-1/3">
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="w-full lg:w-2/3">{children}</div>
    </div>
  );
}
