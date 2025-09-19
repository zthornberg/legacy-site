import React, { useState } from 'react';
import { Search, Download, FileText, Video, Image, File } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  category: string;
  type: 'pdf' | 'video' | 'template' | 'guide';
  size: string;
  lastUpdated: string;
  downloadUrl: string;
}

const DocumentLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const documents: Document[] = [
    {
      id: '1',
      title: 'Business Valuation Template',
      category: 'Templates',
      type: 'pdf',
      size: '2.4 MB',
      lastUpdated: '2025-01-10',
      downloadUrl: '#'
    },
    {
      id: '2',
      title: 'Negotiation Strategies Training',
      category: 'Training',
      type: 'video',
      size: '156 MB',
      lastUpdated: '2025-01-08',
      downloadUrl: '#'
    },
    {
      id: '3',
      title: 'Purchase Agreement Template',
      category: 'Legal',
      type: 'template',
      size: '1.2 MB',
      lastUpdated: '2025-01-05',
      downloadUrl: '#'
    },
    {
      id: '4',
      title: 'Market Analysis Guide',
      category: 'Guides',
      type: 'guide',
      size: '5.1 MB',
      lastUpdated: '2025-01-03',
      downloadUrl: '#'
    }
  ];

  const categories = ['All', 'Training', 'Templates', 'Legal', 'Guides', 'Marketing'];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-6 w-6 text-red-500" />;
      case 'pdf':
        return <FileText className="h-6 w-6 text-red-600" />;
      case 'template':
        return <File className="h-6 w-6 text-blue-600" />;
      default:
        return <FileText className="h-6 w-6 text-gray-600" />;
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Document Library
          </h1>
          <p className="text-gray-600">
            Access training materials, templates, legal documents, and marketing resources
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((document) => (
            <div key={document.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {getFileIcon(document.type)}
                  <span className="ml-3 font-medium text-gray-900">{document.title}</span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div>Category: {document.category}</div>
                <div>Size: {document.size}</div>
                <div>Updated: {new Date(document.lastUpdated).toLocaleDateString()}</div>
              </div>

              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentLibrary;