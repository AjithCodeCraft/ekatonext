import { AnimatedTestimonials } from "@/components/website/sections/homesection/animated-testimonials";

 const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      program: 'ekaPavana',
      rating: 5,
      text: 'The 7-day cleanse was transformative. I feel lighter, more energetic, and deeply connected to my body again.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      beforeAfter: {
        before: 'Constant fatigue, digestive issues',
        after: 'Energetic, clear skin, better sleep'
      }
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      program: 'ekaSanskara',
      rating: 5,
      text: 'Two weeks of personalized healing changed my life. The healers understood my unique constitution perfectly.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      beforeAfter: {
        before: 'High stress, irregular eating',
        after: 'Balanced lifestyle, improved focus'
      }
    },
  ];


const AnimatedTestimonialsWrapper = () => {
  return (
    <div className="mt-0 lazy-content">
            <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default AnimatedTestimonialsWrapper