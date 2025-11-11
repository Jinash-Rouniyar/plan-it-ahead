import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Plane, Map, Calendar, Users, Sparkles, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Plan Your Perfect Trip with{" "}
              <span className="text-primary">AI-Powered</span> Recommendations
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover destinations, build custom itineraries, and connect with fellow travelers. Your dream vacation starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" asChild className="gap-2">
                <Link to="/destinations">
                  <Map className="h-5 w-5" />
                  Explore Destinations
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <Link to="/itineraries">
                  <Calendar className="h-5 w-5" />
                  Create Itinerary
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Plan</h2>
            <p className="text-muted-foreground">
              Powerful features to make trip planning effortless and enjoyable
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>AI-Powered Recommendations</CardTitle>
                <CardDescription>
                  Get personalized destination and activity suggestions based on your preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Smart Itinerary Builder</CardTitle>
                <CardDescription>
                  Create and optimize day-by-day plans with budget tracking and time management
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Map className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Destination Explorer</CardTitle>
                <CardDescription>
                  Browse thousands of destinations with detailed information and user reviews
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-success mb-2" />
                <CardTitle>Travel Companion Matching</CardTitle>
                <CardDescription>
                  Find like-minded travelers to share experiences and adventures
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Budget Optimization</CardTitle>
                <CardDescription>
                  Track expenses and get suggestions to make the most of your budget
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Plane className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Flight & Hotel Search</CardTitle>
                <CardDescription>
                  Compare and book flights and accommodations all in one place
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of travelers who plan their perfect trips with PlanItAhead
            </p>
            <Button size="lg" asChild>
              <Link to="/auth">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
