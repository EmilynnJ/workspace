import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Search } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { getReaders } from "@/api/users";
import { useToast } from "@/hooks/useToast";
import { User } from "@/api/types";

export default function AdminReaders() {
  const [readers, setReaders] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useState(() => {
    const fetchReaders = async () => {
      try {
        setIsLoading(true);
        const response = await getReaders();
        if (response.success) {
          setReaders(response.data.readers);
        }
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to fetch readers",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchReaders();
  }, [toast]);
  
  const filteredReaders = readers.filter(reader => 
    reader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (reader.specialties && reader.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="font-alexBrush text-3xl text-primary animate-glow">Reader Management</h1>
          <p className="text-muted-foreground">Add, edit and manage platform readers</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Reader
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px] bg-background">
            <DialogHeader>
              <DialogTitle>Add New Reader</DialogTitle>
              <DialogDescription>
                Create a new reader profile for the platform
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Reader's full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="reader@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rate">Hourly Rate ($)</Label>
                <Input id="rate" type="number" min="0" placeholder="45" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="specialties">Specialties (comma separated)</Label>
                <Input id="specialties" placeholder="Tarot, Astrology, Mediumship" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Biography</Label>
                <Textarea id="bio" placeholder="Reader's background and experience..." />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="active" />
                <Label htmlFor="active">Active on platform</Label>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Reader</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card className="glass">
        <CardHeader>
          <CardTitle>Platform Readers</CardTitle>
          <CardDescription>Manage all active and inactive readers</CardDescription>
          
          <div className="relative mt-2">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or specialty..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Specialties</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">Loading readers...</TableCell>
                </TableRow>
              ) : filteredReaders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">No readers found</TableCell>
                </TableRow>
              ) : (
                filteredReaders.map((reader) => (
                  <TableRow key={reader._id}>
                    <TableCell className="font-medium">{reader.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {reader.specialties?.map((specialty, i) => (
                          <Badge key={i} variant="outline">{specialty}</Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>${reader.rate}/hr</TableCell>
                    <TableCell>
                      {reader.rating} ⭐ ({reader.reviewCount})
                    </TableCell>
                    <TableCell>
                      <Badge variant={reader.isActive ? "default" : "secondary"}>
                        {reader.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px] bg-background">
                          <DialogHeader>
                            <DialogTitle>Edit Reader</DialogTitle>
                            <DialogDescription>
                              Update reader profile information
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor={`edit-name-${reader._id}`}>Full Name</Label>
                              <Input id={`edit-name-${reader._id}`} defaultValue={reader.name} />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor={`edit-rate-${reader._id}`}>Hourly Rate ($)</Label>
                              <Input id={`edit-rate-${reader._id}`} type="number" defaultValue={reader.rate} />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor={`edit-specialties-${reader._id}`}>Specialties (comma separated)</Label>
                              <Input id={`edit-specialties-${reader._id}`} defaultValue={reader.specialties?.join(", ")} />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor={`edit-bio-${reader._id}`}>Biography</Label>
                              <Textarea id={`edit-bio-${reader._id}`} defaultValue={reader.bio} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id={`edit-active-${reader._id}`} defaultChecked={reader.isActive} />
                              <Label htmlFor={`edit-active-${reader._id}`}>Active on platform</Label>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save Changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}