import { Button } from '@/components/website/ui/button';
import { Card, CardContent } from '@/components/website/ui/card';
import { Sparkles, ArrowRight, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuizIntroProps {
  onStartQuiz: () => void;
}

export const QuizIntro = ({ onStartQuiz }: QuizIntroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-teal-200 shadow-xl bg-white/80 backdrop-blur-sm mb-8">
        <CardContent className="p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl text-white">🧬</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 mb-4">
              Welcome to Your Prakriti Analysis
            </h2>
            <p className="text-teal-700 text-lg">
              Discover your unique Ayurvedic body-mind constitution.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-teal-700 mb-6 leading-relaxed">
              In Ayurveda, your Prakriti (natural constitution) is the foundation of understanding your physical, emotional, and spiritual well-being. This quiz helps identify the balance of Vata, Pitta, and Kapha within you — guiding your ideal food, lifestyle, healing practices, and even how you respond to stress or seasons.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold text-teal-800 mb-4 flex items-center">
              <span className="text-xl mr-2">🌱</span> Before You Begin: A Few Gentle Reminders
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-teal-500 flex-shrink-0">🔹</span>
                <div>
                  <h4 className="font-medium text-teal-800 mb-1">Answer Honestly & Intuitively</h4>
                  <p className="text-teal-600 text-sm">
                    This is not a personality test — it's a self-awareness tool. Don't think too hard. Choose what feels most naturally you, not what you aspire to be or how you behave during stress or illness.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-teal-500 flex-shrink-0">🔹</span>
                <div>
                  <h4 className="font-medium text-teal-800 mb-1">Think Long-Term</h4>
                  <p className="text-teal-600 text-sm">
                    Focus on how you've been most of your life, not recent changes due to diet, habits, or temporary illness.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-teal-500 flex-shrink-0">🔹</span>
                <div>
                  <h4 className="font-medium text-teal-800 mb-1">Stay Centered</h4>
                  <p className="text-teal-600 text-sm">
                    Take a few deep breaths. This is a journey inward. Answer from a place of calm and curiosity.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-teal-500 flex-shrink-0">🔹</span>
                <div>
                  <h4 className="font-medium text-teal-800 mb-1">Consistency Matters</h4>
                  <p className="text-teal-600 text-sm">
                    Some questions may feel repetitive — this is intentional. It ensures accuracy by exploring different aspects of the same trait.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 p-4 bg-teal-50 rounded-lg border border-teal-100 flex items-start space-x-3">
            <Lock className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-teal-800 mb-1">Your answers are private</h4>
              <p className="text-teal-600 text-sm">
                All your responses are encrypted and confidential. Your results help our healers personalize your healing journey.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold text-teal-800 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-teal-500" /> What You'll Receive
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-teal-700 text-sm">
                    A breakdown of your dominant Dosha(s): Vata, Pitta, or Kapha
                  </p>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-teal-700 text-sm">
                    Lifestyle, food, and healing insights
                  </p>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-teal-700 text-sm">
                    Personalized EkaBrahmaa program suggestions
                  </p>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-teal-700 text-sm">
                    Option to talk to a healer for deeper guidance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-teal-700 mb-6 italic">
              🧘🏽‍♀️ Begin when you're ready. Your body already knows the truth.
              Let's explore it together.
            </p>
            <Button 
              onClick={onStartQuiz}
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Prakriti Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};