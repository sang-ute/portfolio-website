"use client";

import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Copy, ExternalLink, Send, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface ContactProps {
  onNotify: (msg: string) => void;
}

export function Contact({ onNotify }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Software Engineering Opportunity");
  const [message, setMessage] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onNotify(`Copied ${label}: ${text}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Quang Sang,\n\n${message}\n\nFrom: ${name} (${email})`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    onNotify("Opening default email client...");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Get in Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let's Connect & Collaborate</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
            Feel free to reach out for software engineering opportunities, internship follow-ups, or cloud architecture discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Direct Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email */}
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Email Address</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Phone & Zalo</div>
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`} className="text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-emerald-600">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy phone"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* GitHub */}
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">GitHub Profile</div>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600">
                    github.com/sang-ute
                  </a>
                </div>
              </div>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600">
                    linkedin.com/in/sang-nguyen-quang
                  </a>
                </div>
              </div>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Interactive Message Drafter Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Send a Message</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill in your message details to instantly open a pre-formatted email to my inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Recruiters / Lead Engineer"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="Software Engineering Opportunity">Software Engineering Opportunity</option>
                    <option value="Project Collaboration">Open Source / Project Collaboration</option>
                    <option value="Cloud Architecture Discussion">AWS / Cloud Architecture Discussion</option>
                    <option value="General Inquiry">General Inquiry / Say Hello</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your message, project idea, or job specification here..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Direct dispatch to {PERSONAL_INFO.email}</span>
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
