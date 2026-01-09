import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OverviewChart } from "@/components/charts/OverviewChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return <div>Unauthorized</div>;
  }

  const aggregateData = await prisma.product.aggregate({
    where: { userId },
    _sum: {
      stock: true,
      price: true,
    },
  });

  const totalStock = aggregateData._sum.stock || 0;
  const totalValue = aggregateData._sum.price || 0;


  const products = await prisma.product.findMany({
    where: { userId },
    take: 10,
    select: {
      name: true,
      stock: true,
    },
    orderBy: {
      stock: 'desc',
    },
  });

  const chartData = products.map((product) => ({
    name: product.name,
    stock: product.stock,
  }));

  return (
    <div className="min-h-screen p-6 md:p-8 lg:p-10 page-transition">
      {/* Hero Banner */}
      <Card className="border-0 shadow-premium bg-card gradient-teal text-white mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl md:text-4xl font-bold">Dashboard Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/90">Welcome back! Here's what's happening with your store today.</p>
        </CardContent>
      </Card>

      {/* Content Grid: Left chart, right stats */}
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
        {/* Left: Chart spans 2 columns */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-premium bg-white">
            <CardHeader className="pb-4">
              <div>
                <CardTitle className="text-2xl font-bold text-gradient-purple">Stock Overview</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Top 10 products by stock quantity</p>
              </div>
            </CardHeader>
            <CardContent>
              <OverviewChart data={chartData} />
            </CardContent>
          </Card>
        </div>

        {/* Right: Stacked stat cards */}
        <div className="space-y-6">
          <StatCard
            title="Total Stock"
            value={totalStock}
            description="Units across all products"
            icon="TrendingUp"
            gradient="gradient-orange"
            delay={0}
          />
          <StatCard
            title="Total Value"
            value={`$${Number(totalValue).toFixed(2)}`}
            description="Combined inventory value"
            icon="DollarSign"
            gradient="gradient-purple"
            delay={0.1}
          />
        </div>
      </div>
    </div>
  );
}
