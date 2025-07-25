import { useEffect, useState } from 'react';
import { Button } from '@/components/website/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Download, Calendar, ArrowRight, Smartphone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function ThankYouPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [order, setOrder] = useState<any>(null);
  
  useEffect(() => {
    // Get the most recent order from localStorage
    try {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      if (orders.length > 0) {
        setOrder(orders[orders.length - 1]);
      } else {
        // If no orders found, redirect to programs page
        navigate('/programs');
      }
    } catch (error) {
      console.error("Error retrieving order data:", error);
      navigate('/programs');
    }
  }, [navigate]);

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-teal-700">Loading your order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="border-teal-200 shadow-xl bg-white/90 backdrop-blur-sm text-center">
          <CardContent className="p-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-teal-900 mb-4">
              Thank You for Joining ekaBrahmaa!
            </h2>
            
            <p className="text-xl text-teal-700 mb-8 leading-relaxed">
              Your healing journey with {order.program.title} begins now. We're excited to guide you toward balance and wellness.
            </p>
            
            <div className="bg-teal-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-teal-800 mb-4">Order Details:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-teal-700">Order ID:</span>
                  <span className="font-medium text-teal-900">{order.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-700">Program:</span>
                  <span className="font-medium text-teal-900">{order.program.title} - {order.program.subtitle}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-700">Duration:</span>
                  <span className="font-medium text-teal-900">{order.program.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-700">Amount Paid:</span>
                  <span className="font-medium text-teal-900">₹{order.program.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg">
                <Calendar className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <h4 className="font-semibold text-teal-800 text-sm mb-1">Next Steps</h4>
                <p className="text-teal-700 text-sm">Our team will contact you within 24 hours to schedule your initial consultation</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg">
                <Smartphone className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                <h4 className="font-semibold text-pink-800 text-sm mb-1">Download Our App</h4>
                <Link to="/dashboard" className="text-pink-600 hover:underline text-sm block text-center">
                  Go to Dashboard
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-3 rounded-full">
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-full">
                <Download className="w-5 h-5 mr-2" />
                Download Receipt
              </Button>
            </div>
            
            <p className="text-sm text-teal-600 mt-8">
              A confirmation email has been sent to {user?.email}. If you have any questions, please contact our support team.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
