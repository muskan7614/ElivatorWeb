import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-gray-300" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-2xl mb-12">
            <p className="text-gray-700 leading-relaxed">
              <strong>Last Updated:</strong> January 1, 2024
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              This Privacy Policy describes how Liftas Components ("we," "our," or "us") collects, 
              uses, and protects your personal information when you visit our website or use our services.
            </p>
          </div>

          <div className="space-y-12">
            {/* Information We Collect */}
            <div>
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We may collect the following personal information when you interact with our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company or organization details</li>
                    <li>Project requirements and specifications</li>
                    <li>Communication preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We automatically collect certain technical information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website or source</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Delivery</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Provide elevator installation and maintenance services</li>
                    <li>• Process service requests and quotes</li>
                    <li>• Schedule appointments and site visits</li>
                    <li>• Communicate project updates</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Business Operations</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Process payments and billing</li>
                    <li>• Maintain customer records</li>
                    <li>• Improve our services and website</li>
                    <li>• Comply with legal requirements</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Communication</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Respond to inquiries and support requests</li>
                    <li>• Send service notifications and updates</li>
                    <li>• Provide technical support</li>
                    <li>• Share relevant industry information</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Marketing</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Send promotional materials (with consent)</li>
                    <li>• Analyze website usage and preferences</li>
                    <li>• Personalize user experience</li>
                    <li>• Conduct market research</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Protection */}
            <div>
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How We Protect Your Information</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Encryption</h4>
                  <p className="text-gray-600">
                    All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Access Controls</h4>
                  <p className="text-gray-600">
                    Access to personal information is restricted to authorized personnel who need it for legitimate business purposes.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Regular Security Audits</h4>
                  <p className="text-gray-600">
                    We conduct regular security assessments and updates to ensure our systems remain secure.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Retention</h4>
                  <p className="text-gray-600">
                    We retain personal information only as long as necessary for the purposes outlined in this policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                You have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Access and Correction</h4>
                    <p className="text-gray-600 text-sm">
                      Request access to your personal information and correct any inaccuracies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Portability</h4>
                    <p className="text-gray-600 text-sm">
                      Request a copy of your personal information in a structured format.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deletion</h4>
                    <p className="text-gray-600 text-sm">
                      Request deletion of your personal information, subject to legal requirements.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Opt-out</h4>
                    <p className="text-gray-600 text-sm">
                      Unsubscribe from marketing communications at any time.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Restriction</h4>
                    <p className="text-gray-600 text-sm">
                      Request restriction of processing in certain circumstances.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Objection</h4>
                    <p className="text-gray-600 text-sm">
                      Object to processing of your personal information for specific purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@liftaselevators.com</p>
                <p><strong>Phone:</strong>9818190974</p>
                <p><strong>Address:</strong> Address: Rajendra Park Rd, Jay Vihar, 
Sector 110, Gurugram, Pawala 
Khasrupur, Haryana 122001
Dedicated Seat 07, Situated at B 38, Block 
M, Old DLF Colony, Sector 14, Gurugram, 
Haryana 122006</p>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website and updating the 
                "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we 
                protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};