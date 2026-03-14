import { DollarSign, Package, UtensilsCrossed, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { menuItems, inventoryItems, revenueRecords, foodOrderStats } from '../data/mockData';

export function Dashboard() {
  // Calculate stats
  const totalRevenue = revenueRecords.reduce((sum, record) => sum + record.revenue, 0);
  const totalProfit = revenueRecords.reduce((sum, record) => sum + record.profit, 0);
  const totalOrders = revenueRecords.reduce((sum, record) => sum + record.orderCount, 0);
  const lowStockItems = inventoryItems.filter(item => item.quantity < item.minQuantity);
  const availableMenuItems = menuItems.filter(item => item.available).length;

  const stats = [
    {
      name: 'Tổng doanh thu',
      value: `${(totalRevenue / 1000000).toFixed(1)}M ₫`,
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-green-50 text-green-700',
      link: '/revenue',
    },
    {
      name: 'Lợi nhuận',
      value: `${(totalProfit / 1000000).toFixed(1)}M ₫`,
      change: '+8.2%',
      icon: TrendingUp,
      color: 'bg-blue-50 text-blue-700',
      link: '/revenue',
    },
    {
      name: 'Món ăn khả dụng',
      value: availableMenuItems,
      change: `${menuItems.length} tổng`,
      icon: UtensilsCrossed,
      color: 'bg-purple-50 text-purple-700',
      link: '/menu',
    },
    {
      name: 'Cảnh báo tồn kho',
      value: lowStockItems.length,
      change: 'Cần nhập hàng',
      icon: Package,
      color: 'bg-orange-50 text-orange-700',
      link: '/inventory',
    },
  ];
  const orderMap = foodOrderStats.reduce((map, item) => {
    map[item.menuItemId] = item.quantity;
    return map;
  }, {} as Record<string, number>);
  const topMenuItems = [...menuItems]
    .sort((a, b) => (orderMap[b.id] || 0) - (orderMap[a.id] || 0))
    .slice(0, 5);


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tổng quan</h1>
        <p className="text-gray-500 mt-1">Thống kê tổng quan hệ thống quản lý F&B</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              to={stat.link}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock Alert */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cảnh báo tồn kho thấp</h2>
          <div className="space-y-3">
            {lowStockItems.length > 0 ? (
              lowStockItems.slice(0, 5).map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">Tồn: {item.quantity} {item.unit}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Cần nhập
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Tất cả hàng hóa đều đủ số lượng</p>
            )}
          </div>
          <Link to="/inventory" className="block mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
            Xem tất cả →
          </Link>
        </div>

        {/* Top Menu Items */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Menu phổ biến</h2>
          <div className="space-y-3">
            {topMenuItems.map((item, index) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{item.price.toLocaleString()} ₫</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/menu" className="block mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
            Xem menu đầy đủ →
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Thống kê nhanh (14 ngày qua)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-500">Tổng đơn hàng</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{totalOrders.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-1">↑ +15% so với tuần trước</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Doanh thu trung bình/ngày</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {(totalRevenue / revenueRecords.length / 1000000).toFixed(2)}M ₫
            </p>
            <p className="text-sm text-green-600 mt-1">↑ +8% so với tuần trước</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Tỷ suất lợi nhuận</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {((totalProfit / totalRevenue) * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-green-600 mt-1">↑ +2.5% so với tuần trước</p>
          </div>
        </div>
      </div>
    </div>
  );
}
