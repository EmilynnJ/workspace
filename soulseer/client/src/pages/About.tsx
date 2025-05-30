import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SparkleIcon } from "@/components/icons";

export default function About() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-alexBrush text-4xl text-primary animate-glow">About SoulSeer</h1>
        <p className="mt-2 text-muted-foreground">Connecting souls across the mystical divide</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SparkleIcon className="mr-2 h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              SoulSeer was founded with a clear vision: to create a sacred space where seekers can connect with 
              authentic spiritual guides. We believe that everyone deserves access to genuine spiritual insight, 
              delivered with integrity and compassion.
            </p>
            <p className="mt-4">
              Our platform bridges the gap between the physical and metaphysical worlds, making spiritual guidance 
              accessible to all, regardless of location or experience level.
            </p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SparkleIcon className="mr-2 h-5 w-5 text-primary" />
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-primary">✧</span>
                <span><strong>Authenticity</strong> - We verify all readers to ensure genuine talent and intent</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">✧</span>
                <span><strong>Respect</strong> - We honor all spiritual paths and traditions</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">✧</span>
                <span><strong>Growth</strong> - We encourage personal and spiritual development</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">✧</span>
                <span><strong>Community</strong> - We foster connection and support among seekers</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            SoulSeer was born from the stars in 2020, when our founder, a lifelong spiritual seeker, 
            recognized the need for a platform that could connect authentic readers with those seeking guidance. 
            In a digital world filled with uncertainty, we sought to create a sanctuary of trust.
          </p>
          <p className="mt-4">
            Beginning with just five readers, our community has grown to include dozens of verified psychics, 
            mediums, astrologers, and spiritual guides. Each reader is carefully vetted not only for their abilities 
            but also for their commitment to ethical practice and genuine care for clients.
          </p>
          <p className="mt-4">
            Today, SoulSeer serves thousands of seekers worldwide, offering readings across multiple modalities 
            and continuing to expand our offerings while maintaining our commitment to authenticity and spiritual growth.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Our Readers</CardTitle>
            <CardDescription>Carefully selected for authenticity</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We have a rigorous vetting process for all readers who join our platform. Each must demonstrate 
              their abilities, ethical standards, and commitment to client care before being accepted.
            </p>
            <p className="mt-4">
              Our readers represent diverse spiritual traditions and practices, bringing a wealth of experience 
              and perspectives to our community.
            </p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Reading Modalities</CardTitle>
            <CardDescription>Multiple ways to connect</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We offer various ways to connect with our readers, including:
            </p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Live chat readings</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Video consultations</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Phone readings</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Public livestreams</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
            <CardDescription>To your spiritual journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              At SoulSeer, we're committed to:
            </p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Maintaining the highest ethical standards</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Protecting your privacy and confidentiality</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Providing a safe space for spiritual exploration</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                <span>Continuously improving our platform</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}