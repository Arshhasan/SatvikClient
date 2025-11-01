import { useState } from "react";
import Sidebar from "../components/SideBar";
import Breadcrumbs from "../components/BreadCrumbs";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState({ section: "Courses", sub: "All Courses" });

  const renderContent = () => {
    if (activeSection.section === "Courses" && activeSection.sub === "All Courses") {
      return <div className="p-4 text-gray-800">All Courses Placeholder</div>;
    }
    if (activeSection.section === "Courses" && activeSection.sub === "Add Course") {
      return <div className="p-4 text-gray-800">Add Course Placeholder</div>;
    }
    if (activeSection.section === "Lessons" && activeSection.sub === "All Lessons") {
      return <div className="p-4 text-gray-800">All Lessons Placeholder</div>;
    }
    if (activeSection.section === "Lessons" && activeSection.sub === "Add Lesson") {
      return <div className="p-4 text-gray-800">Add Lesson Placeholder</div>;
    }
    if (activeSection.section === "Settings") {
      return <div className="p-4 text-gray-800">Settings Placeholder</div>;
    }
    return <div className="p-4 text-gray-800">Welcome</div>;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar active={activeSection} setActive={setActiveSection} />
      <div className="flex-1 p-6">
        <Breadcrumbs section={activeSection.section} sub={activeSection.sub} />
        <div className="mt-4 bg-white rounded-xl shadow p-6">{renderContent()}</div>
      </div>
    </div>
  );
}
