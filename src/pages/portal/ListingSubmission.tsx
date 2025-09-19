import React, { useState } from 'react';
import { Upload, Building, DollarSign, FileText, CheckCircle } from 'lucide-react';

const ListingSubmission: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    location: '',
    revenue: '',
    ebitda: '',
    askingPrice: '',
    description: '',
    reasonForSelling: '',
    files: [] as File[]
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        files: Array.from(e.target.files || [])
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Listing submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl p-12 shadow-lg text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Listing Submitted Successfully
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for submitting your listing. Our team will review it within 24 hours 
              and contact you with next steps.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Submit Another Listing
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Submit New Listing
          </h1>
          <p className="text-gray-600">
            Submit a business listing for review and approval by the Legacy team
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Business Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Building className="h-5 w-5 mr-2 text-purple-600" />
                Business Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
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
            </section>

            {/* Financial Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                Financial Information
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Revenue *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="$1,200,000"
                    value={formData.revenue}
                    onChange={(e) => handleInputChange('revenue', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    EBITDA/SDE *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="$400,000"
                    value={formData.ebitda}
                    onChange={(e) => handleInputChange('ebitda', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asking Price
                  </label>
                  <input
                    type="text"
                    placeholder="$1,600,000"
                    value={formData.askingPrice}
                    onChange={(e) => handleInputChange('askingPrice', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>
            </section>

            {/* Business Description */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Business Details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe the business, its operations, competitive advantages, and key highlights..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Selling
                  </label>
                  <select
                    value={formData.reasonForSelling}
                    onChange={(e) => handleInputChange('reasonForSelling', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">Select reason</option>
                    <option value="retirement">Retirement</option>
                    <option value="health">Health reasons</option>
                    <option value="relocation">Relocation</option>
                    <option value="new-opportunity">New business opportunity</option>
                    <option value="partnership-dissolution">Partnership dissolution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </section>

            {/* File Upload */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Upload className="h-5 w-5 mr-2 text-orange-600" />
                Supporting Documents
              </h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-purple-600 hover:text-purple-700 font-medium">
                    Click to upload files
                  </span>
                  <span className="text-gray-600"> or drag and drop</span>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />
                </label>
                <p className="text-gray-500 text-sm mt-2">
                  Financial statements, offering memo, or other relevant documents
                </p>
              </div>

              {formData.files.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Selected Files:</h4>
                  <ul className="space-y-2">
                    {formData.files.map((file, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <FileText className="h-4 w-4 mr-2" />
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-accent text-white px-8 py-3 rounded-xl hover:bg-accentAlt motion-safe font-semibold"
              >
                Submit for Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListingSubmission;