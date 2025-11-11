import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockDestinations, mockAttractions, mockAccommodations } from "@/data/mockData";
import { MapPin, Star, DollarSign, Calendar, Plus } from "lucide-react";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = mockDestinations.find((d) => d.id === id);
  const attractions = mockAttractions.filter((a) => a.destinationId === id);
  const accommodations = mockAccommodations.filter((a) => a.destinationId === id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold">Destination not found</h1>
          <Button asChild className="mt-4">
            <Link to="/destinations">Back to Destinations</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground">{destination.name}</h1>
                <p className="text-lg text-muted-foreground flex items-center gap-1 mt-2">
                  <MapPin className="h-5 w-5" />
                  {destination.country}
                </p>
              </div>
              <Button size="lg" className="gap-2">
                <Plus className="h-5 w-5" />
                Add to Itinerary
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium">{destination.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>Avg. ${destination.averageCost}/day</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{destination.bestTimeToVisit}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {destination.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-foreground">{destination.description}</p>
          </div>

          <Tabs defaultValue="attractions" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="attractions">Attractions</TabsTrigger>
              <TabsTrigger value="accommodations">Accommodations</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>

            <TabsContent value="attractions" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {attractions.map((attraction) => (
                  <Card key={attraction.id}>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={attraction.imageUrl}
                        alt={attraction.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle>{attraction.name}</CardTitle>
                          <CardDescription>{attraction.category}</CardDescription>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          {attraction.rating}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{attraction.duration}</span>
                        <span className="font-medium">
                          {attraction.cost === 0 ? "Free" : `$${attraction.cost}`}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {attractions.length === 0 && (
                <p className="text-center py-8 text-muted-foreground">
                  No attractions available yet.
                </p>
              )}
            </TabsContent>

            <TabsContent value="accommodations" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                {accommodations.map((accommodation) => (
                  <Card key={accommodation.id}>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={accommodation.imageUrl}
                        alt={accommodation.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                      <CardDescription>{accommodation.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">${accommodation.pricePerNight}/night</span>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          {accommodation.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {accommodations.length === 0 && (
                <p className="text-center py-8 text-muted-foreground">
                  No accommodations available yet.
                </p>
              )}
            </TabsContent>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>About {destination.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                    <p className="text-muted-foreground">{destination.bestTimeToVisit}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Average Daily Budget</h3>
                    <p className="text-muted-foreground">${destination.averageCost} per person</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Popular For</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {destination.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
