"use client";


import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Banknote, Building2, Wallet, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import ProgressTracker from '@/components/checkout/ProgressTracker';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const paymentMethods = [
    { id: 'card', title: 'Credit/Debit Card', icon: CreditCard, subtitle: 'Visa, Mastercard, Rupay' },
    { id: 'upi', title: 'UPI', icon: Smartphone, subtitle: 'Pay using any UPI app' },
    { id: 'cod', title: 'Cash on Delivery', icon: Banknote, subtitle: 'Pay when you receive' },
    { id: 'netbanking', title: 'Net Banking', icon: Building2, subtitle: 'All major banks' },
    { id: 'wallet', title: 'Wallets', icon: Wallet, subtitle: 'Paytm, PhonePe, GPay' }
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push('/checkout/confirmation');
  };

  const total = 5597;

  return (
    <div className="min-h-screen bg-cream pt-0">
      <ProgressTracker currentStep={3} />
      
      <div className="container mx-auto px-4 py-8 pb-32 md:pb-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push('/checkout/review')}
            className="text-charcoal hover:bg-[var(--charcoal)]/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-serif text-charcoal">Make Payment</h1>
            <p className="text-truffle">Choose your preferred payment method</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Methods */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-lg font-medium text-charcoal mb-4">Payment Methods</h2>
                
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                          selectedPayment === method.id ? 'border-gold bg-gold/5' : 'border-gray-200 hover:border-gold/50'
                        }`}
                        onClick={() => setSelectedPayment(method.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedPayment === method.id ? 'bg-gold border-gold' : 'border-gray-300'
                          }`} />
                          <IconComponent className="h-5 w-5 text-truffle" />
                          <div>
                            <div className="font-medium text-charcoal">{method.title}</div>
                            <div className="text-sm text-truffle">{method.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Payment Details */}
            {selectedPayment === 'card' && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-medium text-charcoal mb-4">Card Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="Name on card"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedPayment === 'upi' && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-medium text-charcoal mb-4">UPI Payment</h3>
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@paytm"
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedPayment === 'cod' && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-medium text-charcoal mb-4">Cash on Delivery</h3>
                  <div className="flex items-start gap-2">
                    <Checkbox id="cod-confirm" />
                    <Label htmlFor="cod-confirm" className="text-sm leading-relaxed">
                      I confirm that I will pay ₹{total} in cash when the order is delivered to me.
                    </Label>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm sticky top-32">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-charcoal mb-4">Final Total</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-truffle">Items (3)</span>
                    <span className="text-charcoal">₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-truffle">Delivery</span>
                    <span className="text-charcoal">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-truffle">Taxes</span>
                    <span className="text-charcoal">Included</span>
                  </div>
                </div>

                <div className="border-t pt-3 mb-6">
                  <div className="flex justify-between font-medium text-xl">
                    <span className="text-charcoal">Total</span>
                    <span className="text-charcoal">₹{total}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-charcoal text-cream hover:bg-charcoal/90 h-12"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Pay Now'}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-truffle">
                  <Lock className="h-3 w-3" />
                  <span>Secure payment powered by SSL encryption</span>
                </div>

                <p className="text-xs text-truffle text-center mt-4">
                  You will receive an order confirmation by SMS & email.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <div className="text-sm text-truffle">Pay</div>
            <div className="font-semibold text-charcoal">₹{total}</div>
          </div>
          <Button 
            className="flex-1 bg-charcoal text-cream hover:bg-charcoal/90"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;