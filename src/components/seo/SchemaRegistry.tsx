import Script from "next/script";

export default function SchemaRegistry() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ahmed Luthu",
        "url": "https://ahmdluthukannur.in",
        "jobTitle": "Freelance Digital Marketer",
        "image": "https://ahmdluthukannur.in/og-image.jpg",
        "sameAs": [
            "https://www.instagram.com/_.ahmd_luthu._?utm_source=qr",
            "https://x.com/ahmd_luthu",
            "https://www.facebook.com/share/1KCjN6BrGu/"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Ahmed Luthu Digital"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ahmed Luthu - Freelance Digital Marketer",
        "image": "https://ahmdluthukannur.in/og-image.jpg",
        "@id": "https://ahmdluthukannur.in",
        "url": "https://ahmdluthukannur.in",
        "telephone": "+918129650313",
        "email": "ahmdluthu987@gmail.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kannur",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 11.8745,
            "longitude": 75.3704
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.instagram.com/_.ahmd_luthu._?utm_source=qr",
            "https://x.com/ahmd_luthu",
            "https://www.facebook.com/share/1KCjN6BrGu/"
        ]
    };

    return (
        <>
            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    );
}
