"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    subject: string;
    query: string;
};

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(data);
        reset();
    };

    const inputStyles = `
        w-full bg-[#0c0f16] border border-[rgba(125,164,255,0.16)] rounded-[10px] 
        px-3 py-3 text-[#d1d4e3] text-base leading-[1.2em]
        placeholder:text-white/40 
        focus:outline-none focus:border-[#0175ff] focus:bg-[#06070a]
        transition-all duration-200
    `;

    return (
        <section className="px-5 py-14 sm:px-6 md:px-10 md:py-20" id="support">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-10 md:gap-14 lg:flex-row lg:gap-20"
                >
                    {/* Left Column: Info */}
                    <div className="flex-1 space-y-8 md:space-y-10">
                        {/* Section Header */}
                        <div className="space-y-6">
                            {/* Section Tag */}
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-sm border border-white/10 bg-[#06070a]">
                                    <img
                                        src="https://framerusercontent.com/images/xHfPV4X6jypeMN7rcPFFyCwnhg.svg"
                                        className="w-5 h-5 opacity-80"
                                        alt=""
                                    />
                                    <span className="text-sm font-medium tracking-[0.2em] text-[#8491ab] uppercase">
                                        EXPERT SUPPORT
                                    </span>
                                </div>
                                <div className="flex-1 h-px bg-[rgba(125,164,255,0.16)]" />
                            </div>

                            <h2
                                className="text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] md:text-[45px] lg:text-[58px]"
                                style={{ fontFamily: '"Inter Display", sans-serif' }}
                            >
                                Security Experts Available
                            </h2>
                            <p className="max-w-[520px] text-base leading-relaxed text-[#9ba9c4] md:max-w-[400px] md:text-[17px]">
                                Have cybersecurity questions or need immediate assistance? Contact our team via form, phone, or email.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-5">
                            <span className="text-xs font-semibold text-white/40 tracking-[0.2em] uppercase block">
                                GET SECURITY SUPPORT
                            </span>

                            <div className="flex flex-col gap-4">
                                {/* Phone Card */}
                                <Link
                                    href="tel:+966551234567"
                                    className="group flex items-center gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative w-11 h-11 rounded-2xl flex items-center justify-center overflow-hidden"
                                        style={{
                                            background: "#000",
                                            border: "1px solid rgba(255,255,255,0.1)"
                                        }}
                                    >
                                        {/* Glow effect on hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background: "rgba(1, 117, 255, 0.2)",
                                                filter: "blur(8px)"
                                            }}
                                        />
                                        <Phone className="w-5 h-5 text-white relative z-10 group-hover:text-[#0175ff] transition-colors" />
                                    </motion.div>
                                    <span className="break-all text-base font-medium text-white transition-colors group-hover:text-[#0175ff] md:text-lg">
                                        +966 55 123 4567
                                    </span>
                                </Link>

                                {/* Email Card */}
                                <Link
                                    href="mailto:support@rasytech.com"
                                    className="group flex items-center gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative w-11 h-11 rounded-2xl flex items-center justify-center overflow-hidden"
                                        style={{
                                            background: "#000",
                                            border: "1px solid rgba(255,255,255,0.1)"
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background: "rgba(1, 117, 255, 0.2)",
                                                filter: "blur(8px)"
                                            }}
                                        />
                                        <Mail className="w-5 h-5 text-white relative z-10 group-hover:text-[#0175ff] transition-colors" />
                                    </motion.div>
                                    <span className="break-all text-base font-medium text-white transition-colors group-hover:text-[#0175ff] md:text-lg">
                                        support@rasytech.com
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1"
                    >
                        <div
                            className="rounded-[24px] p-5 sm:p-6 md:rounded-3xl md:p-8 lg:p-10"
                            style={{
                                background: "#06070a",
                                border: "1px solid #2f3950",
                                backdropFilter: "blur(10px)"
                            }}
                        >
                            {isSubmitSuccessful ? (
                                <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle className="w-8 h-8" />
                                    </motion.div>
                                    <h3 className="text-2xl font-medium text-white mb-2">Request Received!</h3>
                                    <p className="text-[#9ba9c4]">Our security specialists will contact you within 24 hours to discuss your requirements.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                    {/* Name Row */}
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm text-white font-medium pl-1">First Name</label>
                                            <input
                                                {...register("firstName", { required: "First name is required" })}
                                                className={inputStyles}
                                                placeholder="Ahmad"
                                            />
                                            {errors.firstName && (
                                                <span className="text-red-400 text-xs pl-1">{errors.firstName.message}</span>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm text-white font-medium pl-1">Last Name</label>
                                            <input
                                                {...register("lastName", { required: "Last name is required" })}
                                                className={inputStyles}
                                                placeholder="Al-Rashid"
                                            />
                                            {errors.lastName && (
                                                <span className="text-red-400 text-xs pl-1">{errors.lastName.message}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Contact Row */}
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm text-white font-medium pl-1">Email</label>
                                            <input
                                                type="email"
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                className={inputStyles}
                                                placeholder="ahmad@company.com"
                                            />
                                            {errors.email && (
                                                <span className="text-red-400 text-xs pl-1">{errors.email.message}</span>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm text-white font-medium pl-1">Contact Number</label>
                                            <input
                                                type="tel"
                                                {...register("contactNumber", { required: "Phone number is required" })}
                                                className={inputStyles}
                                                placeholder="+966 5X XXX XXXX"
                                            />
                                            {errors.contactNumber && (
                                                <span className="text-red-400 text-xs pl-1">{errors.contactNumber.message}</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-white font-medium pl-1">Subject</label>
                                        <select
                                            {...register("subject", { required: "Please select a subject" })}
                                            className={`${inputStyles} appearance-none cursor-pointer`}
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-[#0c0f16]">Select a subject</option>
                                            <option value="Security Consultation" className="bg-[#0c0f16]">Security Consultation</option>
                                            <option value="Technical Support" className="bg-[#0c0f16]">Technical Support</option>
                                            <option value="Service Inquiry" className="bg-[#0c0f16]">Service Inquiry</option>
                                            <option value="Partnership Request" className="bg-[#0c0f16]">Partnership Request</option>
                                            <option value="Training Programs" className="bg-[#0c0f16]">Training Programs</option>
                                            <option value="General Information" className="bg-[#0c0f16]">General Information</option>
                                        </select>
                                        {errors.subject && (
                                            <span className="text-red-400 text-xs pl-1">{errors.subject.message}</span>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-white font-medium pl-1">How can we help secure your business?</label>
                                        <textarea
                                            {...register("query", { required: "Please tell us how we can help" })}
                                            rows={4}
                                            className={`${inputStyles} resize-vertical min-h-[100px]`}
                                            placeholder="Describe your cybersecurity needs, challenges, or requirements..."
                                        />
                                        {errors.query && (
                                            <span className="text-red-400 text-xs pl-1">{errors.query.message}</span>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full rounded-[14px] py-4 font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-black text-white shadow-[inset_-4px_3px_9px_0px_#0175ff,inset_3px_-2px_8px_0px_#ffcd7d] hover:brightness-125"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Security Request"
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
