import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  Star,
  Calendar,
  Sparkles,
  Heart
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const hormonalConditions = [
  {
    name: 'Thyroid Disorders',
    description: 'Hypo/hyperthyroidism and thyroid imbalances addressed through natural regulation',
    symptoms: ['Weight changes', 'Energy fluctuations', 'Temperature sensitivity', 'Mood changes', 'Hair loss'],
    ayurvedicView: 'Thyroid disorders involve Kapha-Vata imbalance affecting metabolism and circulation',
    treatment: ['Thyroid-supporting herbs', 'Metabolic nutrition', 'Stress reduction', 'Lifestyle optimization'],
    timeline: '3-6 months for thyroid balance'
  },
  {
    name: 'Diabetes Type 2',
    description: 'Blood sugar regulation and insulin sensitivity improvement through natural methods',
    symptoms: ['High blood sugar', 'Increased thirst', 'Frequent urination', 'Fatigue', 'Slow healing'],
    ayurvedicView: 'Diabetes is primarily a Kapha disorder with impaired metabolism and circulation',
    treatment: ['Blood sugar herbs', 'Anti-diabetic diet', 'Exercise protocols', 'Pancreatic support'],
    timeline: '2-4 months for blood sugar improvement'
  },
  {
    name: 'Metabolic Syndrome',
    description: 'Comprehensive metabolic dysfunction addressed through integrated healing',
    symptoms: ['Abdominal weight gain', 'High blood pressure', 'Insulin resistance', 'High cholesterol'],
    ayurvedicView: 'Metabolic syndrome involves multiple dosha imbalances with weakened digestive fire',
    treatment: ['Metabolic herbs', 'Detoxification protocols', 'Exercise therapy', 'Stress management'],
    timeline: '4-6 months for metabolic improvement'
  },
  {
    name: 'Adrenal Fatigue',
    description: 'Chronic fatigue and stress hormone imbalance restored through adrenal support',
    symptoms: ['Chronic fatigue', 'Difficulty waking', 'Afternoon crashes', 'Salt cravings', 'Low immunity'],
    ayurvedicView: 'Adrenal fatigue indicates depleted Ojas (vital essence) and Vata aggravation',
    treatment: ['Adaptogenic herbs', 'Stress reduction', 'Sleep optimization', 'Nutritional support'],
    timeline: '2-4 months for energy restoration'
  },
  {
    name: 'Insulin Resistance',
    description: 'Pre-diabetes and metabolic dysfunction reversed through natural interventions',
    symptoms: ['Weight gain', 'Sugar cravings', 'Energy crashes', 'Difficulty losing weight', 'Brain fog'],
    ayurvedicView: 'Insulin resistance involves Kapha accumulation with weakened digestive fire',
    treatment: ['Insulin-sensitizing herbs', 'Low-glycemic nutrition', 'Movement therapy', 'Stress management'],
    timeline: '2-3 months for insulin sensitivity'
  }
];

const treatmentApproach = {
  assessment: {
    title: 'Comprehensive Hormonal Assessment',
    description: 'We evaluate your hormonal patterns, metabolic function, and constitutional tendencies.',
    steps: [
      'Hormonal pattern analysis',
      'Metabolic function evaluation',
      'Constitutional assessment',
      'Lifestyle and stress factor review',
      'Nutritional status evaluation'
    ]
  },
  treatment: {
    title: 'Integrated Hormonal Healing',
    description: 'Our approach balances hormones naturally while supporting overall endocrine health.',
    components: [
      'Hormone-balancing herbal formulations',
      'Endocrine-supporting nutrition',
      'Stress reduction and adrenal support',
      'Movement therapy for hormonal health',
      'Sleep optimization for hormone production'
    ]
  },
  monitoring: {
    title: 'Progress Tracking & Optimization',
    description: 'Regular monitoring ensures your hormonal balance continues to improve.',
    features: [
      'Monthly hormonal symptom tracking',
      'Energy and mood assessments',
      'Metabolic marker monitoring',
      'Protocol adjustments based on progress',
      'Long-term hormonal health maintenance'
    ]
  }
};

const successStories = [
  {
    name: 'Kavya R.',
    age: 34,
    condition: 'Thyroid Disorder',
    result: 'TSH normalized, energy restored, weight stabilized',
    quote: 'After struggling with thyroid issues for years, I finally found a natural solution that works.'
  },
  {
    name: 'Suresh M.',
    age: 48,
    condition: 'Type 2 Diabetes',
    result: 'HbA1c reduced from 9.2% to 6.8%, medication reduced',
    quote: 'The holistic approach helped me reverse my diabetes naturally. I feel healthier than ever.'
  },
  {
    name: 'Deepa S.',
    age: 41,
    condition: 'Adrenal Fatigue',
    result: 'Energy levels restored, stress resilience improved',
    quote: 'I went from exhausted all the time to having sustained energy throughout the day.'
  }
];

export default function HormonalBalancePage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mb-6">
              <Activity className="w-5 h-5 text-teal-600 mr-2" />
              <span className="text-teal-700 font-medium">Hormonal Balance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-cyan-600 to-blue-700 mb-6 leading-tight">
              Hormonal Balance
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Restore your body's natural hormonal harmony through ancient wisdom and modern science
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Hormonal balance and wellness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-teal-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">Hormones - Your Body's Messengers</h2>
              <p className="text-xl text-white/90">Restoring natural rhythm and balance to your endocrine system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Hormonal Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From thyroid disorders to diabetes, we address hormonal imbalances naturally
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Condition List */}
            <div className="space-y-4">
              {hormonalConditions.map((condition, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedCondition === index 
                      ? 'border-teal-500 shadow-lg bg-gradient-to-r from-teal-50 to-cyan-50' 
                      : 'border-gray-200 hover:border-teal-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedCondition(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.name}</h3>
                        <p className="text-gray-600 text-sm">{condition.description}</p>
                      </div>
                      <Badge className="bg-teal-100 text-teal-700 ml-4">
                        {condition.timeline}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Condition Details */}
            <div className="sticky top-8">
              <Card className="border-teal-200 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {hormonalConditions[selectedCondition].name}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Common Symptoms:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {hormonalConditions[selectedCondition].symptoms.map((symptom, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-teal-500" />
                            <span className="text-gray-600 text-sm">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-800 mb-2">Ayurvedic Perspective:</h4>
                      <p className="text-teal-700 text-sm">{hormonalConditions[selectedCondition].ayurvedicView}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Our Treatment Approach:</h4>
                      <div className="space-y-2">
                        {hormonalConditions[selectedCondition].treatment.map((treatment, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Heart className="w-4 h-4 text-pink-500" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Hormonal Balance Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Restoring natural hormonal rhythm through comprehensive endocrine support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(treatmentApproach).map(([key, approach], index) => (
              <Card key={key} className="border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 mb-6">{approach.description}</p>
                  <div className="space-y-2">
                    {(
                      'steps' in approach ? approach.steps :
                      'components' in approach ? approach.components :
                      approach.features
                    )?.map((item: string, i: number) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
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
              Hormonal Balance Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real people who restored their hormonal health naturally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Restore Your Hormonal Balance
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Begin your journey to balanced hormones and optimal metabolic health
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-teal-900 hover:bg-white/90 px-8 py-4 rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Take Dosha Quiz
              </Button>
            </Link>
            <Link to="/consultation">
            <Button size="lg" className="bg-white text-teal-900 hover:bg-white/90 px-8 py-4 rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
                Book Hormonal Health Consultation
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
              <span>Expert hormonal health team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}