"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Phone, Clock, Facebook, Twitter, Instagram, Youtube, Search } from "lucide-react"

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("general")
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    { id: "general", label: "General", icon: "📋" },
    { id: "account", label: "Account", icon: "👤" },
    { id: "wallet", label: "Wallet and Asset", icon: "💰" },
    { id: "trading", label: "Trading", icon: "📈" },
    { id: "disputes", label: "Disputes", icon: "⚠️" },
    { id: "advertising", label: "Advertising", icon: "📢" },
  ]

  const faqItems = [
    {
      question: "What is A-Crypto?",
      answer:
        "A-Crypto is a leading crypto trading platform offering a wide range of services including P2P trading, token swaps, and more.\n\nOur platform is designed to provide a secure, user-friendly, and efficient trading experience for both beginners and experienced traders.",
    },
    {
      question: "How does A-Crypto ensure the security of my funds?",
      answer:
        "We implement multiple layers of security including cold storage, two-factor authentication, and regular security audits.",
    },
    {
      question: "What cryptocurrencies can I trade on A-Crypto?",
      answer:
        "We support a wide range of cryptocurrencies including Bitcoin, Ethereum, and many other popular altcoins.",
    },
    {
      question: "Is A-Crypto available worldwide?",
      answer:
        "Yes, A-Crypto is available in most countries worldwide, with some restrictions based on local regulations.",
    },
    {
      question: "What are the fees for using A-Crypto?",
      answer:
        "Our fee structure is competitive and transparent. Please check our fee schedule for detailed information.",
    },
    {
      question: "How can I get started with A-Crypto?",
      answer:
        "Simply register for an account, complete the verification process, and you can start trading immediately.",
    },
    {
      question: "Does A-Crypto offer customer support?",
      answer: "Yes, we offer 24/7 customer support through multiple channels including live chat, email, and phone.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">A-Crypto</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-purple-200">
                Home
              </a>
              <a href="#" className="hover:text-purple-200">
                About Us
              </a>
              <a href="#" className="text-purple-200 border-b border-purple-200">
                Contact Us
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Sign In
              </Button>
              <Button className="bg-white text-purple-600 hover:bg-purple-100">Register</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Commodo nec mi id vullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh elit vitae
            suspendisse porttitor sed lorem eu.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Facilisis commodo mattis neque nulla ultrices mattis sed. Ullamcorper tempus mattis ac tristique gravida
                etiam faucibus suspendisse.
              </p>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-purple-600 font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-purple-600 font-medium">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-purple-600 font-medium">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Writing your message here..."
                    rows={5}
                    className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Interactive Map */}
              <Card className="h-64 bg-purple-100 rounded-lg overflow-hidden border border-purple-200">
                <CardContent className="h-full p-0 relative">
                  {/* Map background with geographic features */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300">
                    {/* Simulated map features */}
                    <div className="absolute top-8 left-12 w-16 h-8 bg-purple-400/30 rounded-full transform rotate-12"></div>
                    <div className="absolute top-16 right-16 w-12 h-12 bg-purple-400/20 rounded-full"></div>
                    <div className="absolute bottom-12 left-8 w-20 h-6 bg-purple-400/25 rounded-full transform -rotate-6"></div>
                    <div className="absolute bottom-8 right-12 w-8 h-16 bg-purple-400/30 rounded-full transform rotate-45"></div>

                    {/* Map grid lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-1/4 w-px h-full bg-purple-500"></div>
                      <div className="absolute top-0 left-2/4 w-px h-full bg-purple-500"></div>
                      <div className="absolute top-0 left-3/4 w-px h-full bg-purple-500"></div>
                      <div className="absolute top-1/4 left-0 w-full h-px bg-purple-500"></div>
                      <div className="absolute top-2/4 left-0 w-full h-px bg-purple-500"></div>
                      <div className="absolute top-3/4 left-0 w-full h-px bg-purple-500"></div>
                    </div>

                    {/* Location marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-purple-600 rounded-full border-2 border-white shadow-lg relative">
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-purple-600"></div>
                      </div>
                    </div>

                    {/* Map controls */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-1">
                      <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50">
                        <span className="text-lg font-bold">+</span>
                      </button>
                      <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50">
                        <span className="text-lg font-bold">−</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">+123 456 789 00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday / 8AM to 5PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us:</h3>
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h2>
            <div className="max-w-md mx-auto relative">
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* FAQ Categories */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setOpenFaq(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                      openFaq === category.id
                        ? "bg-purple-100 text-purple-700 border border-purple-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Collapsible key={index} defaultOpen={index === 0}>
                    <CollapsibleTrigger className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{item.question}</h3>
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4">
                      <div className="text-gray-600 whitespace-pre-line">{item.answer}</div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Load more →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">A-Crypto</h3>
              <p className="text-purple-200 mb-6">Trade crypto easily anytime, anywhere.</p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Youtube className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a href="#" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Businesses</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Prime
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Custody
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Asset Hub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Commerce
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Exchange</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Exchange Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Margin Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Derivatives Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trading Arena
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-200 text-sm">Copyright 2021, Cryptoius</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">₿</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">@</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
