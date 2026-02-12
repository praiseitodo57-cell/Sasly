import { BookOpen, ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
  showGetStarted?: boolean;
}

const Navbar = ({ className = "", showGetStarted = true }: NavbarProps) => {
  return (
    <nav className={`flex items-center p-5 fixed top-0 left-0 rig bg-white/95 backdrop-blur-md boder-b boder-gray-200 z-50 shadow-sm w-400 ${className}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                    src="/logo-main.png" 
                    width={130}        
                    height={130}       
                    alt="logo"
                     className=""
                  />
              </div>
        
      </div>

      
      <div className="flex items-center ml-90 font-bold text-xl space-x-8 ">
        <NavLink href="/" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Home</NavLink>
        <NavLink href="/About" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>About</NavLink>
        <NavLink href="/Solution" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Solution</NavLink>
        <NavLink href="/" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Pages</NavLink>
        <NavLink href="/Contact" className='text-gray-600 hover:text-blue-800 transition-colors duration-200 font-medium'>Contact</NavLink>
        
      </div>

    
      {showGetStarted && (
        <button className="ml-35 bg-green-400 px-7 py-3 rounded-lg text-black text-lx hover:bg-white transition-colors font-bold relative right flex">
         <span>Get A Qoute</span>  <span className='ml-1 '><ChevronsRight className='w-5'/></span>
        </button>
      )}
    </nav>
  );
};

// Helper component for individual navigation links
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <div className="text-gray-500 hover:text-blue-900 transition-colors">
    <Link 
      href={href} 
      className={`mr-4 ${className}`}
    >
      {children}
    </Link>
  </div>
);

export default Navbar;