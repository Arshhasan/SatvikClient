import { useState } from "react";
import Sidebar from "../components/SideBar";
import Breadcrumbs from "../components/BreadCrumbs";
import AddCourse from "./AddCourse";
import AddLesson from "./AddLesson";
import AllCourses from "../components/AllCourses";
import AllLessons from "../components/AllLessons";
import { sampleCourses } from "../components/AllCourses"; // path depends on your folder
import { sampleLessons } from "../components/AllLessons";
export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState({ section: "Courses", sub: "All Courses" });
  const [activeAdminPage, setActiveAdminPage] = useState("allCourses");

  const renderContent = () => {
    if (activeSection.section === "Courses" && activeSection.sub === "All Courses") {
      return <AllCourses courses={sampleCourses} />;
    //   <div className="p-4 text-gray-800">All Courses Placeholder</div>;
    }
    if (activeSection.section === "Courses" && activeSection.sub === "Add Course") {
      return <AddCourse/>
    //   <div className="p-4 text-gray-800">Add Course Placeholder</div>;
    }
    if (activeSection.section === "Lessons" && activeSection.sub === "All Lessons") {
      return <AllLessons lessons={sampleLessons} courses={sampleCourses} />;
    //   <div className="p-4 text-gray-800">All Lessons Placeholder</div>;
    }
    if (activeSection.section === "Lessons" && activeSection.sub === "Add Lesson") {
      return <AddLesson/>
    //   <div className="p-4 text-gray-800">Add Lesson Placeholder</div>;
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
