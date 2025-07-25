import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Stethoscope, 
  Search, 
  Star, 
  Clock, 
  Video,
  Shield,
  Calendar,
  ArrowRight,
  CheckCircle,
  Heart,
  Brain,
  Utensils,
  Activity,
  Globe,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Healer {
  id: string;
  name: string;
  type: 'ayurveda' | 'nutritionist' | 'counselor' | 'yoga';
  specialties: string[];
  languages: string[];
  gender: 'male' | 'female';
  rating: number;
  reviews: number;
  experience: number;
  bio: string;
  qualifications: string[];
  avatar: string;
  availableNow: boolean;
  pricing: {
    min15: number;
    min30: number;
    min45: number;
  };
  verified: boolean;
}

const healers: Healer[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    type: 'ayurveda',
    specialties: ['Digestive Health', 'Women\'s Health', 'Stress Management'],
    languages: ['English', 'Hindi', 'Sanskrit'],
    gender: 'female',
    rating: 4.9,
    reviews: 247,
    experience: 12,
    bio: 'Specialized in traditional Ayurvedic healing with focus on digestive wellness and women\'s health. Combines ancient wisdom with modern understanding.',
    qualifications: ['BAMS', 'MD Ayurveda', 'Panchakarma Specialist'],
    avatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150',
    availableNow: true,
    pricing: { min15: 299, min30: 499, min45: 699 },
    verified: true
  },
  {
    id: '2',
    name: 'Nutritionist Kavya',
    type: 'nutritionist',
    specialties: ['Weight Management', 'PCOS', 'Gut Health'],
    languages: ['English', 'Hindi', 'Tamil'],
    gender: 'female',
    rating: 4.8,
    reviews: 189,
    experience: 8,
    bio: 'Clinical nutritionist specializing in Ayurvedic nutrition and therapeutic diet planning for hormonal balance.',
    qualifications: ['MSc Clinical Nutrition', 'Certified Ayurvedic Nutritionist'],
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    availableNow: false,
    pricing: { min15: 299, min30: 499, min45: 699 },
    verified: true
  },
  {
    id: '3',
    name: 'Dr. Rajesh Kumar',
    type: 'counselor',
    specialties: ['Anxiety', 'Depression', 'Stress Management', 'Sleep Disorders'],
    languages: ['English', 'Hindi'],
    gender: 'male',
    rating: 4.9,
    reviews: 156,
    experience: 10,
    bio: 'Clinical psychologist integrating mindfulness and Ayurvedic principles for mental wellness and emotional balance.',
    qualifications: ['PhD Psychology', 'Certified Mindfulness Instructor'],
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    availableNow: true,
    pricing: { min15: 299, min30: 499, min45: 699 },
    verified: true
  },
  {
    id: '4',
    name: 'Yoga Master Anita',
    type: 'yoga',
    specialties: ['Therapeutic Yoga', 'Pranayama', 'Meditation'],
    languages: ['English', 'Hindi', 'Sanskrit'],
    gender: 'female',
    rating: 4.7,
    reviews: 134,
    experience: 15,
    bio: 'Certified yoga therapist specializing in therapeutic yoga practices for healing and wellness.',
    qualifications: ['RYT 500', 'Yoga Therapy Certification'],
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    availableNow: true,
    pricing: { min15: 299, min30: 499, min45: 699 },
    verified: true
  }
];

export default function TalkToHealerPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All Specialties');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedGender] = useState<string>('all');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [userDosha, setUserDosha] = useState<any>(null);
  const [_, setHasCompletedPrakriti] = useState(false);

  useEffect(() => {
    // Check if user has completed Prakriti analysis
    try {
      const doshaData = localStorage.getItem('prakritiResults');
      if (doshaData) {
        setUserDosha(JSON.parse(doshaData));
        setHasCompletedPrakriti(true);
      }
    } catch (error) {
      console.error("Error retrieving dosha data:", error);
    }
    
    // Always show healers by default, even without Prakriti analysis
    setHasCompletedPrakriti(true);
  }, []);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedSpecialty('All Specialties');
    setSelectedLanguage('all');
    setShowAvailableOnly(false);
  };

  // Specialty options for filtering
  const specialtyOptions = [
    'All Specialties',
    'Gut Health',
    'Stress Management', 
    'Skin Conditions',
    'Menstrual Health',
    'Weight Management',
    'Sleep Disorders',
    'Anxiety & Depression',
    'Digestive Issues',
    'Hormonal Balance',
    'Chronic Pain',
    'Autoimmune Conditions',
    'Heart Health',
    'Diabetes Management',
    'Fertility Support'
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ayurveda':
        return <Stethoscope className="w-5 h-5" />;
      case 'nutritionist':
        return <Utensils className="w-5 h-5" />;
      case 'counselor':
        return <Brain className="w-5 h-5" />;
      case 'yoga':
        return <Activity className="w-5 h-5" />;
      default:
        return <Heart className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ayurveda':
        return 'from-teal-500 to-teal-600';
      case 'nutritionist':
        return 'from-orange-500 to-orange-600';
      case 'counselor':
        return 'from-blue-500 to-blue-600';
      case 'yoga':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const filteredHealers = healers.filter(healer => {
    const searchLower = searchQuery.toLowerCase();
    
    // Check if healer matches search query (name or specialties)
    const matchesSearch = searchQuery === '' || 
                         healer.name.toLowerCase().includes(searchLower) ||
                         healer.specialties.some(s => s.toLowerCase().includes(searchLower));
    
    // Check type filter
    const matchesType = selectedType === 'all' || healer.type === selectedType;
    
    // Check specialty filter
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
                            healer.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));
    
    // Check language filter
    const matchesLanguage = selectedLanguage === 'all' || 
                           healer.languages.includes(selectedLanguage);
    
    // Check gender filter (if needed)
    const matchesGender = selectedGender === 'all' || healer.gender === selectedGender;
    
    // Check availability filter
    const matchesAvailability = !showAvailableOnly || healer.availableNow;
  
    return matchesSearch && matchesType && matchesSpecialty && 
           matchesLanguage && matchesGender && matchesAvailability;
  });
  const handleBookConsultation = (healerId: string) => {
    // Check if user has dosha data when booking
    const doshaData = localStorage.getItem('prakritiResults');
    if (!doshaData) {
      navigate('/quiz');
      return;
    }
    navigate(`/talk-to-healer/book/${healerId}`);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-teal-900 mb-4">
            Talk to a Healer
          </h1>
          <p className="text-xl text-teal-700 leading-relaxed mb-6">
            1-on-1 sessions with Ayurveda Doctors, Nutritionists, Counselors & Yoga Experts
          </p>
          
          {/* Prakriti Analysis Recommendation */}
          {!userDosha && (
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="border-teal-200 bg-gradient-to-r from-teal-50 to-pink-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-teal-800 text-sm">Get Better Recommendations</h3>
                      <p className="text-teal-700 text-xs">Take our 5-minute Prakriti quiz for personalized healer matches</p>
                    </div>
                    <Link to="/quiz">
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white text-xs">
                        Take Quiz
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-teal-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-teal-700 max-w-3xl mx-auto leading-relaxed">
                Connect with experienced healers for personalized guidance and support.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Steps */}
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-2">Take Quiz</h3>
                    <p className="text-teal-700 leading-relaxed">
                      Complete our Prakrithi Analysis quiz to help us understand your unique constitution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-2">Choose Healer</h3>
                    <p className="text-teal-700 leading-relaxed">
                      Browse our directory of skilled healers and select the right one for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-2">Book Session</h3>
                    <p className="text-teal-700 leading-relaxed">
                      Schedule a convenient time for your consultation and get started on your healing journey.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-teal-100 shadow-lg">
                    <h4 className="font-semibold text-teal-800 mb-2 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600" />
                      Start with Prakrithi Analysis
                    </h4>
                    <p className="text-teal-700 text-sm">
                      Understanding your unique mind-body constitution helps our healers provide more personalized guidance during your consultation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Healer consultation session"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Video className="w-5 h-5 text-teal-600" />
                      <span className="text-sm font-medium text-teal-800">Video Consultation</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Verified Healers</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
     {/* Filters */}
<Card className="border-teal-200 shadow-lg bg-white/90 backdrop-blur-sm mb-8">
  <CardContent className="p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-medium text-teal-800">Filter Healers</h3>
      <Button 
        variant="ghost"
        onClick={clearFilters}
        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
      >
        Clear Filters
      </Button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-teal-500" />
        <Input
          placeholder="Search healers or specialties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 border-teal-200 focus:border-teal-400"
        />
      </div>
      
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="px-3 py-2 border border-teal-200 rounded-md focus:border-teal-400 focus:ring-2 focus:ring-teal-200"
      >
        <option value="all">All Types</option>
        <option value="ayurveda">Ayurveda Doctor</option>
        <option value="nutritionist">Nutritionist</option>
        <option value="counselor">Counselor</option>
        <option value="yoga">Yoga Expert</option>
      </select>
      
      <select
        value={selectedSpecialty}
        onChange={(e) => setSelectedSpecialty(e.target.value)}
        className="px-3 py-2 border border-teal-200 rounded-md focus:border-teal-400 focus:ring-2 focus:ring-teal-200"
      >
        {specialtyOptions.map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>            
      
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showAvailableOnly}
            onChange={(e) => setShowAvailableOnly(e.target.checked)}
            className="rounded border-teal-300 text-teal-600 focus:ring-teal-500"
          />
          <span className="text-sm text-teal-700">Available Now</span>
        </label>
      </div>
    </div>
  </CardContent>
</Card>

        {/* Healers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHealers.map((healer) => (
            <Card key={healer.id} className="border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={healer.avatar}
                        alt={healer.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-teal-200"
                      />
                      {healer.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-900">{healer.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${getTypeColor(healer.type)} flex items-center justify-center`}>
                          {getTypeIcon(healer.type)}
                        </div>
                        <span className="text-sm text-teal-600 capitalize">{healer.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{healer.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">{healer.reviews} reviews</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-teal-700 leading-relaxed">{healer.bio}</p>
                
                <div>
                  <h4 className="font-medium text-teal-800 text-sm mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {healer.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-teal-50 text-teal-700">
                        {specialty}
                      </Badge>
                    ))}
                    {healer.specialties.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                        +{healer.specialties.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-teal-500" />
                      <span className="text-teal-600">{healer.experience}+ years</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4 text-teal-500" />
                      <span className="text-teal-600">{healer.languages.length} languages</span>
                    </div>
                  </div>
                  
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    healer.availableNow 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {healer.availableNow ? 'Available Now' : 'Busy'}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-teal-700">Starting from</span>
                    <span className="text-lg font-bold text-teal-900">₹{healer.pricing.min15}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleBookConsultation(healer.id)}
                      className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-teal-200 text-teal-700 hover:bg-teal-50"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHealers.length === 0 && (
  <div className="text-center py-12">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Search className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {searchQuery || selectedType !== 'all' || selectedSpecialty !== 'All Specialties' || 
       selectedLanguage !== 'all' || showAvailableOnly
        ? "No healers match your filters"
        : "No healers available at this time"}
    </h3>
    <p className="text-gray-600 mb-4">
      {searchQuery || selectedType !== 'all' || selectedSpecialty !== 'All Specialties' || 
       selectedLanguage !== 'all' || showAvailableOnly
        ? "Try adjusting your search criteria or filters"
        : "Please check back later"}
    </p>
    {(searchQuery || selectedType !== 'all' || selectedSpecialty !== 'All Specialties' || 
      selectedLanguage !== 'all' || showAvailableOnly) && (
      <Button 
        onClick={clearFilters}
        variant="outline"
        className="border-teal-200 text-teal-600 hover:bg-teal-50"
      >
        Clear All Filters
      </Button>
    )}
  </div>
)}
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-teal-200 shadow-xl bg-gradient-to-r from-teal-50 to-pink-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-teal-900 mb-4">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-teal-700 mb-6 leading-relaxed">
                Book a consultation with our expert healers and take the first step toward personalized wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/programs">
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-3 rounded-full">
                    Explore Programs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}