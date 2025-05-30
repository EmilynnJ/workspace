import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Search, Plus, Package, Tag, Edit, Truck, Download, BarChart4 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getProducts } from "@/api/shop";
import { Product } from "@/api/types";
import { useToast } from "@/hooks/useToast";

export default function AdminShop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Mock products data
  const mockProducts: Product[] = [
    {
      _id: "701",
      name: "Crystal Healing Set",
      description: "A set of 7 healing crystals for chakra alignment.",
      price: 49.99,
      currency: "USD",
      type: "physical",
      images: ["https://source.unsplash.com/random/300x300/?crystal"],
      inventory: 25,
      stripeProductId: "prod_123",
    },
    {
      _id: "702",
      name: "Tarot Card Deck",
      description: "Traditional Rider-Waite tarot deck with guidebook.",
      price: 35.00,
      currency: "USD",
      type: "physical",
      images: ["https://source.unsplash.com/random/300x300/?tarot"],
      inventory: 50,
      stripeProductId: "prod_124",
    },
    {
      _id: "703",
      name: "Astrology Birth Chart Analysis",
      description: "Detailed PDF analysis of your natal chart with personal insights.",
      price: 25.00,
      currency: "USD",
      type: "digital",
      images: ["https://source.unsplash.com/random/300x300/?astrology"],
      stripeProductId: "prod_125",
    },
    {
      _id: "704",
      name: "Meditation Guide",
      description: "Digital guide with 10 guided meditation tracks.",
      price: 15.00,
      currency: "USD",
      type: "digital",
      images: ["https://source.unsplash.com/random/300x300/?meditation"],
      stripeProductId: "prod_126",
    },
    {
      _id: "705",
      name: "Crystal Pendant Necklace",
      description: "Handcrafted amethyst pendant on sterling silver chain.",
      price: 79.99,
      currency: "USD",
      type: "physical",
      images: ["https://source.unsplash.com/random/300x300/?pendant"],
      inventory: 10,
      stripeProductId: "prod_127",
    },
  ];

  // Load products on component mount
  useState(() => {
    setProducts(mockProducts);
    setIsLoading(false);
  }, []);

  // Filter products based on search query and type filter
  const filteredProducts = mockProducts.filter(product => {
    // Apply type filter
    if (typeFilter !== "all" && product.type !== typeFilter) {
      return false;
    }

    // Apply search query (searching by product name or description)
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });

  // Mock orders data
  const orders = [
    {
      id: "ORD001",
      customer: "Seeker Client",
      products: ["Crystal Healing Set"],
      total: 49.99,
      date: "2023-07-15",
      status: "delivered",
    },
    {
      id: "ORD002",
      customer: "Lisa Johnson",
      products: ["Tarot Card Deck", "Meditation Guide"],
      total: 50.00,
      date: "2023-07-18",
      status: "shipped",
    },
    {
      id: "ORD003",
      customer: "Michael Smith",
      products: ["Astrology Birth Chart Analysis"],
      total: 25.00,
      date: "2023-07-20",
      status: "completed",
    },
    {
      id: "ORD004",
      customer: "Emma Davis",
      products: ["Crystal Pendant Necklace"],
      total: 79.99,
      date: "2023-07-21",
      status: "processing",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return <Badge variant="outline">Processing</Badge>;
      case "shipped":
        return <Badge>Shipped</Badge>;
      case "delivered":
        return <Badge variant="secondary">Delivered</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="font-alexBrush text-3xl text-primary animate-glow">Shop Management</h1>
          <p className="text-muted-foreground">Manage products, inventory, and orders</p>
        </div>

        <div className="flex gap-2">
          <Button onClick={() => toast({ title: "Syncing with Stripe", description: "Syncing products with Stripe..." })}>
            <BarChart4 className="mr-2 h-4 w-4" />
            Sync with Stripe
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-background">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                  Create a new product in your shop
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" placeholder="Enter product name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input id="price" type="number" min="0" step="0.01" placeholder="29.99" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter product description..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="type">Product Type</Label>
                    <Select defaultValue="physical">
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physical">Physical Product</SelectItem>
                        <SelectItem value="digital">Digital Product</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="inventory">Inventory</Label>
                    <Input id="inventory" type="number" min="0" placeholder="Enter inventory count" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Product Image URL</Label>
                  <Input id="image" placeholder="https://example.com/image.jpg" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="active" defaultChecked />
                  <Label htmlFor="active">Product is active and visible in shop</Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create Product</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="products">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>All Products</CardTitle>
              <CardDescription>Manage your shop's products</CardDescription>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <Tag className="mr-2 h-4 w-4" />
                      {typeFilter === "all" ? "All Products" : typeFilter === "physical" ? "Physical Products" : "Digital Products"}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Products</SelectItem>
                      <SelectItem value="physical">Physical Products</SelectItem>
                      <SelectItem value="digital">Digital Products</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Inventory</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">Loading products...</TableCell>
                    </TableRow>
                  ) : filteredProducts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">No products found</TableCell>
                    </TableRow>
                  ) : (
                    filteredProducts.map((product) => (
                      <TableRow key={product._id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 overflow-hidden rounded-md">
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {product.type}
                          </Badge>
                        </TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>
                          {product.type === "physical" ? (
                            product.inventory !== undefined ? product.inventory : "N/A"
                          ) : (
                            "Unlimited"
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px] bg-background">
                                <DialogHeader>
                                  <DialogTitle>Edit Product</DialogTitle>
                                  <DialogDescription>
                                    Update product information
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                      <Label htmlFor={`edit-name-${product._id}`}>Product Name</Label>
                                      <Input id={`edit-name-${product._id}`} defaultValue={product.name} />
                                    </div>
                                    <div className="grid gap-2">
                                      <Label htmlFor={`edit-price-${product._id}`}>Price ($)</Label>
                                      <Input id={`edit-price-${product._id}`} type="number" min="0" step="0.01" defaultValue={product.price} />
                                    </div>
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor={`edit-description-${product._id}`}>Description</Label>
                                    <Textarea id={`edit-description-${product._id}`} defaultValue={product.description} />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                      <Label htmlFor={`edit-type-${product._id}`}>Product Type</Label>
                                      <Select defaultValue={product.type}>
                                        <SelectTrigger id={`edit-type-${product._id}`}>
                                          <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="physical">Physical Product</SelectItem>
                                          <SelectItem value="digital">Digital Product</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div className="grid gap-2">
                                      <Label htmlFor={`edit-inventory-${product._id}`}>Inventory</Label>
                                      <Input 
                                        id={`edit-inventory-${product._id}`} 
                                        type="number" 
                                        min="0" 
                                        defaultValue={product.inventory} 
                                        disabled={product.type === "digital"}
                                      />
                                    </div>
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor={`edit-image-${product._id}`}>Product Image URL</Label>
                                    <Input id={`edit-image-${product._id}`} defaultValue={product.images[0]} />
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Switch id={`edit-active-${product._id}`} defaultChecked />
                                    <Label htmlFor={`edit-active-${product._id}`}>Product is active and visible in shop</Label>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button type="submit">Save Changes</Button>
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
        </TabsContent>
        
        <TabsContent value="orders" className="mt-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Manage customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Orders
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.products.join(", ")}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>{formatDate(order.date)}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Truck className="mr-2 h-4 w-4" />
                              Update
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] bg-background">
                            <DialogHeader>
                              <DialogTitle>Update Order Status</DialogTitle>
                              <DialogDescription>
                                Change the status for order {order.id}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="status">Order Status</Label>
                                <Select defaultValue={order.status}>
                                  <SelectTrigger id="status">
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="processing">Processing</SelectItem>
                                    <SelectItem value="shipped">Shipped</SelectItem>
                                    <SelectItem value="delivered">Delivered</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              {order.status === "shipped" && (
                                <div className="grid gap-2">
                                  <Label htmlFor="tracking">Tracking Number</Label>
                                  <Input id="tracking" placeholder="Enter tracking number" />
                                </div>
                              )}
                              <div className="grid gap-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea id="notes" placeholder="Add notes about this order..." />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Update Order</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}