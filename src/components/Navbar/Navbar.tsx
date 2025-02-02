import { 
  BarChart, 
  Settings, 
  Users, 
  Activity, 
  Calendar,
} from 'lucide-react';

export function Navbar() {
  return (
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
              <BarChart className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Users className="w-5 h-5 mr-3" />
              Team
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Activity className="w-5 h-5 mr-3" />
              Projects
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Calendar className="w-5 h-5 mr-3" />
              Calendar
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </a>
          </div>
        </nav>
  );
}
