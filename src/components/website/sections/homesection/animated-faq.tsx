'use client';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/website/ui/card';
import { Button } from '@/components/website/ui/button';
import { HomeNavButton } from '@/components/website/HomeNavButtons';
import { ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';
import { faqs,categories } from '@/data/website/constants';


export function AnimatedFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-teal-900 mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-teal-700 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about your healing journey with ekaBrahmaa
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 lg:mb-12 overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full transition-all duration-300 whitespace-nowrap ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white' 
                  : 'border-teal-200 text-teal-700 hover:bg-teal-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          {filteredFAQs.map((faq, index) => (
            <Card 
              key={faq.id}
              className={`border-teal-100 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader 
                className="cursor-pointer hover:bg-teal-50 transition-colors duration-300"
                onClick={() => toggleFAQ(faq.id)}
              >
                <CardTitle className="flex items-center justify-between text-lg text-teal-900">
                  <div className="flex items-center space-x-3">
                    <span>{faq.question}</span>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5 text-teal-600" />
                  </div>
                </CardTitle>
              </CardHeader>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <CardContent className="pt-0 pb-6">
                  <div className="border-l-4 border-teal-200 pl-6 ml-4">
                    <p className="text-teal-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="border-teal-200 shadow-md bg-gradient-to-br from-teal-50 to-teal-50/50">
  <CardContent className="p-6 text-center">
    <h3 className="text-lg font-serif font-bold text-teal-900 mb-3">
      Still Have Questions?
    </h3>
    <p className="text-teal-700 text-sm mb-6">
      Our team is here to help you
    </p>
    
    <div className="grid grid-cols-3 gap-3 mb-6">
      <Button 
        variant="outline" 
        size="sm"
        className="border-teal-200 text-teal-700 hover:bg-teal-50 h-16 flex flex-col gap-1 "
        onClick={() => window.gtag?.('event', 'support_interaction', { interaction_type: 'live_chat' })}
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs font-medium">Live Chat</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="border-teal-200 text-teal-700 hover:bg-teal-50 h-16 flex flex-col gap-1"
        onClick={() => window.gtag?.('event', 'support_interaction', { interaction_type: 'phone_call' })}
      >
        <Phone className="w-4 h-4" />
        <span className="text-xs font-medium">Call Us</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="border-teal-200 text-teal-700 hover:bg-teal-50 h-16 flex flex-col gap-1"
        onClick={() => window.gtag?.('event', 'support_interaction', { interaction_type: 'email' })}
      >
        <Mail className="w-4 h-4" />
        <span className="text-xs font-medium">Email Us</span>
      </Button>
    </div>

    <HomeNavButton
      primary
      label="Start Healing Journey"
      href="/quiz"
      ariaLabel="Take the quiz to begin your healing journey"
      trackingCategory="faq_section"
      className="text-sm h-9"
    />
  </CardContent>
</Card>
      </div>
    </section>
  );
}