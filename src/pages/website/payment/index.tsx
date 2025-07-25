import { useState } from 'react';
import { Button } from '@/components/website/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Clock, 
  Users,   
  AlertTriangle,
  CreditCard,
  Shield
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useNotifications } from '@/contexts/NotificationContext';

const programs = [
  {
    id: 'ekapavana',
    title: 'ekaPavana',
    subtitle: 'Clear Within',
    duration: '7 Days',
    price: 3999,
    healers: 2,
    description: 'Gentle cleansing and reconnection with your body'
  },
  {
    id: 'ekasanskara',
    title: 'ekaSanskara',
    subtitle: 'Rewrite Your Rhythm',
    duration: '14 Days',
    price: 7999,
    healers: 4,
    description: 'Deep transformation through intensive practices'
  },
  {
    id: 'ekasamanvaya',
    title: 'ekaSamanvaya',
    subtitle: 'In Tune with You',
    duration: '21 Days',
    price: 7999,
    healers: 5,
    description: 'Comprehensive harmony and balance'
  },
  {
    id: 'ekaudaya',
    title: 'ekaUdaya',
    subtitle: 'Rise into Radiance',
    duration: '28 Days',
    price: 11999,
    healers: 5,
    description: 'Complete transformation and radiant health'
  },
  {
    id: 'ekaprabodha',
    title: 'ekaPrabodha',
    subtitle: 'Awaken the Wisdom Within',
    duration: '45 Days',
    price: 17999,
    healers: 5,
    description: 'Ultimate awakening and wisdom cultivation'
  }
];

const healthConditions = [
  'Pregnancy',
  'Cancer (any type)',
  'Chronic Kidney Disease',
  'Chronic Liver Disease',
  'Under 16 years old',
  'Severe Heart Conditions',
  'Active Eating Disorders',
  'Severe Mental Health Conditions'
];

export default function PaymentPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addNotification } = useNotifications();
  const [selectedProgram, setSelectedProgram] = useState('ekapavana');
  const [healthSafety, setHealthSafety] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedProgramData = programs.find(p => p.id === selectedProgram);

  // Get recommended program from localStorage if available
  useState(() => {
    try {
      const doshaData = localStorage.getItem('prakritiResults');
      if (doshaData) {
        const dosha = JSON.parse(doshaData);
        // Simple logic to recommend a program based on dominant dosha
        const dominantDosha = Object.keys(dosha).reduce((a, b) => dosha[a] > dosha[b] ? a : b);
        
        if (dominantDosha === 'vata') {
          setSelectedProgram('ekapavana');
        } else if (dominantDosha === 'pitta') {
          setSelectedProgram('ekasanskara');
        } else {
          setSelectedProgram('ekasamanvaya');
        }
      }
    } catch (error) {
      console.error("Error retrieving dosha data:", error);
    }
  }, );

  const handleHealthConditionChange = (condition: string, checked: boolean) => {
    if (checked) {
      setHealthSafety([...healthSafety, condition]);
    } else {
      setHealthSafety(healthSafety.filter(c => c !== condition));
    }
  };

  const handlePayment = () => {
    if (healthSafety.length > 0) {
      addNotification({
        title: 'Health Conditions Require Consultation',
        message: 'Please consult with our healers before proceeding with your selected health conditions.',
        type: 'system'
      });
      return;
    }
    
    if (!agreedToTerms) {
      addNotification({
        title: 'Terms Agreement Required',
        message: 'Please agree to the terms and conditions to proceed.',
        type: 'system'
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Save order to localStorage
      const order = {
        id: `ORD-${Date.now()}`,
        program: selectedProgramData,
        purchaseDate: new Date().toISOString(),
        status: 'paid',
        user: user
      };
      
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      
      // Add program to user's active programs
      const userPrograms = JSON.parse(localStorage.getItem('userPrograms') || '[]');
      userPrograms.push({
        ...selectedProgramData,
        startDate: new Date().toISOString(),
        progress: 0,
        currentDay: 1
      });
      localStorage.setItem('userPrograms', JSON.stringify(userPrograms));
      
      setIsProcessing(false);
      
      // Show success notification
      addNotification({
        title: 'Payment Successful!',
        message: `Thank you for joining the ${selectedProgramData?.title} program. Your healing journey begins now!`,
        type: 'system'
      });
      
      // Redirect to thank you page
      navigate('/payment/thank-you');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-teal-900 mb-4">
              Choose Your Healing Program
            </h1>
            <p className="text-xl text-teal-700">
              Select the program that resonates with your healing goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Program Selection */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-teal-200 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-900">Select Your Program</CardTitle>
                  <CardDescription className="text-teal-600">
                    Choose the healing journey that feels right for you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedProgram} onValueChange={setSelectedProgram}>
                    {programs.map((program) => (
                      <div key={program.id} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-teal-50 transition-colors">
                        <RadioGroupItem value={program.id} id={program.id} />
                        <Label htmlFor={program.id} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-teal-900">{program.title}</h3>
                              <p className="text-pink-600 font-medium">{program.subtitle}</p>
                              <p className="text-sm text-teal-700 mt-1">{program.description}</p>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-teal-600">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{program.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Users className="w-4 h-4" />
                                  <span>{program.healers} Healers</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-teal-900">₹{program.price.toLocaleString()}</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Health Safety Check */}
              <Card className="border-orange-200 shadow-lg bg-orange-50/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-900 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Health Safety Check
                  </CardTitle>
                  <CardDescription className="text-orange-700">
                    Please check any conditions that apply to you. Our healers will provide special guidance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {healthConditions.map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={condition}
                          checked={healthSafety.includes(condition)}
                          onCheckedChange={(checked) => handleHealthConditionChange(condition, checked as boolean)}
                        />
                        <Label htmlFor={condition} className="text-sm text-orange-800 cursor-pointer">
                          {condition}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {healthSafety.length > 0 && (
                    <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <Shield className="w-4 h-4 inline mr-1" />
                        You've selected conditions that require special attention. Our healers will provide personalized guidance.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Payment Summary */}
            <div className="space-y-6">
              <Card className="border-teal-200 shadow-lg bg-white/90 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-900">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedProgramData && (
                    <>
                      <div className="p-4 bg-gradient-to-r from-teal-50 to-pink-50 rounded-lg">
                        <h3 className="font-bold text-teal-900">{selectedProgramData.title}</h3>
                        <p className="text-pink-600 font-medium">{selectedProgramData.subtitle}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-teal-700">{selectedProgramData.duration}</span>
                          <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                            {selectedProgramData.healers} Healers
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-teal-700">Program Fee</span>
                          <span className="font-medium">₹{selectedProgramData.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-teal-700">Processing Fee</span>
                          <span className="font-medium">₹0</span>
                        </div>
                        <div className="border-t border-teal-200 pt-2">
                          <div className="flex justify-between">
                            <span className="font-bold text-teal-900">Total</span>
                            <span className="font-bold text-xl text-teal-900">₹{selectedProgramData.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={agreedToTerms}
                            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                          />
                          <Label htmlFor="terms" className="text-sm text-teal-700 cursor-pointer">
                            I agree to the{' '}
                            <Link to="/terms" className="text-teal-600 hover:underline">
                              Terms & Conditions
                            </Link>
                          </Label>
                        </div>

                        <Button 
                          onClick={handlePayment}
                          disabled={!agreedToTerms || isProcessing}
                          className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 rounded-full"
                        >
                          {isProcessing ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                              Processing...
                            </div>
                          ) : (
                            <>
                              <CreditCard className="w-5 h-5 mr-2" />
                              Proceed to Payment
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-sm text-teal-600">
                          <Shield className="w-4 h-4" />
                          <span>Secure payment powered by Razorpay</span>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}