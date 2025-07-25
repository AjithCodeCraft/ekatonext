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
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="/logoeka.png"
            alt="ekaBrahmaa Logo"
            className="max-h-14"
          />
          
        </div>
        <h2 className="text-2xl font-bold text-teal-900">Welcome</h2>
      
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-teal-800 font-medium">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-4 h-4" />
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 border-teal-200 focus:border-teal-400 focus:ring-teal-400"
              required 
            />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-teal-800 font-medium">Password</Label>
          
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-4 h-4" />
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 border-teal-200 focus:border-teal-400 focus:ring-teal-400"
              required 
              placeholder="Enter your password"
            />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-teal-700"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
            
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
              className="ml-auto text-sm text-teal-600 hover:text-teal-700 underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
        
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2 bg-white text-teal-600">
            Or continue with
          </span>
        </div>
        
        <Button 
          type="button"
          variant="outline" 
          className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 py-3 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </Button>
      </div>
      
      <div className="text-center text-sm">
        <span className="text-teal-700">Don&apos;t have an account? </span>
        <Link 
          to="/quiz" 
          className="text-teal-600 hover:text-teal-700 font-medium underline-offset-4 hover:underline"
        >
          Start your healing journey
        </Link>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 text-xs text-teal-600 mb-4">
          <div className="flex items-center space-x-1">
            <Sparkles className="w-3 h-3" />
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center space-x-1">
            <Leaf className="w-3 h-3" />
            <span>HIPAA Compliant</span>
          </div>
        </div>
        <p className="text-xs text-teal-600">
          By signing in, you agree to our{" "}
          <Link to="/terms" className="underline hover:text-teal-700">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline hover:text-teal-700">
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  )
}