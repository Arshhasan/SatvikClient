export default function AllLessons({ lessons, courses }) {
  const getCourseName = (courseId) =>
    courses.find((c) => c.id === courseId)?.title || "Unknown Course";

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Lessons</h2>

      <table className="w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-2 border">Lesson Title</th>
            <th className="p-2 border">Course</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Video</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson.id} className="hover:bg-gray-50">
              <td className="p-2 border">{lesson.title}</td>
              <td className="p-2 border">{getCourseName(lesson.courseId)}</td>
              <td className="p-2 border">{lesson.duration}</td>
              <td className="p-2 border">
                <a
                  href={lesson.videoUrl}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Watch
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sample lessons data
export const sampleLessons = [
  {
    id: 1,
    courseId: 1,
    title: "Introduction to Satvik Yoga",
    duration: "20 mins",
    videoUrl: "https://www.youtube.com/watch?v=video1",
  },
  {
    id: 2,
    courseId: 1,
    title: "Basic Asanas",
    duration: "35 mins",
    videoUrl: "https://www.youtube.com/watch?v=video2",
  },
  {
    id: 3,
    courseId: 2,
    title: "Breathing Techniques",
    duration: "25 mins",
    videoUrl: "https://www.youtube.com/watch?v=video3",
  },
];
