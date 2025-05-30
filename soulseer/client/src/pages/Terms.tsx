import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="font-alexBrush text-4xl text-primary animate-glow">Terms of Service</h1>
        <p className="mt-2 text-muted-foreground">Last updated: January 1, 2023</p>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Welcome to SoulSeer. These Terms of Service ("Terms") govern your use of the SoulSeer website, mobile
            applications, and services (collectively, the "Services"). By accessing or using our Services, you agree
            to be bound by these Terms.
          </p>
          <p>
            Please read these Terms carefully. If you do not agree with these Terms, you should not use our Services.
            Your continued use of the Services constitutes your acceptance of these Terms.
          </p>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Definitions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>"SoulSeer"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong> refers to SoulSeer, Inc., the company that owns and operates the Services.
            </li>
            <li>
              <strong>"User"</strong>, <strong>"you"</strong>, or <strong>"your"</strong> refers to any individual or entity that uses our Services.
            </li>
            <li>
              <strong>"Client"</strong> refers to a User who receives readings or other spiritual services through the Platform.
            </li>
            <li>
              <strong>"Reader"</strong> refers to a User who provides readings or other spiritual services through the Platform.
            </li>
            <li>
              <strong>"Platform"</strong> refers to the SoulSeer website, mobile applications, and related services.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Eligibility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To use our Services, you must be at least 18 years old and capable of forming a binding contract. By using our Services,
            you represent and warrant that you meet these requirements.
          </p>
          <p>
            If you are using the Services on behalf of a company or other legal entity, you represent and warrant that you have
            the authority to bind that entity to these Terms.
          </p>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Account Registration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To access certain features of our Services, you may need to create an account. When you create an account, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Be responsible for all activities that occur under your account</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your account if any information provided is inaccurate, misleading, or incomplete.
          </p>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>User Conduct</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using our Services, you agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others, including privacy and intellectual property rights</li>
            <li>Use the Services for any illegal or unauthorized purpose</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
            <li>Attempt to gain unauthorized access to the Services or related systems</li>
            <li>Collect or harvest any information from the Services without permission</li>
            <li>Post content that is unlawful, harassing, defamatory, abusive, threatening, harmful, obscene, or otherwise objectionable</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Reader Conduct</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            If you use our Services as a Reader, you additionally agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide readings and services to the best of your ability and with honesty and integrity</li>
            <li>Not make claims of predicting specific events with certainty or guarantee specific outcomes</li>
            <li>Not claim to cure physical or mental health conditions</li>
            <li>Not provide advice on legal, financial, medical, or mental health matters unless professionally qualified to do so</li>
            <li>Maintain client confidentiality and privacy</li>
            <li>Comply with all platform policies regarding scheduling, cancellations, and refunds</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Payment and Fees</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our payment terms are as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All payments are processed through our platform using our designated payment processors</li>
            <li>Clients pay for services in advance through our wallet system</li>
            <li>Readers receive payment for their services according to our Reader Agreement</li>
            <li>We retain a service fee for facilitating the connection between Clients and Readers</li>
            <li>All fees are non-refundable except as specifically provided in our Refund Policy</li>
            <li>All prices are displayed in the currency selected by the user and may be subject to applicable taxes</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Termination</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We reserve the right to suspend or terminate your access to our Services at any time, with or without cause, and with
            or without notice. Upon termination, your right to use the Services will immediately cease.
          </p>
          <p>
            You may terminate your account at any time by contacting us or using the account deletion feature if available.
          </p>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Disclaimers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not guarantee that the Services will be uninterrupted, secure, or error-free, or that defects will be corrected.
            We are not responsible for the accuracy, reliability, timeliness, or completeness of information provided through the Services.
          </p>
          <p>
            Readings and spiritual services provided through our platform are for entertainment and personal growth purposes only.
            They are not substitutes for professional advice in legal, financial, medical, psychological, or other matters requiring
            specialized expertise.
          </p>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="mt-2 not-italic">
            SoulSeer, Inc.<br />
            123 Mystic Avenue<br />
            Spiritual City, SC 12345<br />
            <a href="mailto:legal@soulseer.com" className="text-primary hover:underline">legal@soulseer.com</a>
          </address>
        </CardContent>
      </Card>
    </div>
  );
}