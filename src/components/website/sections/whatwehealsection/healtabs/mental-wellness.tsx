import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
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

const mentalWellnessConditions = [
  {
    name: 'Anxiety Disorders',
    description: 'Chronic worry, panic attacks, and nervous system imbalance addressed holistically',
    symptoms: ['Excessive worry', 'Panic attacks', 'Restlessness', 'Sleep disturbances', 'Physical tension'],
    ayurvedicView: 'Anxiety is primarily a Vata disorder with excessive movement in the nervous system',
    treatment: ['Nervine herbs', 'Grounding practices', 'Breathwork', 'Stress reduction techniques'],
    timeline: '1-3 months for significant improvement'
  },
  {
    name: 'Depression',
    description: 'Low mood, lack of motivation, and emotional heaviness lifted through natural support',
    symptoms: ['Persistent sadness', 'Loss of interest', 'Fatigue', 'Sleep changes', 'Difficulty concentrating'],
    ayurvedicView: 'Depression often involves Kapha stagnation with possible Vata and Pitta imbalances',
    treatment: ['Mood-lifting herbs', 'Energizing practices', 'Light therapy', 'Nutritional support'],
    timeline: '2-4 months for mood stabilization'
  },
  {
    name: 'Sleep Disorders',
    description: 'Insomnia, restless sleep, and sleep quality issues resolved through natural methods',
    symptoms: ['Difficulty falling asleep', 'Frequent waking', 'Early morning awakening', 'Unrefreshing sleep'],
    ayurvedicView: 'Sleep disorders typically indicate Vata aggravation affecting the nervous system',
    treatment: ['Sleep-promoting herbs', 'Evening routines', 'Relaxation techniques', 'Sleep hygiene'],
    timeline: '2-6 weeks for sleep improvement'
  },
  {
    name: 'Stress Management',
    description: 'Chronic stress and burnout recovery through nervous system regulation',
    symptoms: ['Chronic tension', 'Overwhelm', 'Irritability', 'Physical symptoms', 'Burnout'],
    ayurvedicView: 'Chronic stress depletes Ojas (vital essence) and aggravates all doshas',
    treatment: ['Adaptogenic herbs', 'Stress reduction practices', 'Lifestyle modifications', 'Resilience building'],
    timeline: '1-2 months for stress relief'
  },
  {
    name: 'ADHD Support',
    description: 'Attention and focus challenges addressed through natural cognitive enhancement',
    symptoms: ['Difficulty concentrating', 'Hyperactivity', 'Impulsiveness', 'Disorganization', 'Restlessness'],
    ayurvedicView: 'ADHD involves Vata excess in the mind with possible Rajas (mental activity) imbalance',
    treatment: ['Focus-enhancing herbs', 'Meditation practices', 'Structured routines', 'Nutritional support'],
    timeline: '2-4 months for cognitive improvement'
  }
];

const treatmentApproach = {
  assessment: {
    title: 'Comprehensive Mental Health Assessment',
    description: 'We evaluate your mental patterns, stress levels, and mind-body connection.',
    steps: [
      'Mental constitution (Manas Prakriti) assessment',
      'Stress pattern and trigger identification',
      'Sleep and lifestyle habit analysis',
      'Emotional pattern recognition',
      'Nervous system function evaluation'
    ]
  },
  treatment: {
    title: 'Integrated Mind-Body Healing',
    description: 'Our approach addresses mental health through both psychological and physical interventions.',
    components: [
      'Nervine and adaptogenic herbs',
      'Mindfulness and meditation practices',
      'Nervous system regulation techniques',
      'Nutritional support for brain health',
      'Lifestyle modifications for mental wellness'
    ]
  },
  monitoring: {
    title: 'Progress Tracking & Support',
    description: 'Continuous monitoring and adjustment ensure sustained mental wellness.',
    features: [
      'Weekly mood and energy tracking',
      'Sleep quality assessments',
      'Stress level monitoring',
      'Coping strategy development',
      'Long-term mental wellness planning'
    ]
  }
};

const successStories = [
  {
    name: 'Anita P.',
    age: 32,
    condition: 'Anxiety & Panic Attacks',
    result: 'Panic attacks eliminated, anxiety reduced by 80%',
    quote: 'I was having daily panic attacks. Now I feel calm and in control of my life again.'
  },
  {
    name: 'Rohit S.',
    age: 28,
    condition: 'Depression',
    result: 'Mood stabilized, energy restored, off antidepressants',
    quote: 'The holistic approach helped me understand the root causes of my depression and heal naturally.'
  },
  {
    name: 'Maya K.',
    age: 45,
    condition: 'Chronic Stress',
    result: 'Stress levels normalized, sleep quality improved',
    quote: 'I learned to manage stress in a completely different way. The tools I gained are life-changing.'
  }
];

export default function MentalWellnessPage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">Mental & Emotional Wellness</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-indigo-600 to-teal-700 mb-6 leading-tight">
              Mental & Emotional Wellness
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Healing the mind-body connection through ancient wisdom and modern understanding
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3759079/pexels-photo-3759079.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Mental wellness and meditation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">Mind-Body Harmony</h2>
              <p className="text-xl text-white/90">Mental health is inseparable from physical wellbeing in Ayurveda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Mental Health Conditions We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for mental and emotional wellbeing through holistic healing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Condition List */}
            <div className="space-y-4">
              {mentalWellnessConditions.map((condition, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedCondition === index 
                      ? 'border-purple-500 shadow-lg bg-gradient-to-r from-purple-50 to-indigo-50' 
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedCondition(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.name}</h3>
                        <p className="text-gray-600 text-sm">{condition.description}</p>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 ml-4">
                        {condition.timeline}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Condition Details */}
            <div className="sticky top-8">
              <Card className="border-purple-200 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {mentalWellnessConditions[selectedCondition].name}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Common Symptoms:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {mentalWellnessConditions[selectedCondition].symptoms.map((symptom, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            <span className="text-gray-600 text-sm">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Ayurvedic Perspective:</h4>
                      <p className="text-purple-700 text-sm">{mentalWellnessConditions[selectedCondition].ayurvedicView}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Our Treatment Approach:</h4>
                      <div className="space-y-2">
                        {mentalWellnessConditions[selectedCondition].treatment.map((treatment, i) => (
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Mental Wellness Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Integrating mind-body healing for comprehensive mental health support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(treatmentApproach).map(([key, approach], index) => (
              <Card key={key} className="border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white mb-6">
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
              Mental Wellness Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real transformations in mental and emotional health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-indigo-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Begin Your Mental Wellness Journey
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Take the first step toward mental clarity, emotional balance, and inner peace
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 px-8 py-4 rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Take Dosha Quiz
              </Button>
            </Link>
            <Link to="/consultation">
            <Button size="lg" className="bg-white text-teal-900 hover:bg-white/90 px-8 py-4 rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
                Book Mental Wellness Consultation
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
              <span>Expert mental health team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}