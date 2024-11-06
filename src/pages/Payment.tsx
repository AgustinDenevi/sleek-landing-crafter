import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [plan, setPlan] = useState('standard');
  const navigate = useNavigate();

  const plans = {
    standard: {
      price: '4,995',
      description: 'One request at a time. Pause or cancel anytime.',
    },
    pro: {
      price: '7,995',
      description: 'Double the requests. Pause or cancel anytime.',
    }
  };

  const currentPlan = plans[plan as keyof typeof plans];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
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
            </ToggleGroup>
          </div>

          <Card className="bg-zinc-800/50 p-6 mb-8">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-bold">${currentPlan.price}</span>
              <span className="text-zinc-400">/m</span>
            </div>
            <p className="text-zinc-400">{currentPlan.description}</p>
          </Card>

          <form className="space-y-6">
            <div>
              <Label htmlFor="card">Card number</Label>
              <Input 
                id="card"
                type="text" 
                placeholder="1234 1234 1234 1234"
                className="bg-zinc-800/50 border-zinc-700 text-white"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry date</Label>
                <Input 
                  id="expiry"
                  type="text" 
                  placeholder="MM/YY"
                  className="bg-zinc-800/50 border-zinc-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input 
                  id="cvc"
                  type="text" 
                  placeholder="123"
                  className="bg-zinc-800/50 border-zinc-700 text-white"
                />
              </div>
            </div>

            <Button className="w-full bg-white text-black hover:bg-zinc-200">
              Subscribe now
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;