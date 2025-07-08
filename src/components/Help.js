import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: QuestionMarkCircleIcon },
    { id: 'ordering', name: 'Ordering', icon: BookOpenIcon },
    { id: 'delivery', name: 'Delivery', icon: TruckIcon },
    { id: 'payment', name: 'Payment', icon: CreditCardIcon },
    { id: 'account', name: 'Account', icon: UserIcon },
    { id: 'safety', name: 'Safety', icon: ShieldCheckIcon }
  ];

  const faqs = [
    {
      id: 1,
      category: 'ordering',
      question: 'How do I place an order?',
      answer: 'To place an order, browse restaurants, select your desired items, add them to cart, and proceed to checkout. You can pay using various payment methods including cards, UPI, or cash on delivery.',
      tags: ['order', 'checkout', 'payment']
    },
    {
      id: 2,
      category: 'ordering',
      question: 'Can I modify my order after placing it?',
      answer: 'You can modify your order within 5 minutes of placing it. After that, please contact our customer service team for assistance.',
      tags: ['modify', 'cancel', 'order']
    },
    {
      id: 3,
      category: 'delivery',
      question: 'How long does delivery take?',
      answer: 'Delivery times vary by restaurant and location, typically ranging from 20-45 minutes. You can see the estimated delivery time when placing your order.',
      tags: ['delivery', 'time', 'estimate']
    },
    {
      id: 4,
      category: 'delivery',
      question: 'What if my food arrives late?',
      answer: 'If your food arrives later than the estimated delivery time, please contact our customer service team. We may offer compensation for the delay.',
      tags: ['late', 'delay', 'compensation']
    },
    {
      id: 5,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, UPI, digital wallets, and cash on delivery. All online payments are secure and encrypted.',
      tags: ['payment', 'cards', 'upi', 'cash']
    },
    {
      id: 6,
      category: 'payment',
      question: 'How do I get a refund?',
      answer: 'Refunds are processed automatically for cancelled orders. For other issues, contact our customer service team and we\'ll process your refund within 3-5 business days.',
      tags: ['refund', 'cancel', 'money']
    },
    {
      id: 7,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Go to the login page and click "Forgot Password". Enter your email address and follow the instructions sent to your email to reset your password.',
      tags: ['password', 'reset', 'login']
    },
    {
      id: 8,
      category: 'account',
      question: 'How do I update my delivery address?',
      answer: 'You can update your delivery address in your account settings. Go to Profile > Address and add or edit your delivery addresses.',
      tags: ['address', 'profile', 'settings']
    },
    {
      id: 9,
      category: 'safety',
      question: 'What safety measures do you take?',
      answer: 'We ensure all restaurants follow strict hygiene standards. Our delivery partners wear masks and maintain social distancing. Contactless delivery is available.',
      tags: ['safety', 'hygiene', 'covid']
    },
    {
      id: 10,
      category: 'safety',
      question: 'How do I report a food quality issue?',
      answer: 'If you experience any food quality issues, please contact our customer service team immediately. We take all complaints seriously and will investigate promptly.',
      tags: ['quality', 'complaint', 'report']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const supportOptions = [
    {
      icon: PhoneIcon,
      title: 'Call Support',
      description: 'Speak with our team',
      action: 'Call Now',
      color: 'bg-blue-500'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with us online',
      action: 'Start Chat',
      color: 'bg-green-500'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Send us an email',
      action: 'Send Email',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and get the support you need
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12"
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{option.description}</p>
              <button className={`${option.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm`}>
                {option.action}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-6 lg:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Frequently Asked Questions
            </h2>
            <span className="text-sm text-gray-600">
              {filteredFaqs.length} articles found
            </span>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <QuestionMarkCircleIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse by category</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 mb-3">{faq.answer}</p>
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-800">Still Need Help?</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Contact Support
            </button>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-800">Quick Solutions</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Check our troubleshooting guides for common issues and quick fixes.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
              View Guides
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help; 