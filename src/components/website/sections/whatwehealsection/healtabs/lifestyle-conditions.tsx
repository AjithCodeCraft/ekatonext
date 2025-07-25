import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Star,
  Calendar,
  Sparkles,
  Activity
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const lifestyleConditions = [
  {
    name: 'Hypertension',
    description: 'High blood pressure managed through natural regulation and lifestyle modifications',
    symptoms: ['High blood pressure', 'Headaches', 'Dizziness', 'Chest pain', 'Shortness of breath'],
    ayurvedicView: 'Hypertension is primarily a Vata-Pitta disorder with increased pressure and heat',
    treatment: ['Blood pressure herbs', 'Stress reduction', 'Cooling therapies', 'Gentle movement'],
    timeline: '2-4 months for blood pressure improvement'
  },
  {
    name: 'Obesity',
    description: 'Sustainable weight loss and metabolic healing through comprehensive lifestyle changes',
    symptoms: ['Excess weight', 'Low energy', 'Joint pain', 'Sleep issues', 'Reduced mobility'],
    ayurvedicView: 'Obesity involves Kapha accumulation with weakened digestive fire and metabolism',
    treatment: ['Metabolism-boosting herbs', 'Structured exercise', 'Portion control', 'Lifestyle coaching'],
    timeline: '3-6 months for sustainable weight loss'
  },
  {
    name: 'Skin Conditions',
    description: 'Eczema, psoriasis, acne, and inflammatory skin issues healed from within',
    symptoms: ['Skin inflammation', 'Rashes', 'Itching', 'Dryness', 'Discoloration'],
    ayurvedicView: 'Skin conditions often reflect internal imbalances, particularly in digestion and detoxification',
    treatment: ['Detoxification protocols', 'Anti-inflammatory diet', 'Topical therapies', 'Stress management'],
    timeline: '1-3 months for visible skin improvement'
  },
  {
    name: 'Chronic Fatigue',
    description: 'Energy depletion and vitality restoration through comprehensive rejuvenation',
    symptoms: ['Persistent fatigue', 'Low motivation', 'Brain fog', 'Muscle weakness', 'Sleep issues'],
    ayurvedicView: 'Chronic fatigue indicates depleted Ojas (vital essence) and multiple dosha imbalances',
    treatment: ['Energy-building herbs', 'Rejuvenative therapies', 'Sleep optimization', 'Stress reduction'],
    timeline: '2-4 months for energy restoration'
  },
  {
    name: 'Autoimmune Support',
    description: 'Supporting immune system balance naturally while reducing inflammation',
    symptoms: ['Joint pain', 'Inflammation', 'Fatigue', 'Digestive issues', 'Skin problems'],
    ayurvedicView: 'Autoimmune conditions involve confused immunity with excessive Pitta and Ama (toxins)',
    treatment: ['Immune-modulating herbs', 'Anti-inflammatory protocols', 'Gut healing', 'Stress management'],
    timeline: '3-6 months for immune balance'
  }
];

const treatmentApproach = {
  assessment: {
    title: 'Comprehensive Lifestyle Assessment',
    description: 'We evaluate your daily habits, stress patterns, and environmental factors.',
    steps: [
      'Daily routine and habit analysis',
      'Stress and environmental factor review',
      'Constitutional lifestyle tendencies',
      'Current imbalance identification',
      'Goal setting and motivation assessment'
    ]
  },
  treatment: {
    title: 'Integrated Lifestyle Healing',
    description: 'Our approach creates sustainable changes that address modern lifestyle challenges.',
    components: [
      'Condition-specific herbal support',
      'Lifestyle modification protocols',
      'Stress management techniques',
      'Movement and exercise therapy',
      'Environmental optimization guidance'
    ]
  },
  monitoring: {
    title: 'Progress Tracking & Lifestyle Coaching',
    description: 'Ongoing support ensures sustainable lifestyle changes and lasting results.',
    features: [
      'Weekly lifestyle habit tracking',
      'Progress milestone celebrations',
      'Obstacle identification and solutions',
      'Motivation and accountability support',
      'Long-term lifestyle maintenance'
    ]
  }
};

const successStories = [
  {
    name: 'Ramesh P.',
    age: 52,
    condition: 'Hypertension',
    result: 'Blood pressure normalized, medication reduced by 50%',
    quote: 'I avoided medication for years. This natural approach finally gave me the results I needed.'
  },
  {
    name: 'Sneha T.',
    age: 36,
    condition: 'Chronic Fatigue',
    result: 'Energy levels restored, returned to active lifestyle',
    quote: 'I went from barely functioning to feeling vibrant and energetic again. Life-changing!'
  },
  {
    name: 'Arjun K.',
    age: 44,
    condition: 'Obesity',
    result: 'Lost 25kg sustainably, improved overall health markers',
    quote: 'This wasn\'t just weight loss - it was a complete transformation of my relationship with health.'
  }
];

export default function LifestyleConditionsPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/what-we-heal')}
              className="mr-4 text-teal-600 hover:text-teal-700"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to What We Heal
            </Button>
          </div>

          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full mb-6">
              <Zap className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Lifestyle-Related Conditions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-teal-600 to-blue-700 mb-6 leading-tight">
              Lifestyle-Related Conditions
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Addressing modern lifestyle challenges through ancient wisdom adapted for contemporary living
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Lifestyle and wellness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">Modern Life, Ancient Solutions</h2>
              <p className="text-xl text-white/90">Healing lifestyle-related conditions through time-tested wisdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Lifestyle Conditions We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From hypertension to chronic fatigue, we help you reclaim your health naturally
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Condition List */}
            <div className="space-y-4">
              {lifestyleConditions.map((condition, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${selectedCondition === index
                      ? 'border-green-500 shadow-lg bg-gradient-to-r from-green-50 to-teal-50'
                      : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                  onClick={() => setSelectedCondition(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.name}</h3>
                        <p className="text-gray-600 text-sm">{condition.description}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 ml-4">
                        {condition.timeline}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Condition Details */}
            <div className="sticky top-8">
              <Card className="border-green-200 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {lifestyleConditions[selectedCondition].name}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Common Symptoms:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {lifestyleConditions[selectedCondition].symptoms.map((symptom, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 text-sm">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Ayurvedic Perspective:</h4>
                      <p className="text-green-700 text-sm">{lifestyleConditions[selectedCondition].ayurvedicView}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Our Treatment Approach:</h4>
                      <div className="space-y-2">
                        {lifestyleConditions[selectedCondition].treatment.map((treatment, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 text-teal-500" />
                            <span className="text-gray-600 text-sm">{treatment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Lifestyle Medicine Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Creating sustainable lifestyle changes that address modern health challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(treatmentApproach).map(([key, approach], index) => (
              <Card key={key} className="border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 mb-6">{approach.description}</p>
                  <div className="space-y-2">
                    {(approach as any).steps?.map((item: string, i: number) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                    {(approach as any).components?.map((item: string, i: number) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                    {(approach as any).features?.map((item: string, i: number) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Lifestyle Transformation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real people who transformed their health through lifestyle medicine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.age} years • {story.condition}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic mb-4">"{story.quote}"</p>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Result:</h5>
                    <p className="text-green-700 text-sm">{story.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 via-teal-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Transform Your Lifestyle, Transform Your Health
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Begin your journey to sustainable health through natural lifestyle medicine
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-green-900 hover:bg-white/90 px-8 py-4 rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Take Dosha Quiz
              </Button>
            </Link>
            <Link to="/consultation">
            <Button size="lg" className="bg-white text-teal-900 hover:bg-white/90 px-8 py-4 rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
                Book Lifestyle Medicine Consultation
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-white/70">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Free 15-minute consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Expert lifestyle medicine team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}