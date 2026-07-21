"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { leadSchema } from "@/lib/validators";

export default function EnquireModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        domain: "",
        candidates: "",
        deliveryMode: "",
        location: ""
    });

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Clear error when user starts typing again
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Safe Zod validation check on client side
        const result = leadSchema.safeParse(formData);
        if (!result.success) {
            const issues = result.error.issues || result.error.errors || [];
            setError(issues.length > 0 ? issues[0].message : "Please check your inputs.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/enquire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Thank you! Your enquiry has been submitted successfully.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    domain: "",
                    candidates: "",
                    deliveryMode: "",
                    location: ""
                });
                onClose();
            } else {
                setError(data.message || "Something went wrong.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            setError("Failed to submit form. Please check your network connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const domainOptions = [
        "Product Management",
        "CFO",
        "Data Science",
        "Artificial Intelligence",
        "Human Resource",
        "Strategy & Leadership",
        "General Management",
        "Digital Transformation",
        "Business Management",
        "Finance",
        "Project Management",
        "Senior Management"
    ];

    const deliveryOptions = ["Online", "Offline", "Hybrid"];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[850px] overflow-hidden flex flex-col md:flex-row my-8 animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-700 bg-white/80 hover:bg-gray-100 p-2 rounded-full transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Side: Corporate Image Panel */}
                <div className="hidden md:block relative w-5/12 min-h-[550px]">
                    <Image
                        src="/business-v2.webp"
                        alt="Corporate Training Meeting"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Form Inputs */}
                <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                    <div>
                        <h2 className="text-[24px] font-bold text-gray-900 mb-4">
                            Enquire Now
                        </h2>

                        {/* Error Message Box inside Dialog */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <Input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {/* Phone with Country Code */}
                            <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#2563eb]">
                                <div className="flex items-center gap-1.5 px-3 bg-gray-50 border-r border-gray-200 text-sm text-gray-700">
                                    <span>🇮🇳</span>
                                    <span className="font-medium">+91</span>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="10-digit Phone Number"
                                    maxLength={10}
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none"
                                />
                            </div>

                            <Input
                                type="text"
                                name="company"
                                placeholder="Enter company name"
                                value={formData.company}
                                onChange={handleChange}
                            />

                            <Select
                                name="domain"
                                options={domainOptions}
                                value={formData.domain}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                type="text"
                                name="candidates"
                                placeholder="Enter No. of candidates (digits only)"
                                value={formData.candidates}
                                onChange={handleChange}
                            />

                            <Select
                                name="deliveryMode"
                                options={deliveryOptions}
                                value={formData.deliveryMode}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                type="text"
                                name="location"
                                placeholder="Eg: Gurgaon, Delhi, India"
                                value={formData.location}
                                onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                variant="primary"
                                disabled={isSubmitting}
                                className="w-full py-3.5 mt-2 rounded-lg"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}