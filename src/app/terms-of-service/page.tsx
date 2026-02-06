import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Ahmed Luthu Kannur',
    description: 'Terms of Service for Ahmed Luthu Kannur - Digital Marketing Expert. Read our terms regarding website use and services.',
    openGraph: {
        title: 'Terms of Service | Ahmed Luthu Kannur',
        description: 'Terms of Service for Ahmed Luthu Kannur - Digital Marketing Expert. Read our terms regarding website use and services.',
    }
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            <Navbar />
            <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
                <p className="mb-4 text-gray-500 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold mb-3">1. Agreement to Terms</h2>
                        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Ahmd Luthu (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of our website and services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">2. Intellectual Property Rights</h2>
                        <p>Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">3. User Representations</h2>
                        <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">4. Limitation of Liability</h2>
                        <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">5. Contact Us</h2>
                        <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:ahmdluthu987@gmail.com" className="text-primary font-bold hover:underline">ahmdluthu987@gmail.com</a></p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
