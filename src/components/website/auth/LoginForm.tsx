import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return

    setIsLoading(true)
    setError('')

    try {
      await login(email)
      navigate('/dashboard')
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex items-center space-x-3">
          <img
            src="/logoeka.png"
            alt="ekaBrahmaa Logo"
            className="max-h-14"
          />
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-white font-medium">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-4 h-4" />
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-gray-200 border-teal-300 focus:border-teal-200 focus:ring-teal-200"
              required 
            />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-white font-medium">Password</Label>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-4 h-4" />
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 bg-gray-200 border-teal-300 focus:border-teal-200 focus:ring-teal-200"
              required 
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-200 hover:text-white"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white py-3 rounded-lg shadow hover:shadow-md transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Signing in...
            </div>
          ) : (
            <div className="flex items-center">
              Sign In
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          )}
        </Button>
        <Link
          to="/forgot-password"
          className="ml-auto text-sm text-teal-200 hover:text-white underline-offset-4 hover:underline"
        >
          Forgot your password?
        </Link>
        
        <div className="relative text-center text-sm">
          <span className="bg-teal-900 text-teal-200 relative z-10 px-2">
            Or continue with
          </span>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-teal-700 -z-0"></div>
        </div>
        
        <Button 
          type="button"
          variant="outline" 
          className="w-full border-teal-500 text-teal-500 hover:bg-white/10 py-3 rounded-lg bg-gray-200 "
        >
         <img src="google.svg" alt="google" className="w-6 h-6 mr-2"/>
          Continue with Google
        </Button>


        <Button 
          type="button"
          variant="outline" 
          className="w-full border-teal-500 text-teal-500 hover:bg-white/10 py-3 rounded-lg bg-gray-200 "
        >
         <img src="apple.svg" alt="apple" className="w-6 h-6 mr-2"/>
          Continue with Apple
        </Button>
      </div>
      
      <div className="text-center text-sm">
        <span className="text-teal-200">Don't have an account? </span>
        <Link 
          to="/quiz" 
          className="text-white hover:text-teal-200 font-medium underline-offset-4 hover:underline"
        >
          Start your healing journey
        </Link>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 text-xs text-teal-200 mb-4">
          <div className="flex items-center space-x-1">
            <Sparkles className="w-3 h-3" />
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center space-x-1">
            <Leaf className="w-3 h-3" />
            <span>HIPAA Compliant</span>
          </div>
        </div>
        <p className="text-xs text-teal-200">
          By signing in, you agree to our{" "}
          <Link to="/terms" className="underline hover:text-white">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  )
}

