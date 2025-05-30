import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Calendar, ChevronDown, Eye, Search, Video } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUserSessions } from "@/api/sessions";
import { Session } from "@/api/types";
import { useToast } from "@/hooks/useToast";

export default function AdminSessions() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mock sessions data
  const mockSessions: Session[] = [
    {
      _id: "101",
      type: "chat",
      readerId: "2",
      clientId: "3",
      status: "scheduled",
      startTime: new Date(Date.now() + 86400000).toISOString(), // tomorrow
      duration: 30,
      price: 22.50,
    },
    {
      _id: "102",
      type: "video",
      readerId: "5",
      clientId: "7",
      status: "scheduled",
      startTime: new Date(Date.now() + 172800000).toISOString(), // day after tomorrow
      duration: 60,
      price: 55.00,
    },
    {
      _id: "103",
      type: "phone",
      readerId: "6",
      clientId: "8",
      status: "completed",
      startTime: new Date(Date.now() - 86400000).toISOString(), // yesterday
      endTime: new Date(Date.now() - 83400000).toISOString(), // yesterday + 50 min
      duration: 50,
      price: 54.17,
    },
    {
      _id: "104",
      type: "video",
      readerId: "2",
      clientId: "3",
      status: "active",
      startTime: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      duration: 60,
      price: 45.00,
    },
    {
      _id: "105",
      type: "chat",
      readerId: "5",
      clientId: "9",
      status: "cancelled",
      startTime: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      duration: 30,
      price: 27.50,
    },
    {
      _id: "106",
      type: "phone",
      readerId: "6",
      clientId: "10",
      status: "refunded",
      startTime: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      duration: 45,
      price: 48.75,
    },
  ];

  // Load sessions on component mount
  useState(() => {
    setSessions(mockSessions);
  }, []);

  // Filter sessions based on search query and status filter
  const filteredSessions = mockSessions.filter(session => {
    // Apply status filter
    if (statusFilter !== "all" && session.status !== statusFilter) {
      return false;
    }

    // Apply search query (searching by session ID or type)
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        session._id.toLowerCase().includes(searchLower) ||
        session.type.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });

  // Get reader and client names (mocked for demo)
  const getReaderName = (readerId: string) => {
    const readerMap: { [key: string]: string } = {
      "2": "Mystic Reader",
      "5": "Luna Stargazer",
      "6": "Orion Seer",
    };
    return readerMap[readerId] || "Unknown Reader";
  };

  const getClientName = (clientId: string) => {
    const clientMap: { [key: string]: string } = {
      "3": "Seeker Client",
      "7": "Lisa Johnson",
      "8": "Michael Smith",
      "9": "Emma Davis",
      "10": "David Wilson",
    };
    return clientMap[clientId] || "Unknown Client";
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Status badge variants
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge variant="outline">Scheduled</Badge>;
      case "active":
        return <Badge variant="default" className="bg-green-500">Active</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      case "refunded":
        return <Badge variant="outline" className="border-orange-500 text-orange-500">Refunded</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  // Session type icon
  const getSessionTypeIcon = (type: string) => {
    switch (type) {
      case "chat":
        return <MessageSquare className="mr-2 h-4 w-4" />;
      case "video":
        return <Video className="mr-2 h-4 w-4" />;
      case "phone":
        return <Phone className="mr-2 h-4 w-4" />;
      default:
        return <Calendar className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-alexBrush text-3xl text-primary animate-glow">Session Management</h1>
        <p className="text-muted-foreground">View and manage all platform sessions</p>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Platform Sessions</CardTitle>
          <CardDescription>View all past, current, and upcoming sessions</CardDescription>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by session ID or type..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <span className="flex items-center">
                    <ChevronDown className="mr-2 h-4 w-4" />
                    {statusFilter === "all" ? "All Statuses" : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Reader</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSessions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center">No sessions found</TableCell>
                </TableRow>
              ) : (
                filteredSessions.map((session) => (
                  <TableRow key={session._id}>
                    <TableCell className="font-medium">{session._id}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getSessionTypeIcon(session.type)}
                        {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                      </div>
                    </TableCell>
                    <TableCell>{getReaderName(session.readerId)}</TableCell>
                    <TableCell>{getClientName(session.clientId)}</TableCell>
                    <TableCell>{formatDate(session.startTime)}</TableCell>
                    <TableCell>{session.duration} min</TableCell>
                    <TableCell>${session.price.toFixed(2)}</TableCell>
                    <TableCell>{getStatusBadge(session.status)}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px] bg-background">
                          <DialogHeader>
                            <DialogTitle>Session Details</DialogTitle>
                            <DialogDescription>
                              Detailed information about Session #{session._id}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Session Type</Label>
                                <p className="text-sm font-medium capitalize">{session.type}</p>
                              </div>
                              <div>
                                <Label>Status</Label>
                                <p className="mt-1">{getStatusBadge(session.status)}</p>
                              </div>
                              <div>
                                <Label>Reader</Label>
                                <p className="text-sm font-medium">{getReaderName(session.readerId)}</p>
                              </div>
                              <div>
                                <Label>Client</Label>
                                <p className="text-sm font-medium">{getClientName(session.clientId)}</p>
                              </div>
                              <div>
                                <Label>Start Time</Label>
                                <p className="text-sm font-medium">{formatDate(session.startTime)}</p>
                              </div>
                              {session.endTime && (
                                <div>
                                  <Label>End Time</Label>
                                  <p className="text-sm font-medium">{formatDate(session.endTime)}</p>
                                </div>
                              )}
                              <div>
                                <Label>Duration</Label>
                                <p className="text-sm font-medium">{session.duration} minutes</p>
                              </div>
                              <div>
                                <Label>Price</Label>
                                <p className="text-sm font-medium">${session.price.toFixed(2)}</p>
                              </div>
                            </div>
                            {session.notes && (
                              <div>
                                <Label>Notes</Label>
                                <p className="text-sm">{session.notes}</p>
                              </div>
                            )}
                          </div>
                          <DialogFooter className="flex gap-2">
                            {session.status === "scheduled" && (
                              <Button variant="destructive">
                                Cancel Session
                              </Button>
                            )}
                            {session.status === "completed" && (
                              <Button variant="outline">
                                Issue Refund
                              </Button>
                            )}
                            <Button>
                              Export Details
                            </Button>
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

// Import the required icons
import { MessageSquare, Phone } from "lucide-react";