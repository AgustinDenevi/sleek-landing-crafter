import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowLeft, Brush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';


const Payment = () => {
  const [plan, setPlan] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const navigate = useNavigate();
  const { toast } = useToast();

  const plans = {
    standard: {
      price: '4,995',
      description: 'One request at a time. Pause or cancel anytime.',
    },
    pro: {
      price: '7,995',
      description: 'Double the requests. Pause or cancel anytime.',
    },
    custom: {
      price: 'Precio a consultar',
      description: 'Plan personalizado según tus necesidades.',
    }
  };

  const currentPlan = plans[plan as keyof typeof plans];

  const handleMercadoPagoPayment = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Error",
          description: "Please sign in to continue",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch(
        'https://kaomksywzvzmeqxsamjt.functions.supabase.co/create-mp-preference',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ plan_type: plan }),
        }
      );

      const { initPoint } = await response.json();
      window.location.href = initPoint;
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === 'mercadopago') {
      await handleMercadoPagoPayment();
    } else {
      // Existing Stripe logic
      navigate('/payment/stripe');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-black/80"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
        >
          <h1 className="text-3xl font-bold mb-8">Complete your subscription</h1>
          
          <div className="mb-8">
            <Label>Select your plan</Label>
            <ToggleGroup 
              type="single" 
              value={plan}
              onValueChange={(value) => value && setPlan(value)}
              className="mt-2 justify-start bg-zinc-800/50 p-1 rounded-full"
            >
              <ToggleGroupItem 
                value="standard" 
                className="rounded-full px-6 data-[state=on]:bg-black data-[state=on]:text-blue-500"
              >
                Standard
              </ToggleGroupItem>
              
              <ToggleGroupItem 
                value="pro" 
                className="rounded-full px-6 data-[state=on]:bg-black data-[state=on]:text-blue-500 flex items-center gap-1"
              >
                Pro <Zap className="w-4 h-4 text-yellow-400" />
              </ToggleGroupItem>

              <ToggleGroupItem 
                value="custom" 
                className="rounded-full px-6 data-[state=on]:bg-black data-[state=on]:text-blue-500 flex items-center justify-between  gap-1"
              >
                Custom
                <Brush className="w-4 h-4 text-cyan-400" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <Card className="bg-zinc-800/50 p-6 mb-8">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-bold text-white">${currentPlan.price}</span>
              <span className="text-zinc-400">/m</span>
            </div>
            <p className="text-zinc-400">{currentPlan.description}</p>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-6">
            {plan !== 'custom' && (
              <div className="space-y-4">
                <Label>Select payment method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 bg-zinc-800/50 p-4 rounded-lg cursor-pointer">
                    <RadioGroupItem value="stripe" id="stripe" className="text-yellow-500" />
                    <Label htmlFor="stripe" className="cursor-pointer">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-zinc-800/50 p-4 rounded-lg cursor-pointer">
                    <RadioGroupItem value="mercadopago" id="mercadopago" className="text-yellow-500" />
                    <Label htmlFor="mercadopago" className="cursor-pointer">MercadoPago</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {plan === 'custom' && (
              <div className="flex justify-center">
                <Button 
                  type="button"
                  className="w-full bg-white text-black hover:bg-zinc-200"
                  onClick={() => window.open('https://cal-web-wzho.onrender.com/frank/15min', '_blank')}
                >
                  Schedule an Appointment
                </Button>
              </div>
            )}

            {plan !== 'custom' && (
              <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200">
                Continue to payment
              </Button>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;