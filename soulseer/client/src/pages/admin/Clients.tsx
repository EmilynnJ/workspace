import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, User, AlertCircle, Unlock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/useToast";

export default function AdminClients() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  // Mock client data
  const clients = [
    {
      _id: "3",
      name: "Seeker Client",
      email: "client@soulseer.com",
      joined: "May 12, 2023",
      sessions: 5,
      wallet: { balance: 150.00, currency: "USD" },
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      _id: "7",
      name: "Lisa Johnson",
      email: "lisa@example.com",
      joined: "June 23, 2023",
      sessions: 8,
      wallet: { balance: 75.50, currency: "USD" },
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    {
      _id: "8",
      name: "Michael Smith",
      email: "michael@example.com",
      joined: "July 5, 2023",
      sessions: 3,
      wallet: { balance: 25.00, currency: "USD" },
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      _id: "9",
      name: "Emma Davis",
      email: "emma@example.com",
      joined: "August 18, 2023",
      sessions: 12,
      wallet: { balance: 210.75, currency: "USD" },
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      _id: "10",
      name: "David Wilson",
      email: "david@example.com",
      joined: "September 30, 2023",
      sessions: 2,
      wallet: { balance: 50.25, currency: "USD" },
      avatar: "https://i.pravatar.cc/150?img=10"
    }
  ];
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleResetPassword = (clientId: string, clientName: string) => {
    toast({
      title: "Password Reset Email Sent",
      description: `A password reset link has been sent to ${clientName}'s email.`,
    });
  };
  
  const handleSuspendUser = (clientId: string, clientName: string) => {
    toast({
      title: "User Suspended",
      description: `${clientName}'s account has been suspended.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-alexBrush text-3xl text-primary animate-glow">Client Management</h1>
        <p className="text-muted-foreground">View and manage platform clients</p>
      </div>
      
      <Card className="glass">
        <CardHeader>
          <CardTitle>Platform Clients</CardTitle>
          <CardDescription>View all registered clients</CardDescription>
          
          <div className="relative mt-2">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
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
                <TableHead>Client</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>Wallet Balance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">No clients found</TableCell>
                </TableRow>
              ) : (
                filteredClients.map((client) => (
                  <TableRow key={client._id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={client.avatar} alt={client.name} />
                          <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{client.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.joined}</TableCell>
                    <TableCell>{client.sessions}</TableCell>
                    <TableCell>${client.wallet.balance.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <User className="mr-2 h-4 w-4" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[525px] bg-background">
                            <DialogHeader>
                              <DialogTitle>Client Details</DialogTitle>
                              <DialogDescription>
                                Detailed information about {client.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="flex justify-center">
                                <Avatar className="h-24 w-24">
                                  <AvatarImage src={client.avatar} alt={client.name} />
                                  <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Name</Label>
                                  <p className="text-sm font-medium">{client.name}</p>
                                </div>
                                <div>
                                  <Label>Email</Label>
                                  <p className="text-sm font-medium">{client.email}</p>
                                </div>
                                <div>
                                  <Label>Joined</Label>
                                  <p className="text-sm font-medium">{client.joined}</p>
                                </div>
                                <div>
                                  <Label>Total Sessions</Label>
                                  <p className="text-sm font-medium">{client.sessions}</p>
                                </div>
                                <div>
                                  <Label>Wallet Balance</Label>
                                  <p className="text-sm font-medium">${client.wallet.balance.toFixed(2)}</p>
                                </div>
                              </div>
                            </div>
                            <DialogFooter className="flex gap-2">
                              <Button 
                                variant="outline" 
                                onClick={() => handleResetPassword(client._id, client.name)}
                              >
                                <Unlock className="mr-2 h-4 w-4" />
                                Reset Password
                              </Button>
                              <Button 
                                variant="destructive"
                                onClick={() => handleSuspendUser(client._id, client.name)}
                              >
                                <AlertCircle className="mr-2 h-4 w-4" />
                                Suspend User
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
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