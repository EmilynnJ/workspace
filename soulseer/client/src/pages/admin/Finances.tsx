import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Download, DollarSign, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/useToast";

export default function AdminFinances() {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeframe, setTimeframe] = useState("monthly");
  const { toast } = useToast();

  // Mock financial data
  const revenueData = [
    { name: "Jan", total: 8500 },
    { name: "Feb", total: 7800 },
    { name: "Mar", total: 9200 },
    { name: "Apr", total: 8700 },
    { name: "May", total: 11500 },
    { name: "Jun", total: 12800 },
    { name: "Jul", total: 15300 },
  ];

  const transactions = [
    {
      id: "TX001",
      type: "session",
      amount: 45.00,
      readerAmount: 31.50,
      platformFee: 13.50,
      date: "2023-07-12",
      status: "completed",
      reader: "Mystic Reader",
      client: "Seeker Client",
    },
    {
      id: "TX002",
      type: "gift",
      amount: 25.00,
      readerAmount: 17.50,
      platformFee: 7.50,
      date: "2023-07-13",
      status: "completed",
      reader: "Luna Stargazer",
      client: "Lisa Johnson",
    },
    {
      id: "TX003",
      type: "session",
      amount: 65.00,
      readerAmount: 45.50,
      platformFee: 19.50,
      date: "2023-07-15",
      status: "completed",
      reader: "Orion Seer",
      client: "Michael Smith",
    },
    {
      id: "TX004",
      type: "product",
      amount: 49.99,
      readerAmount: 0,
      platformFee: 49.99,
      date: "2023-07-16",
      status: "completed",
      client: "Emma Davis",
    },
    {
      id: "TX005",
      type: "session",
      amount: 55.00,
      readerAmount: 38.50,
      platformFee: 16.50,
      date: "2023-07-18",
      status: "completed",
      reader: "Luna Stargazer",
      client: "David Wilson",
    },
  ];

  const pendingPayouts = [
    {
      id: "PO001",
      reader: "Mystic Reader",
      amount: 230.50,
      sessionsCount: 7,
      requestDate: "2023-07-19",
    },
    {
      id: "PO002",
      reader: "Luna Stargazer",
      amount: 175.25,
      sessionsCount: 5,
      requestDate: "2023-07-20",
    },
    {
      id: "PO003",
      reader: "Orion Seer",
      amount: 325.00,
      sessionsCount: 9,
      requestDate: "2023-07-21",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleExport = (type: string) => {
    toast({
      title: "Export Initiated",
      description: `${type} data is being exported to CSV.`,
    });
  };

  const handleProcessPayout = (payoutId: string, readerName: string) => {
    toast({
      title: "Payout Processed",
      description: `Payout for ${readerName} has been processed.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-alexBrush text-3xl text-primary animate-glow">Financial Management</h1>
        <p className="text-muted-foreground">Track revenue, process payouts, and manage transactions</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-40">
              <Calendar className="mr-2 h-4 w-4" />
              {timeframe === "weekly" ? "Weekly" : timeframe === "monthly" ? "Monthly" : "Yearly"}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => handleExport(activeTab)}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <TabsContent value="overview" className="mt-0">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$73,850</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>+12.5% from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platform Fees</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$22,155</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>+8.2% from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reader Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$51,695</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>+14.3% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass mt-6">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                data={revenueData}
                xAxis={[{ scaleType: "band", dataKey: "name" }]}
                series={[{ type: "bar", dataKey: "total", label: "Revenue", valueFormatter: (value) => `$${value}` }]}
                tooltip={({ series, itemData }) => (
                  <ChartTooltip>
                    <ChartTooltipContent
                      series={series}
                      itemData={itemData}
                      formatter={(value) => `$${value}`}
                    />
                  </ChartTooltip>
                )}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="transactions" className="mt-0">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>All platform financial transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Reader Amount</TableHead>
                  <TableHead>Platform Fee</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Participants</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium">{tx.id}</TableCell>
                    <TableCell className="capitalize">{tx.type}</TableCell>
                    <TableCell>${tx.amount.toFixed(2)}</TableCell>
                    <TableCell>${tx.readerAmount.toFixed(2)}</TableCell>
                    <TableCell>${tx.platformFee.toFixed(2)}</TableCell>
                    <TableCell>{formatDate(tx.date)}</TableCell>
                    <TableCell>
                      <Badge variant={tx.status === "completed" ? "default" : "secondary"}>
                        {tx.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {tx.reader && <div>Reader: {tx.reader}</div>}
                      <div>Client: {tx.client}</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="payouts" className="mt-0">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Pending Payouts</CardTitle>
            <CardDescription>Reader payment requests awaiting processing</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payout ID</TableHead>
                  <TableHead>Reader</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Sessions</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingPayouts.map((payout) => (
                  <TableRow key={payout.id}>
                    <TableCell className="font-medium">{payout.id}</TableCell>
                    <TableCell>{payout.reader}</TableCell>
                    <TableCell>${payout.amount.toFixed(2)}</TableCell>
                    <TableCell>{payout.sessionsCount}</TableCell>
                    <TableCell>{formatDate(payout.requestDate)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        onClick={() => handleProcessPayout(payout.id, payout.reader)}
                      >
                        Process Payout
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
}