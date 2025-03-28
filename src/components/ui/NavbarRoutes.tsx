import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const NavbarRoutes = () => {
    const routes = [
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Skills", path: "skills" },
        { name: "Projects", path: "projects" },
        { name: "Contact", path: "contact" },
    ]

    return ( 
        <div className='flex flex-col md:flex-row space-x-4 text-lg'>
            {routes.map((route, index) => (
                <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -8,
                  borderRadius: "100%"
                }}
              >
                <Link  
                to={route.path} 
                smooth={true} 
                duration={500}
                spy={true}
                activeClass='underline font-semibold text-purple-500'
                className='cursor-pointer hover:text-slate-300 hover:underline'
                >
                    {route.name}
                </Link>
                </motion.div>
            ))}
        </div>
     );
}
 
export default NavbarRoutes;