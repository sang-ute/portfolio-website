"use client";

import React, { useEffect } from "react";
import { FileText, Download, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card w-full max-w-4xl h-[90vh] rounded-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white/70 dark:bg-slate-900/70">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Curriculum Vitae Preview — {PERSONAL_INFO.name}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Nguyen_Quang_Sang_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Iframe Body */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2">
          <iframe
            src={PERSONAL_INFO.resumePdf}
            className="w-full h-full rounded-xl border-0"
            title="Resume PDF View"
          />
        </div>
      </div>
    </div>
  );
}
