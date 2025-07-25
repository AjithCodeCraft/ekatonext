import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft, 
  Clock, 
  Video, 
  Phone, 
  CreditCard,
  CheckCircle,
  Star,
  Shield,
  User
} from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface BookingData {
  healerId: string;
  duration: number;
  mode: 'video' | 'audio';
  timeSlot: string;
  date: string;
}

export default function HealerBookingPage() {
  const { healerId } = useParams();
  const navigate = useNavigate();
  const [healer, setHealer] = useState<any>(null);
  const [userDosha, setUserDosha] = useState<any>(null);
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [selectedMode, setSelectedMode] = useState<'video' | 'audio'>('video');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '2:00 PM', available: true },
    { id: '5', time: '3:00 PM', available: true },
    { id: '6', time: '4:00 PM', available: true },
    { id: '7', time: '5:00 PM', available: false },
  ];

  const pricingOptions = [
    { duration: 15, price: 299, label: '15 minutes', description: 'Quick consultation' },
    { duration: 30, price: 499, label: '30 minutes', description: 'Standard consultation', popular: true },
    { duration: 45, price: 699, label: '45 minutes', description: 'Detailed consultation' }
  ];

  useEffect(() => {
    // Mock healer data - in real app, fetch from API
    const mockHealer = {
      id: healerId,
      name: 'Dr. Priya Sharma',
      type: 'Ayurveda Doctor',
      specialties: ['Digestive Health', 'Women\'s Health', 'Stress Management'],
      rating: 4.9,
      reviews: 247,
      experience: 12,
      bio: 'Specialized in traditional Ayurvedic healing with focus on digestive wellness and women\'s health.',
      avatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    };
    setHealer(mockHealer);

    // Get user's dosha data
    try {
      const doshaData = localStorage.getItem('prakritiResults');
      if (doshaData) {
        setUserDosha(JSON.parse(doshaData));
      }
    } catch (error) {
      console.error("Error retrieving dosha data:", error);
    }

    // Set default date to today
    const today = new Date();
    setSelectedDate(today.toISOString().split('T')[0]);
  }, [healerId]);

  const handleBooking = async () => {
    if (!selectedTimeSlot || !selectedDate) {
      alert('Please select a time slot and date');
      return;
    }

    setIsBooking(true);

    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));

      const bookingData: BookingData = {
        healerId: healerId!,
        duration: selectedDuration,
        mode: selectedMode,
        timeSlot: selectedTimeSlot,
        date: selectedDate
      };

      // Save booking data
      localStorage.setItem('latestBooking', JSON.stringify(bookingData));
      setBookingComplete(true);

    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed. Please try again.');
    } finally {
      setIsBooking(false);
    }
  };

  const getSelectedPrice = () => {
    const option = pricingOptions.find(p => p.duration === selectedDuration);
    return option?.price || 499;
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-teal-200 shadow-xl bg-white/90 backdrop-blur-sm text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-teal-900 mb-4">
                Consultation Booked Successfully!
              </h2>
              
              <p className="text-xl text-teal-700 mb-8 leading-relaxed">
                Your consultation with {healer?.name} has been confirmed. You'll receive a confirmation email shortly.
              </p>
              
              <div className="bg-teal-50 p-6 rounded-lg mb-8 text-left">
                <h3 className="font-semibold text-teal-800 mb-4">Booking Details:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-teal-700">Healer:</span>
                    <span className="font-medium text-teal-900">{healer?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Date:</span>
                    <span className="font-medium text-teal-900">{new Date(selectedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Time:</span>
                    <span className="font-medium text-teal-900">{selectedTimeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Duration:</span>
                    <span className="font-medium text-teal-900">{selectedDuration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Mode:</span>
                    <span className="font-medium text-teal-900 capitalize">{selectedMode}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-3 rounded-full"
                >
                  Go to Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/programs')}
                  className="border-teal-200 text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-full"
                >
                  Explore Programs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!healer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-teal-700">Loading healer details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/talk-to-healer')}
            className="mr-4 text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Healers
          </Button>
          <h1 className="text-3xl font-serif font-bold text-teal-900">
            Book Consultation
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Healer Info */}
          <div className="lg:col-span-1">
            <Card className="border-teal-200 shadow-lg bg-white/90 backdrop-blur-sm sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={healer.avatar}
                      alt={healer.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-teal-200 mx-auto"
                    />
                    {healer.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mt-4">{healer.name}</h3>
                  <p className="text-teal-600">{healer.type}</p>
                  
                  <div className="flex items-center justify-center space-x-4 mt-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{healer.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{healer.reviews} reviews</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-teal-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {healer.specialties.map((specialty: string, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-teal-50 text-teal-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-teal-800 mb-2">About:</h4>
                    <p className="text-sm text-teal-700 leading-relaxed">{healer.bio}</p>
                  </div>

                  {userDosha && (
                    <div className="bg-gradient-to-r from-teal-50 to-pink-50 p-4 rounded-lg">
                      <h4 className="font-medium text-teal-800 mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Your Dosha Profile:
                      </h4>
                      <p className="text-sm text-teal-700">
                        {Object.keys(userDosha).reduce((a, b) => userDosha[a] > userDosha[b] ? a : b)} Dominant
                      </p>
                      <p className="text-xs text-teal-600 mt-1">
                        This information will help your healer provide personalized guidance
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-teal-200 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-teal-900">Select Your Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Duration Selection */}
                <div>
                  <h3 className="font-medium text-teal-800 mb-4">Choose Duration:</h3>
                  <RadioGroup value={selectedDuration.toString()} onValueChange={(value) => setSelectedDuration(parseInt(value))}>
                    <div className="grid gap-3">
                      {pricingOptions.map((option) => (
                        <div key={option.duration} className="relative">
                          <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedDuration === option.duration 
                              ? 'border-teal-500 bg-teal-50' 
                              : 'border-gray-200 hover:border-teal-300'
                          }`}>
                            <RadioGroupItem value={option.duration.toString()} id={`duration-${option.duration}`} />
                            <Label htmlFor={`duration-${option.duration}`} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-teal-900">{option.label}</div>
                                  <div className="text-sm text-teal-600">{option.description}</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-xl font-bold text-teal-900">₹{option.price}</div>
                                </div>
                              </div>
                            </Label>
                          </div>
                          {option.popular && (
                            <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                              Most Popular
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Mode Selection */}
                <div>
                  <h3 className="font-medium text-teal-800 mb-4">Consultation Mode:</h3>
                  <RadioGroup value={selectedMode} onValueChange={(value: 'video' | 'audio') => setSelectedMode(value)}>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedMode === 'video' 
                          ? 'border-teal-500 bg-teal-50' 
                          : 'border-gray-200 hover:border-teal-300'
                      }`}>
                        <RadioGroupItem value="video" id="mode-video" />
                        <Label htmlFor="mode-video" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <Video className="w-5 h-5 text-teal-600" />
                            <div>
                              <div className="font-medium text-teal-900">Video Call</div>
                              <div className="text-sm text-teal-600">Face-to-face consultation</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      
                      <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedMode === 'audio' 
                          ? 'border-teal-500 bg-teal-50' 
                          : 'border-gray-200 hover:border-teal-300'
                      }`}>
                        <RadioGroupItem value="audio" id="mode-audio" />
                        <Label htmlFor="mode-audio" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-teal-600" />
                            <div>
                              <div className="font-medium text-teal-900">Audio Call</div>
                              <div className="text-sm text-teal-600">Voice-only consultation</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Date Selection */}
                <div>
                  <h3 className="font-medium text-teal-800 mb-4">Select Date:</h3>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-teal-200 rounded-md focus:border-teal-400 focus:ring-2 focus:ring-teal-200"
                  />
                </div>

                {/* Time Slot Selection */}
                <div>
                  <h3 className="font-medium text-teal-800 mb-4">Available Time Slots:</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => slot.available && setSelectedTimeSlot(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          selectedTimeSlot === slot.time
                            ? 'border-teal-500 bg-teal-50 text-teal-700'
                            : slot.available
                              ? 'border-gray-200 hover:border-teal-300 text-teal-700'
                              : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{slot.time}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-gradient-to-r from-teal-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="font-medium text-teal-800 mb-4">Booking Summary:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-teal-700">Duration:</span>
                      <span className="font-medium text-teal-900">{selectedDuration} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-700">Mode:</span>
                      <span className="font-medium text-teal-900 capitalize">{selectedMode}</span>
                    </div>
                    {selectedDate && (
                      <div className="flex justify-between">
                        <span className="text-teal-700">Date:</span>
                        <span className="font-medium text-teal-900">{new Date(selectedDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    {selectedTimeSlot && (
                      <div className="flex justify-between">
                        <span className="text-teal-700">Time:</span>
                        <span className="font-medium text-teal-900">{selectedTimeSlot}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-teal-700 font-medium">Total:</span>
                      <span className="text-xl font-bold text-teal-900">₹{getSelectedPrice()}</span>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <Button
                  onClick={handleBooking}
                  disabled={!selectedTimeSlot || !selectedDate || isBooking}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isBooking ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Book Consultation - ₹{getSelectedPrice()}
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-teal-600">
                  Secure payment powered by Razorpay • Cancel up to 2 hours before
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}