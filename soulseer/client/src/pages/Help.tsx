import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, MessageCircle, Mail, Phone } from "lucide-react";

export default function Help() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-alexBrush text-4xl text-primary animate-glow">Help Center</h1>
        <p className="mt-2 text-muted-foreground">Find answers to your questions and get support</p>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>How can we help you?</CardTitle>
          <CardDescription>Search for answers or browse our help topics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Input placeholder="Search for help..." className="pl-10" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto flex-col py-4 space-y-2 hover:bg-muted/50">
              <BookOpen className="h-6 w-6" />
              <span>FAQs</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-4 space-y-2 hover:bg-muted/50">
              <MessageCircle className="h-6 w-6" />
              <span>Live Chat</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-4 space-y-2 hover:bg-muted/50">
              <Mail className="h-6 w-6" />
              <span>Email Support</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General Questions</TabsTrigger>
          <TabsTrigger value="sessions">Reading Sessions</TabsTrigger>
          <TabsTrigger value="payments">Payments & Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about SoulSeer</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is SoulSeer?</AccordionTrigger>
                  <AccordionContent>
                    SoulSeer is a mystical spiritual platform connecting Clients with verified Readers for psychic readings via chat, video, phone, and livestream. Our platform features three user roles (Admin, Reader, Client) with distinct dashboards and functionality.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    You can create a client account by clicking the "Register" button on the homepage. Fill out the required information and you'll be ready to explore the platform. If you're interested in becoming a Reader, please visit our "Apply to be a Reader" page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we take privacy very seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your consent. Please review our Privacy Policy for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How are Readers verified?</AccordionTrigger>
                  <AccordionContent>
                    All Readers go through a rigorous verification process that includes demonstrating their abilities, providing professional references, and completing a background check. We only accept Readers who meet our high standards for authenticity and professionalism.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="mt-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Reading Sessions</CardTitle>
              <CardDescription>Questions about booking and participating in readings</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I book a reading?</AccordionTrigger>
                  <AccordionContent>
                    To book a reading, navigate to the "Readers" page, select a Reader that interests you, and click "Book a Reading." You'll be able to choose your preferred type of reading (chat, video, or phone) and select an available time slot from the Reader's calendar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of readings are available?</AccordionTrigger>
                  <AccordionContent>
                    We offer several types of readings including chat sessions, video calls, phone consultations, and livestream events. Each Reader specializes in different modalities such as tarot, astrology, mediumship, clairvoyance, and more.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How long are reading sessions?</AccordionTrigger>
                  <AccordionContent>
                    Reading sessions vary in length depending on the package you select. We offer 15, 30, 45, and 60-minute sessions. The duration will be clearly displayed when you book the session.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What if I need to cancel or reschedule?</AccordionTrigger>
                  <AccordionContent>
                    You can cancel or reschedule a session up to 24 hours before the scheduled time without any penalty. For cancellations made less than 24 hours in advance, a 50% fee may apply. Please go to "My Sessions" in your dashboard to manage your bookings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="mt-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Payments & Billing</CardTitle>
              <CardDescription>Questions about payments, refunds, and your wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do payments work?</AccordionTrigger>
                  <AccordionContent>
                    SoulSeer uses a wallet system. You can add funds to your wallet using various payment methods including credit/debit cards and PayPal. When you book a session or make a purchase, the amount is deducted from your wallet balance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, and various digital wallets. All payments are processed securely through Stripe, our payment processor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                  <AccordionContent>
                    Yes, refunds are available in certain circumstances. If you're unsatisfied with a reading, you can request a refund within 24 hours. Physical products can be returned within 30 days if unused and in original packaging. Digital products are generally non-refundable once delivered.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I view my transaction history?</AccordionTrigger>
                  <AccordionContent>
                    You can view your complete transaction history by navigating to "Wallet" in your dashboard. This section displays all wallet deposits, reading payments, product purchases, and any refunds processed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Still Need Help?</CardTitle>
          <CardDescription>Contact our support team directly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>
              <a href="mailto:support@soulseer.com" className="text-primary hover:underline">
                support@soulseer.com
              </a>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              <a href="tel:+18005551234" className="text-primary hover:underline">
                +1 (800) 555-1234
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}