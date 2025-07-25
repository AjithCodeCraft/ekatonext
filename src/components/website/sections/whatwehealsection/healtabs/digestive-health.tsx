import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Utensils,
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

import { digestiveConditions, treatmentApproach, successStories } from './data';

export default function DigestiveHealthPage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6">
              <Utensils className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-700 font-medium">Digestive & Metabolic Health</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-red-600 to-teal-700 mb-6 leading-tight">
              Digestive & Metabolic Health
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Restore your digestive fire and metabolic balance through ancient Ayurvedic wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Digestive health and nutrition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">Agni - Your Digestive Fire</h2>
              <p className="text-xl text-white/90">The foundation of health begins with strong, balanced digestion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Digestive Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From IBS to weight management, we address the root causes of digestive imbalances
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Condition List */}
            <div className="space-y-4">
              {digestiveConditions.map((condition, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${selectedCondition === index
                      ? 'border-orange-500 shadow-lg bg-gradient-to-r from-orange-50 to-red-50'
                      : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                    }`}
                  onClick={() => setSelectedCondition(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.name}</h3>
                        <p className="text-gray-600 text-sm">{condition.description}</p>
                      </div>
                      <Badge className="bg-orange-100 text-orange-700 ml-4">
                        {condition.timeline}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Condition Details */}
            <div className="sticky top-8">
              <Card className="border-orange-200 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {digestiveConditions[selectedCondition].name}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Common Symptoms:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {digestiveConditions[selectedCondition].symptoms.map((symptom, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-orange-500" />
                            <span className="text-gray-600 text-sm">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Ayurvedic Perspective:</h4>
                      <p className="text-orange-700 text-sm">{digestiveConditions[selectedCondition].ayurvedicView}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Our Treatment Approach:</h4>
                      <div className="space-y-2">
                        {digestiveConditions[selectedCondition].treatment.map((treatment, i) => (
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Digestive Health Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strengthening your digestive fire while healing the gut-brain connection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(treatmentApproach).map(([key, approach], index) => (
              <Card key={key} className="border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 mb-6">{approach.description}</p>
                  <div className="space-y-2">
                    {(approach.items)?.map((item: string, i: number) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
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
              Digestive Health Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real people who restored their digestive health naturally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900 via-red-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Restore Your Digestive Health
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Begin your journey to optimal digestion and metabolic balance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-orange-900 hover:bg-white/90 px-8 py-4 rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Take Dosha Quiz
              </Button>
            </Link>
            <Link to="/consultation">
              <Button size="lg" className="bg-white text-orange-900 hover:bg-white/90 px-8 py-4 rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Book Digestive Health Consultation
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
              <span>Expert digestive health team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}