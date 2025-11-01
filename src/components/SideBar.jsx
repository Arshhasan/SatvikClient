import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Sidebar({ active, setActive }) {
  const [openMenu, setOpenMenu] = useState({
    Courses: true,
    Lessons: true,
  });

  const toggle = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    {
      title: "Courses",
      sub: ["All Courses", "Add Course"],
    },
    {
      title: "Lessons",
      sub: ["All Lessons", "Add Lesson"],
    },
    {
      title: "Settings",
      sub: [],
    },
    {
      title: "Logout",
      sub: [],
    }
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r min-h-screen p-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Instructor Panel</h2>

      <nav>
        {menuItems.map((menu, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => toggle(menu.title)}
              className="flex justify-between items-center w-full text-left px-2 py-2 font-semibold text-gray-800 hover:bg-gray-100 rounded cursor-pointer"
            >
              {menu.title}
              {menu.sub.length > 0 && (
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu[menu.title] ? "rotate-180" : ""}`} />
              )}
            </button>

            {menu.sub.length > 0 && openMenu[menu.title] && (
              <div className="ml-4 mt-1">
                {menu.sub.map((sub, sIndex) => (
                  <button
                    key={sIndex}
                    onClick={() => setActive({ section: menu.title, sub })}
                    className={`block w-full text-left px-2 py-1 rounded text-gray-600 hover:bg-gray-200 
                    ${active.section === menu.title && active.sub === sub ? "bg-blue-100 font-semibold text-blue-700" : ""}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
