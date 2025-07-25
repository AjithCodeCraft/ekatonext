import { LoginForm } from "./LoginForm"

export default function Login() {
  return (
    <div className="min-h-screen bg-teal-900 grid lg:grid-cols-2">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center p-6 md:p-10 lg:p-16">
        <div className="w-full max-w-md mx-auto">
          <LoginForm />
        </div>
      </div>
      
      {/* Right Side - Hero Image */}
      <div className="relative hidden lg:block bg-gradient-to-br from-teal-600 to-pink-500 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/AUTHBANNER.jpg"
            alt="Healing and wellness journey"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 via-teal-800/40 to-pink-900/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center h-full p-12 text-white">
          <div className="max-w-lg">
            <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">
              Welcome Back to Your Healing Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Continue your personalized wellness path with our team of expert healers guiding you every step of the way.
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Personalized healing programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">5-healer integrated approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">24/7 support and guidance</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/80">Lives Healed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm text-white/80">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-pink-300/20 rounded-full backdrop-blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-32 w-8 h-8 bg-teal-300/20 rounded-full backdrop-blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  )
}