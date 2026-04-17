import { Head } from '@inertiajs/react';
import ContactForm from '@/components/website/contact/contact-form';
import DepartmentContact from '@/components/website/contact/department-contacts';
import GetInTouch from '@/components/website/contact/get-in-touch';
import HeroSection from '@/components/website/contact/hero';

export default function ContactUs() {
    return (
        <>
            <Head title="Contact Us" />

            <div className="scroll-smooth">
                {/** Hero Section */}
                <HeroSection />

                {/** Contact Information */}
                <GetInTouch />

                {/** Contact Form */}
                <ContactForm />

                {/** Departments */}
                <DepartmentContact />
            </div>
        </>
    );
}
