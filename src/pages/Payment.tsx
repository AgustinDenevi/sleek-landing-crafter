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
    <div className="min-h-screen bg-[#0A0B0D] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6 text-white/80 hover:text-white"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Plan Details */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Subscribe to IsCoders</h1>
            
            <ToggleGroup 
              type="single" 
              value={plan}
              onValueChange={(value) => value && setPlan(value)}
              className="justify-start bg-white/5 p-1 rounded-full"
            >
              <ToggleGroupItem 
                value="standard" 
                className="rounded-full px-6 data-[state=on]:bg-white data-[state=on]:text-black"
              >
                Standard
              </ToggleGroupItem>
              
              <ToggleGroupItem 
                value="pro" 
                className="rounded-full px-6 data-[state=on]:bg-white data-[state=on]:text-black flex items-center gap-1"
              >
                Pro <Zap className="w-4 h-4 text-yellow-400" />
              </ToggleGroupItem>

              <ToggleGroupItem 
                value="custom" 
                className="rounded-full px-6 data-[state=on]:bg-white data-[state=on]:text-black flex items-center gap-1"
              >
                Custom <Brush className="w-4 h-4 text-cyan-400" />
              </ToggleGroupItem>
            </ToggleGroup>

            <Card className="bg-white/5 border-white/10 p-6">
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">USD ${currentPlan.price}</span>
                  <span className="text-white/60">/month</span>
                </div>
                <p className="text-white/60">{currentPlan.description}</p>
              </div>
            </Card>
          </div>

          {/* Right Column - Payment Form */}
          <div className="bg-white/5 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 bg-white/5 p-4 rounded-lg cursor-pointer border border-white/10">
                    <RadioGroupItem value="stripe" id="stripe" />
                    <Label htmlFor="stripe" className="cursor-pointer">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 p-4 rounded-lg cursor-pointer border border-white/10">
                    <RadioGroupItem value="mercadopago" id="mercadopago" />
                    <Label htmlFor="mercadopago" className="cursor-pointer">MercadoPago</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Billing Information</h2>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      placeholder="123 Main St"
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        placeholder="City"
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input 
                        id="zip" 
                        placeholder="12345"
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-white/90"
              >
                Subscribe Now
              </Button>

              <p className="text-sm text-white/60 text-center">
                By confirming your subscription, you allow IsCoders to charge your card for this payment and future payments in accordance with their terms.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;