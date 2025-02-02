import { 
  BarChart, 
  DollarSign,
  Wallet2Icon
} from 'lucide-react';

export default function Navbar() {
  return (
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
              <BarChart className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Wallet2Icon className="w-5 h-5 mr-3" />
              Wallet
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <DollarSign className="w-5 h-5 mr-3" />
              Transfer
            </a>
          </div>
        </nav>
  );
}
