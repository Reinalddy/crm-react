import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Bell,
  Search,
  Menu
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const stats = [
    { title: 'Total Users', value: '2,543', change: '+12.5%' },
    { title: 'Revenue', value: '$45,234', change: '+8.2%' },
    { title: 'Active Sessions', value: '342', change: '-3.1%' },
    { title: 'Conversion Rate', value: '3.24%', change: '+2.4%' }
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'Created new account', time: '2 mins ago' },
    { user: 'Sarah Smith', action: 'Made a purchase', time: '15 mins ago' },
    { user: 'Mike Johnson', action: 'Updated profile', time: '1 hour ago' },
    { user: 'Emily Brown', action: 'Submitted feedback', time: '2 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-4 h-16 flex items-center justify-between fixed w-full top-0 z-10">
        <div className="flex items-center">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold ml-4">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <img
            src="/api/placeholder/32/32"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-16 h-full bg-white w-64 shadow-sm transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard' },
              { icon: Users, label: 'Users' },
              { icon: BarChart3, label: 'Analytics' },
              { icon: Settings, label: 'Settings' }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-20 pb-6 transition-all duration-300 ${
        isSidebarOpen ? 'ml-64' : 'ml-0'
      }`}>
        <div className="px-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <span className={`text-sm ${
                    stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                    <span className="text-sm text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;