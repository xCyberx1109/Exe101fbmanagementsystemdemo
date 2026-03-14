export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  cost: number;
  description: string;
  available: boolean;
}

export interface InventoryItem {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  minQuantity: number;
  price: number;
  supplier: string;
  lastUpdated: string;
}

export interface RevenueRecord {
  id: string;
  date: string;
  orderCount: number;
  revenue: number;
  cost: number;
  profit: number;
}

export interface TaxRecord {
  id: string;
  month: string;
  revenue: number;
  taxRate: number;
  taxAmount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Phở Bò', category: 'Món chính', price: 65000, cost: 35000, description: 'Phở bò truyền thống Hà Nội', available: true },
  { id: '2', name: 'Bún Chả', category: 'Món chính', price: 55000, cost: 30000, description: 'Bún chả Hà Nội đặc sản', available: true },
  { id: '3', name: 'Cơm Tấm', category: 'Món chính', price: 45000, cost: 25000, description: 'Cơm tấm sườn bì chả', available: true },
  { id: '4', name: 'Bánh Mì', category: 'Món phụ', price: 25000, cost: 12000, description: 'Bánh mì thịt nguội pate', available: true },
  { id: '5', name: 'Cà Phê Đen', category: 'Đồ uống', price: 25000, cost: 8000, description: 'Cà phê phin truyền thống', available: true },
  { id: '6', name: 'Cà Phê Sữa', category: 'Đồ uống', price: 30000, cost: 10000, description: 'Cà phê sữa đá', available: true },
  { id: '7', name: 'Trà Chanh', category: 'Đồ uống', price: 20000, cost: 6000, description: 'Trà chanh tươi mát', available: true },
  { id: '8', name: 'Nem Rán', category: 'Món phụ', price: 35000, cost: 18000, description: 'Nem rán giòn rụm', available: true },
];

export const inventoryItems: InventoryItem[] = [
  { id: '1', name: 'Thịt Bò', unit: 'kg', quantity: 45, minQuantity: 20, price: 280000, supplier: 'Công ty Thực Phẩm A', lastUpdated: '2026-03-14' },
  { id: '2', name: 'Gạo', unit: 'kg', quantity: 150, minQuantity: 50, price: 18000, supplier: 'Công ty Lương Thực B', lastUpdated: '2026-03-13' },
  { id: '3', name: 'Rau Sống', unit: 'kg', quantity: 15, minQuantity: 10, price: 25000, supplier: 'Nông Trại C', lastUpdated: '2026-03-14' },
  { id: '4', name: 'Cà Phê Hạt', unit: 'kg', quantity: 12, minQuantity: 5, price: 350000, supplier: 'Công ty Cà Phê D', lastUpdated: '2026-03-12' },
  { id: '5', name: 'Đường', unit: 'kg', quantity: 30, minQuantity: 15, price: 22000, supplier: 'Công ty Thực Phẩm A', lastUpdated: '2026-03-14' },
  { id: '6', name: 'Sữa Tươi', unit: 'lít', quantity: 8, minQuantity: 10, price: 35000, supplier: 'Công ty Sữa E', lastUpdated: '2026-03-14' },
  { id: '7', name: 'Bánh Mì', unit: 'chiếc', quantity: 50, minQuantity: 30, price: 8000, supplier: 'Tiệm Bánh F', lastUpdated: '2026-03-14' },
  { id: '8', name: 'Chanh', unit: 'kg', quantity: 18, minQuantity: 8, price: 15000, supplier: 'Nông Trại C', lastUpdated: '2026-03-13' },
];

export const revenueRecords: RevenueRecord[] = [
  { id: '1', date: '2026-03-01', orderCount: 85, revenue: 4250000, cost: 2125000, profit: 2125000 },
  { id: '2', date: '2026-03-02', orderCount: 92, revenue: 4600000, cost: 2300000, profit: 2300000 },
  { id: '3', date: '2026-03-03', orderCount: 78, revenue: 3900000, cost: 1950000, profit: 1950000 },
  { id: '4', date: '2026-03-04', orderCount: 105, revenue: 5250000, cost: 2625000, profit: 2625000 },
  { id: '5', date: '2026-03-05', orderCount: 98, revenue: 4900000, cost: 2450000, profit: 2450000 },
  { id: '6', date: '2026-03-06', orderCount: 88, revenue: 4400000, cost: 2200000, profit: 2200000 },
  { id: '7', date: '2026-03-07', orderCount: 95, revenue: 4750000, cost: 2375000, profit: 2375000 },
  { id: '8', date: '2026-03-08', orderCount: 110, revenue: 5500000, cost: 2750000, profit: 2750000 },
  { id: '9', date: '2026-03-09', orderCount: 102, revenue: 5100000, cost: 2550000, profit: 2550000 },
  { id: '10', date: '2026-03-10', orderCount: 89, revenue: 4450000, cost: 2225000, profit: 2225000 },
  { id: '11', date: '2026-03-11', orderCount: 93, revenue: 4650000, cost: 2325000, profit: 2325000 },
  { id: '12', date: '2026-03-12', orderCount: 97, revenue: 4850000, cost: 2425000, profit: 2425000 },
  { id: '13', date: '2026-03-13', orderCount: 108, revenue: 5400000, cost: 2700000, profit: 2700000 },
  { id: '14', date: '2026-03-14', orderCount: 115, revenue: 5750000, cost: 2875000, profit: 2875000 },
];

export const taxRecords: TaxRecord[] = [
  { id: '1', month: '2026-01', revenue: 125000000, taxRate: 10, taxAmount: 12500000, status: 'paid' },
  { id: '2', month: '2026-02', revenue: 135000000, taxRate: 10, taxAmount: 13500000, status: 'paid' },
  { id: '3', month: '2026-03', revenue: 68400000, taxRate: 10, taxAmount: 6840000, status: 'pending' },
];
