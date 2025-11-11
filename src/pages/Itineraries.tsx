import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar, MapPin } from "lucide-react";

export default function Itineraries() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">My Itineraries</h1>
              <p className="text-muted-foreground mt-2">Manage and create your travel plans</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-5 w-5" />
              New Itinerary
            </Button>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Tokyo Adventure</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      Tokyo, Japan
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Jun 15-22, 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  7-day trip exploring Tokyo's culture, food, and technology
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Create Your First Itinerary</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start planning your dream vacation with our smart itinerary builder
                </p>
                <Button>Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
