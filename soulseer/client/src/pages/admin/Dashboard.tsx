import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Readers",
      value: "12",
      description: "Active platform readers",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Total Clients",
      value: "87",
      description: "+14% from last month",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Total Revenue",
      value: "$12,358",
      description: "+23% from last month",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Active Sessions",
      value: "6",
      description: "Currently in progress",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const chartData = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 1900 },
    { name: "Mar", total: 1800 },
    { name: "Apr", total: 2400 },
    { name: "May", total: 2700 },
    { name: "Jun", total: 3200 },
    { name: "Jul", total: 3800 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-alexBrush text-3xl text-primary animate-glow">Admin Dashboard</h1>
        <p className="text-muted-foreground">Platform overview and key metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Platform revenue over the last 7 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              data={chartData}
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

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>Latest platform activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { client: "Sarah M.", reader: "Mystic Reader", type: "Tarot Reading", time: "30m ago" },
                { client: "John D.", reader: "Luna Stargazer", type: "Astrology", time: "2h ago" },
                { client: "Elena T.", reader: "Orion Seer", type: "Mediumship", time: "3h ago" },
                { client: "Michael P.", reader: "Crystal Healer", type: "Energy Work", time: "5h ago" },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="font-medium">{session.client}</p>
                    <p className="text-sm text-muted-foreground">
                      {session.type} with {session.reader}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">{session.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best selling items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Crystal Healing Set", sold: 42, revenue: "$2,099" },
                { name: "Tarot Card Deck", sold: 38, revenue: "$1,330" },
                { name: "Astrology Birth Chart", sold: 23, revenue: "$575" },
                { name: "Meditation Guide", sold: 17, revenue: "$255" },
              ].map((product, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sold} sold</p>
                  </div>
                  <span className="font-medium">{product.revenue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}