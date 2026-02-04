import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="mb-4 text-gray-500 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
                        <p>Welcome to Ahmd Luthu (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">2. Data We Collect</h2>
                        <p>We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">4. Cookies</h2>
                        <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@ahmdluthu.com" className="text-primary font-bold hover:underline">hello@ahmdluthu.com</a></p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
