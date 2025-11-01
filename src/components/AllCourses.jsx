export default function AllCourses({ courses }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Courses</h2>

      <table className="w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Level</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-gray-50">
              <td className="p-2 border">{course.title}</td>
              <td className="p-2 border">{course.category}</td>
              <td className="p-2 border">{course.level}</td>
              <td className="p-2 border">{course.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sample courses data
export const sampleCourses = [
  {
    id: 1,
    title: "Satvik Beginner Yoga",
    category: "Yoga",
    level: "Beginner",
    status: "Published",
  },
  {
    id: 2,
    title: "Advanced Pranayama",
    category: "Mindfulness",
    level: "Advanced",
    status: "Draft",
  },
  {
    id: 3,
    title: "Functional Strength Training",
    category: "Fitness",
    level: "Intermediate",
    status: "Published",
  },
];
