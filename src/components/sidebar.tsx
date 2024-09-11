import React from 'react';
import { LayoutDashboard, FolderOpen, BarChart2, Settings, User } from 'lucide-react';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/projects', icon: FolderOpen, label: 'My Projects' },
  { href: '/analytics', icon: BarChart2, label: 'Analytics' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

const SideBar = () => {
  return (
    <div className="h-screen w-72 bg-red text-gray-100 flex flex-col shadow-lg">
      <div className="p-6 mb-8">
        <h1 className="text-2xl font-bold tracking-wider">Company Name</h1>
      </div>

      <div className="flex-grow">
        <div className="space-y-1 px-4">
          {navItems.map(({ href, icon: Icon, label }) => (
            <div key={href}>
              <a 
                href={href} 
                className="flex items-center space-x-3 px-4 py-3 gap-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Icon size={20} className="text-gray-400 group-hover:text-white" />
                <span className="font-medium">{label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 mt-auto border-t border-gray-700">
        <a 
          href="/profile" 
          className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 group"
        >
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <User size={24} className="text-gray-300 group-hover:text-white" />
          </div>
          <div>
            <p className="font-medium group-hover:text-white">MyAccount</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SideBar;