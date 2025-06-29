import React from 'react';
import Image from "next/image";

export default function ContactUsSection() {
    const contactOptions = [
        {
            icon: "/icons/message-smile-circle.svg",
            title: "Chat to sales",
            description: "Speak to our friendly team.",
            contact: "sales@mokko.com",
            isEmail: true
        },
        {
            icon: "/icons/message-chat-circle.svg",
            title: "Chat to support",
            description: "We're here to help.",
            contact: "support@mokko.com",
            isEmail: true
        },
        {
            icon: "/icons/marker-pin-02.svg",
            title: "Visit us",
            description: "Visit our office HQ.",
            contact: "Lagos, Nigeria",
            isEmail: false
        },
        {
            icon: "/icons/phone.svg",
            title: "Call us",
            description: "Mon-Fri from 8am to 5pm.",
            contact: "+234 (0) 123 456 7890",
            isEmail: false
        }
    ];

    return (
        <div className=" py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className=" mb-16">
                    <p className="text-orange-500 font-semibold text-sm mb-4">
                        Contact us
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        We'd love to hear from you
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our friendly team is always here to chat.
                    </p>
                </div>

                {/* Contact Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactOptions.map((option, index) => {
                        const IconComponent = option.icon;
                        return (
                            <div key={index} className="bg-[#FAFAFA] p-6">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg mb-6">
                                    
                                    <Image
                                                 
                                        src={IconComponent}
                                                  alt="Icon"
                                                  width={27}
                                                  height={27}
                                        style={{ width: "auto", height: "auto" }}
                                                />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#181D27] mb-2">
                                    {option.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#535862] text-sm mb-4">
                                    {option.description}
                                </p>

                                {/* Contact Info */}
                                {option.isEmail ? (
                                    <a
                                        href={`mailto:${option.contact}`}
                                        className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                                    >
                                        {option.contact}
                                    </a>
                                ) : option.title === "Call us" ? (
                                    <a
                                        href={`tel:${option.contact.replace(/\s/g, '')}`}
                                        className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                                    >
                                        {option.contact}
                                    </a>
                                ) : (
                                    <span className="text-orange-500 font-semibold text-sm">
                                        {option.contact}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}