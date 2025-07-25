import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  Star,
  Calendar,
  Sparkles,
  Activity as LucideActivity
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const womensHealthConditions = [
  {
    name: 'PCOS/PCOD',
    description: 'Polycystic ovarian syndrome treated through dosha balancing and hormonal harmony',
    symptoms: ['Irregular periods', 'Weight gain', 'Acne', 'Hair loss', 'Insulin resistance'],
    ayurvedicView: 'PCOS is primarily a Kapha-Vata disorder with impaired metabolism and circulation',
    treatment: ['Hormone-balancing herbs', 'Anti-inflammatory diet', 'Specific yoga sequences', 'Stress management'],
    timeline: '3-6 months for significant improvement'
  },
  {
    name: 'Menstrual Disorders',
    description: 'Irregular cycles, painful periods, and hormonal imbalances addressed naturally',
    symptoms: ['Irregular cycles', 'Heavy bleeding', 'Severe cramps', 'PMS symptoms', 'Mood swings'],
    ayurvedicView: 'Menstrual disorders often stem from Vata imbalance affecting Apana Vayu',
    treatment: ['Cycle-regulating herbs', 'Warming therapies', 'Gentle yoga', 'Nutritional support'],
    timeline: '2-4 cycles for noticeable improvement'
  },
  {
    name: 'Fertility Support',
    description: 'Natural conception support and reproductive wellness enhancement',
    symptoms: ['Difficulty conceiving', 'Low ovarian reserve', 'Poor egg quality', 'Hormonal imbalances'],
    ayurvedicView: 'Fertility depends on healthy Ojas (vital essence) and balanced reproductive tissues',
    treatment: ['Fertility-enhancing herbs', 'Rejuvenative therapies', 'Stress reduction', 'Nutritional optimization'],
    timeline: '3-6 months preparation recommended'
  },
  {
    name: 'Menopause Management',
    description: 'Smooth transition through natural hormonal changes with minimal discomfort',
    symptoms: ['Hot flashes', 'Night sweats', 'Mood changes', 'Sleep disturbances', 'Bone health concerns'],
    ayurvedicView: 'Menopause is a natural Vata-increasing phase requiring nourishment and grounding',
    treatment: ['Cooling herbs', 'Hormone-supporting nutrition', 'Restorative practices', 'Bone health support'],
    timeline: '1-3 months for symptom relief'
  },
  {
    name: 'Endometriosis',
    description: 'Managing inflammation and pain naturally while supporting overall reproductive health',
    symptoms: ['Pelvic pain', 'Heavy periods', 'Painful intercourse', 'Digestive issues', 'Fatigue'],
    ayurvedicView: 'Endometriosis involves Pitta aggravation with inflammatory processes',
    treatment: ['Anti-inflammatory protocols', 'Pain management herbs', 'Cooling therapies', 'Stress reduction'],
    timeline: '2-4 months for pain reduction'
  }
];

const treatmentApproach = {
  assessment: {
    title: 'Comprehensive Women\'s Health Assessment',
    description: 'We begin with a thorough evaluation of your menstrual history, hormonal patterns, and overall reproductive health.',
    steps: [
      'Detailed menstrual cycle analysis',
      'Hormonal pattern assessment',
      'Constitutional evaluation (Prakriti)',
      'Current imbalance identification (Vikriti)',
      'Lifestyle and stress factor review'
    ]
  },
  treatment: {
    title: 'Integrated Treatment Protocol',
    description: 'Our five-healer team creates a personalized protocol addressing all aspects of women\'s health.',
    components: [
      'Ayurvedic herbal formulations for hormonal balance',
      'Anti-inflammatory nutrition plans',
      'Specific yoga sequences for reproductive health',
      'Stress management and emotional support',
      'Lifestyle modifications for optimal wellness'
    ]
  },
  monitoring: {
    title: 'Progress Monitoring & Adjustment',
    description: 'Regular check-ins and protocol adjustments ensure optimal results throughout your healing journey.',
    features: [
      'Monthly progress evaluations',
      'Symptom tracking and analysis',
      'Protocol refinements based on response',
      'Continuous support from your healing team',
      'Long-term maintenance planning'
    ]
  }
};

const successStories = [
  {
    name: 'Priya S.',
    age: 28,
    condition: 'PCOS',
    result: 'Regular cycles restored in 4 months, 12kg weight loss',
    quote: 'The holistic approach addressed not just my PCOS but my overall well-being. I feel like myself again.'
  },
  {
    name: 'Meera K.',
    age: 35,
    condition: 'Endometriosis',
    result: '70% reduction in pain, improved quality of life',
    quote: 'After years of pain, I finally found relief through this natural approach. The team understood my struggle.'
  },
  {
    name: 'Anjali R.',
    age: 42,
    condition: 'Menopause',
    result: 'Hot flashes reduced by 80%, better sleep quality',
    quote: 'Menopause doesn\'t have to be miserable. This program helped me transition gracefully and naturally.'
  }
];

export default function WomensHealthPage() {
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
          <div className="flex items-center">
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-6">
              <Heart className="w-5 h-5 text-pink-600 mr-2" />
              <span className="text-pink-700 font-medium">Women's Health Specialization</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-rose-600 to-teal-700 mb-6 leading-tight">
              Women's Health
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive care for women's unique health needs through ancient wisdom and modern understanding
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Women's health and wellness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-pink-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">Honoring Women's Natural Rhythms</h2>
              <p className="text-xl text-white/90">Supporting your body's wisdom through every phase of life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Conditions We Specialize In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our holistic approach addresses the root causes of women's health challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Condition List */}
            <div className="space-y-4">
              {womensHealthConditions.map((condition, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedCondition === index 
                      ? 'border-pink-500 shadow-lg bg-gradient-to-r from-pink-50 to-rose-50' 
                      : 'border-gray-200 hover:border-pink-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedCondition(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.name}</h3>
                        <p className="text-gray-600 text-sm">{condition.description}</p>
                      </div>
                      <Badge className="bg-pink-100 text-pink-700 ml-4">
                        {condition.timeline}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Condition Details */}
            <div className="sticky top-8">
              <Card className="border-pink-200 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {womensHealthConditions[selectedCondition].name}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Common Symptoms:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {womensHealthConditions[selectedCondition].symptoms.map((symptom, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-pink-500" />
                            <span className="text-gray-600 text-sm">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">Ayurvedic Perspective:</h4>
                      <p className="text-pink-700 text-sm">{womensHealthConditions[selectedCondition].ayurvedicView}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Our Treatment Approach:</h4>
                      <div className="space-y-2">
                        {womensHealthConditions[selectedCondition].treatment.map((treatment, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <LucideActivity className="w-4 h-4 text-teal-500" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Women's Health Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive, personalized approach that honors your body's natural wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(treatmentApproach).map(([key, approach], index) => (
              <Card key={key} className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white mb-6">
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
              Real Women, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how our approach has transformed women's health and lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900 via-rose-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Begin Your Women's Health Journey
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Take the first step toward balanced hormones, regular cycles, and vibrant health
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-pink-900 hover:bg-white/90 px-8 py-4 rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Take Dosha Quiz
              </Button>
            </Link>
            <Link to="/consultation">
            <Button size="lg" className="bg-white text-teal-900 hover:bg-white/90 px-8 py-4 rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
                Book Women's Health Consultation
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
              <span>Expert women's health team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}