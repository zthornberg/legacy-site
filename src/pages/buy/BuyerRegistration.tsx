import React, { useState } from 'react';
import { CheckCircle, User, DollarSign, Target, Shield } from 'lucide-react';

const BuyerRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    
    // Step 2: Investment Preferences
    investmentRange: '',
    preferredIndustries: [] as string[],
    preferredLocations: [] as string[],
    timeframe: '',
    
    // Step 3: Experience & Goals
    experience: '',
    financingNeeds: '',
    additionalNotes: ''
  });

  const steps = [
    { number: 1, title: 'Contact Information', icon: User },
    { number: 2, title: 'Investment Preferences', icon: Target },
    { number: 3, title: 'Experience & Goals', icon: DollarSign }
  ];

  const industries = [
    'Manufacturing & Distribution',
    'Technology',
    'Healthcare', 
    'Home Services',
    'Construction',
    'Retail & Consumer',
    'Business Services',
    'Energy & Sustainability',
    'Hospitality'
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleIndustryToggle = (industry: string) => {
    const current = formData.preferredIndustries;
    const updated = current.includes(industry)
      ? current.filter(i => i !== industry)
      : [...current, industry];
    handleInputChange('preferredIndustries', updated);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Show success message or redirect
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Buyer Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our buyer network to receive early access to new listings – including 
            confidential off-market opportunities. Tell us about your ideal acquisition 
            and we'll match you with the right deals.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                  currentStep >= step.number 
                    ? 'bg-purple-900 border-purple-900 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-purple-900' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </div>
                  <div className={`text-sm ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="City, State"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Investment Preferences */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Preferences</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Budget *
                  </label>
                  <select
                    required
                    value={formData.investmentRange}
                    onChange={(e) => handleInputChange('investmentRange', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Select investment range</option>
                    <option value="under-500k">Under $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="2m-5m">$2M - $5M</option>
                    <option value="5m-plus">$5M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Preferred Industries (select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {industries.map((industry) => (
                      <label key={industry} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.preferredIndustries.includes(industry)}
                          onChange={() => handleIndustryToggle(industry)}
                          className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                        />
                        <span className="ml-3 text-gray-700">{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline for Purchase
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => handleInputChange('timeframe', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Select timeframe</option>
                    <option value="immediate">Immediate (1-3 months)</option>
                    <option value="short-term">Short-term (3-6 months)</option>
                    <option value="medium-term">Medium-term (6-12 months)</option>
                    <option value="long-term">Long-term (12+ months)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Experience & Goals */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience & Goals</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Acquisition Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Select experience level</option>
                    <option value="first-time">First-time buyer</option>
                    <option value="some-experience">Some experience (1-2 acquisitions)</option>
                    <option value="experienced">Experienced (3+ acquisitions)</option>
                    <option value="serial-acquirer">Serial acquirer (5+ acquisitions)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Financing Needs
                  </label>
                  <select
                    value={formData.financingNeeds}
                    onChange={(e) => handleInputChange('financingNeeds', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Select financing needs</option>
                    <option value="cash">All cash purchase</option>
                    <option value="partial-financing">Need partial financing</option>
                    <option value="sba-loan">SBA loan assistance needed</option>
                    <option value="seller-financing">Interested in seller financing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    placeholder="Tell us more about your ideal acquisition, specific requirements, or any questions you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-accent mt-0.5 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-900 mb-1">
                        Confidentiality Agreement
                      </h4>
                      <p className="text-sm text-blue-700">
                        By submitting this form, you agree to maintain confidentiality 
                        regarding any business information shared with you by Legacy 
                        Business Brokers and its clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Previous
                </button>
              )}

              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-accent text-white rounded-xl hover:bg-accentAlt motion-safe font-medium"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-accent text-white rounded-xl hover:bg-accentAlt motion-safe font-medium"
                  >
                    Submit Registration
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Receive
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive Access</h4>
              <p className="text-gray-600 text-sm">
                Early access to new listings and confidential off-market opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-slate-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Guidance</h4>
              <p className="text-gray-600 text-sm">
                Personal guidance from experienced advisors throughout your acquisition
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Vetted Opportunities</h4>
              <p className="text-gray-600 text-sm">
                All businesses are pre-qualified and vetted for financial accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerRegistration;