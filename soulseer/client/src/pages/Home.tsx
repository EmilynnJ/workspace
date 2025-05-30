import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SparkleIcon, StarIcon } from "@/components/icons";
import { ArrowRight, Users, BookOpen, Radio } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-alexBrush text-5xl text-primary animate-glow">Welcome to SoulSeer</h1>
        <p className="mt-2 text-xl text-muted-foreground">Your gateway to spiritual enlightenment</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Our Readers
            </CardTitle>
            <CardDescription>Connect with verified psychic professionals</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="mb-4">Discover our carefully selected readers, each bringing unique gifts and specialties to help guide your journey.</p>
            <Link to="/client/readers">
              <Button variant="outline" className="w-full">
                Meet Our Readers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="glass overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Radio className="mr-2 h-5 w-5 text-primary" />
              Live Readings
            </CardTitle>
            <CardDescription>Join interactive livestreams</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="mb-4">Experience the energy of live readings with our talented psychics, connect with others, and receive guidance in real-time.</p>
            <Link to="/client/livestreams">
              <Button variant="outline" className="w-full">
                Explore Livestreams
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="glass overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-primary" />
              Community
            </CardTitle>
            <CardDescription>Join our spiritual community</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="mb-4">Share experiences, ask questions, and connect with fellow seekers in our supportive community forums.</p>
            <Link to="/community">
              <Button variant="outline" className="w-full">
                Visit Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://source.unsplash.com/random/1200x400/?cosmos,spiritual" 
          alt="Featured background" 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
          <h2 className="font-alexBrush text-3xl text-primary animate-glow mb-2">Begin Your Spiritual Journey</h2>
          <p className="text-white max-w-2xl mb-4">Discover insights about your past, present, and future through our range of spiritual services.</p>
          <div className="flex gap-4">
            <Link to="/register">
              <Button>
                Sign Up Now
                <StarIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-center font-alexBrush">Tarot Readings</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <SparkleIcon className="mx-auto h-12 w-12 text-primary mb-4" />
            <p>Uncover the hidden patterns and potential futures that await you through the ancient wisdom of tarot.</p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-center font-alexBrush">Astrological Insights</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <StarIcon className="mx-auto h-12 w-12 text-secondary mb-4" />
            <p>Learn how the planets and stars influence your life path with personalized astrological consultations.</p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-center font-alexBrush">Spiritual Guidance</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mx-auto h-12 w-12 text-primary mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <p>Connect with your higher self and receive guidance on your spiritual journey from experienced mentors.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-center">What Our Clients Say</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                quote: "My reading with Mystic Reader was transformative. The insights provided helped me make a difficult decision with confidence.",
                date: "3 weeks ago"
              },
              {
                name: "James L.",
                quote: "I was skeptical at first, but Luna's accuracy was uncanny. She revealed things about my past that no one could have known.",
                date: "1 month ago"
              },
              {
                name: "Elena T.",
                quote: "The community here is so supportive. I've learned so much from both the readers and fellow seekers on this platform.",
                date: "2 months ago"
              }
            ].map((testimonial, i) => (
              <div key={i} className="rounded-lg border border-border p-4">
                <p className="italic mb-2">"{testimonial.quote}"</p>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{testimonial.name}</span>
                  <span className="text-muted-foreground">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}