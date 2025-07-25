import { Star, Play, Quote } from 'lucide-react';

export interface VideoTestimonial {
  id: string;
  name: string;
  location: string;
  title: string;
  description: string;
  image: string;
  videoThumbnail: string;
  productName?: string;
  productImage?: string;
  price?: number;
  originalPrice?: number;
  days?: number;
  rating: number;
}

export interface SuccessStory {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  testimonial: string;
  condition: string;
  program: string;
  rating: number;
  beforeAfter: {
    before: string;
    after: string;
  };
  results: string[];
  videoThumbnail?: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    title: 'Metabolically Lean | Weight Management',
    description: 'Lost 15kg in just 90 days with our holistic approach',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    productName: 'Metabolically Lean',
    productImage: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 1199,
    originalPrice: 1499,
    rating: 5
  },
  {
    id: '2',
    name: 'Rahul Singh',
    location: 'Delhi',
    title: 'Metabolically Lean | Weight Management',
    description: 'Transformed in just 90 days with our program',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    productName: 'Metabolically Lean',
    productImage: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 1199,
    originalPrice: 1499,
    rating: 5
  },
  {
    id: '3',
    name: 'Meera Patel',
    location: 'Ahmedabad',
    title: 'Gut Cleanse | 14 Probiotic Sachets',
    description: 'Healed my digestive issues completely',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
    productName: 'Gut Cleanse',
    productImage: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 749,
    originalPrice: 999,
    rating: 5
  },
  {
    id: '4',
    name: 'Ashok Verma',
    location: 'Bangalore',
    title: 'Gut Cleanse | 14 Probiotic Sachets',
    description: 'Feeling young and energetic again',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    productName: 'Gut Cleanse',
    productImage: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 749,
    originalPrice: 999,
    rating: 5
  },
  {
    id: '5',
    name: 'Kiran Joshi',
    location: 'Pune',
    title: 'Throat Soother | Herbal Lozenges',
    description: 'Instant relief for my sore throat',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800',
    productName: 'Throat Soother',
    productImage: 'https://images.pexels.com/photos/5938242/pexels-photo-5938242.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 549,
    originalPrice: 699,
    rating: 5
  },
  {
    id: '6',
    name: 'Anant Agarwal',
    location: 'Hyderabad',
    title: 'Metabolically Lean | Weight Management',
    description: 'Founder in Hyderabad shares his journey',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
    productName: 'Metabolically Lean',
    productImage: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 1199,
    originalPrice: 1499,
    rating: 5
  },
  {
    id: '7',
    name: 'Sandeep Tyagi',
    location: 'Chennai',
    title: 'Metabolically Lean | Weight Management',
    description: 'The right way to get healthy',
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
    videoThumbnail: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800',
    productName: 'Metabolically Lean',
    productImage: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=150',
    price: 1199,
    originalPrice: 1499,
    rating: 5
  }
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 32,
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    testimonial: "I've struggled with PCOS for years, trying countless treatments with little success. ekaBrahmaa's holistic approach was different - they addressed the root causes through personalized nutrition, specific yoga practices, and herbal supplements. Within 3 months, my cycles became regular, I lost 12kg, and my energy levels soared. The five-healer approach made all the difference.",
    condition: 'PCOS & Weight Management',
    program: 'ekaSanskara - 14 Days',
    rating: 5,
    beforeAfter: {
      before: 'Irregular periods, 15kg overweight, constant fatigue',
      after: 'Regular cycles, 12kg weight loss, energy restored'
    },
    results: [
      'Hormonal balance restored naturally',
      'Sustainable weight loss without extreme dieting',
      'Improved sleep quality and energy levels',
      'Reduced inflammation markers',
      'Better emotional wellbeing'
    ],
    videoThumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    age: 45,
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    testimonial: "As a busy executive with Type 2 diabetes and hypertension, I was constantly tired and reliant on multiple medications. ekaBrahmaa's team created a comprehensive plan that fit my hectic schedule. Their approach to stress management, nutrition, and movement transformed my health. My HbA1c dropped from 9.2% to 6.8%, and I've reduced my medications by half. Most importantly, I have the energy to fully engage with my work and family again.",
    condition: 'Type 2 Diabetes & Hypertension',
    program: 'ekaUdaya - 28 Days',
    rating: 5,
    beforeAfter: {
      before: 'HbA1c: 9.2%, BP: 160/100, on multiple medications',
      after: 'HbA1c: 6.8%, BP: 130/85, reduced medication by 50%'
    },
    results: [
      'Significant improvement in blood sugar control',
      'Blood pressure normalized',
      '18kg weight loss over 6 months',
      'Reduced medication dependency',
      'Improved work-life balance'
    ],
    videoThumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Anita Patel',
    age: 28,
    location: 'Bangalore',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
    testimonial: "My anxiety had become so severe that I couldn't leave my house, and digestive issues made everything worse. Traditional therapy and medications weren't helping. ekaBrahmaa's integrated approach was a revelation. The Ayurveda doctor explained how my Vata imbalance was causing both issues. The yoga therapist taught me breathing techniques that stopped panic attacks instantly. The nutritionist healed my gut, which dramatically improved my mental state. I got my life back.",
    condition: 'Anxiety & Digestive Issues',
    program: 'ekaSamanvaya - 21 Days',
    rating: 5,
    beforeAfter: {
      before: 'Daily panic attacks, chronic bloating, unable to work',
      after: 'Anxiety-free, perfect digestion, returned to full-time work'
    },
    results: [
      'Eliminated panic attacks without medication',
      'Resolved chronic digestive issues',
      'Returned to full-time work',
      'Improved social relationships',
      'Developed sustainable self-care practices'
    ],
    videoThumbnail: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Vikram Singh',
    age: 35,
    location: 'Jaipur',
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
    testimonial: "After a sports injury left me with chronic back pain, I tried everything from physiotherapy to painkillers without lasting relief. ekaBrahmaa's approach was different - they didn't just treat the pain, but the whole person. The functional trainer designed movements that strengthened my core without aggravating the injury, while the Ayurvedic doctor provided herbal formulations that reduced inflammation naturally. Within weeks, I was pain-free for the first time in years and back to playing the sports I love.",
    condition: 'Chronic Back Pain',
    program: 'ekaPavana - 7 Days',
    rating: 5,
    beforeAfter: {
      before: 'Constant pain, limited mobility, dependent on painkillers',
      after: 'Pain-free, full mobility restored, medication-free'
    },
    results: [
      'Eliminated chronic pain naturally',
      'Restored full range of motion',
      'Strengthened core and supporting muscles',
      'Returned to sports and active lifestyle',
      'Improved sleep quality'
    ],
    videoThumbnail: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    name: 'Meera Reddy',
    age: 42,
    location: 'Chennai',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300',
    testimonial: "Perimenopause hit me hard with hot flashes, mood swings, and insomnia that were disrupting my life. I was hesitant to try hormone replacement therapy and wanted a natural approach. ekaBrahmaa's team created a protocol specifically for hormonal transitions. The combination of specific cooling herbs, targeted yoga sequences, and nutritional adjustments made a dramatic difference. My symptoms reduced by 80% within a month, and I'm sleeping through the night again.",
    condition: 'Perimenopause Symptoms',
    program: 'ekaSanskara - 14 Days',
    rating: 5,
    beforeAfter: {
      before: 'Severe hot flashes, insomnia, mood instability',
      after: '80% reduction in symptoms, restored sleep, emotional balance'
    },
    results: [
      'Significant reduction in hot flashes',
      'Restored sleep patterns',
      'Improved mood stability',
      'Natural hormone balancing',
      'Better energy throughout the day'
    ],
    videoThumbnail: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    name: 'Arjun Mehta',
    age: 38,
    location: 'Pune',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    testimonial: "I came to ekaBrahmaa with severe IBS that was affecting my work and social life. Their approach was comprehensive - they didn't just give me a diet to follow but helped me understand how my stress, sleep, and eating patterns were all connected to my digestive health. The personalized protocol addressed all these factors simultaneously. Within 3 weeks, my symptoms had improved dramatically, and after 2 months, I was able to enjoy foods I hadn't been able to tolerate for years.",
    condition: 'Irritable Bowel Syndrome (IBS)',
    program: 'ekaSamanvaya - 21 Days',
    rating: 5,
    beforeAfter: {
      before: 'Daily digestive pain, food restrictions, social anxiety',
      after: 'Normal digestion, expanded diet, confidence restored'
    },
    results: [
      'Eliminated digestive pain and discomfort',
      'Expanded food tolerance',
      'Reduced stress-related flare-ups',
      'Improved gut microbiome diversity',
      'Developed sustainable dietary habits'
    ],
    videoThumbnail: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const categories = [
  'All Stories',
  'Weight Management',
  'Digestive Health',
  'Hormonal Balance',
  'Mental Wellness',
  'Pain Management',
  'Skin Conditions'
];

export const renderStars = (rating: number) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export const renderPlayButton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 hover:bg-white/30 transition-all cursor-pointer">
        <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
      </div>
    </div>
  );
};

export const renderQuoteIcon = () => {
  return (
    <div className="absolute top-4 left-4 w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
      <Quote className="w-4 h-4 text-teal-600" />
    </div>
  );
};