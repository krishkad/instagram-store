
import React from 'react';
import { Check } from 'lucide-react';

interface ProgressTrackerProps {
  currentStep: number;
}

const ProgressTracker = ({ currentStep }: ProgressTrackerProps) => {
  const steps = [
    { id: 1, title: 'Address', subtitle: 'Delivery Details' },
    { id: 2, title: 'Review', subtitle: 'Order Summary' },
    { id: 3, title: 'Payment', subtitle: 'Make Payment' },
    { id: 4, title: 'Done', subtitle: 'Order Placed' }
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-4 sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300
                  ${currentStep > step.id 
                    ? 'bg-gold border-gold text-white' 
                    : currentStep === step.id 
                    ? 'border-gold text-gold bg-gold/10' 
                    : 'border-gray-300 text-gray-400'
                  }
                `}>
                  {currentStep > step.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-xs font-medium ${
                    currentStep >= step.id ? 'text-charcoal' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-truffle hidden sm:block">
                    {step.subtitle}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 transition-all duration-300 ${
                  currentStep > step.id ? 'bg-gold' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;