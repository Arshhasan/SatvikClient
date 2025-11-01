import { useState } from "react";

export default function AddLesson({ courses }) {
  const [form, setForm] = useState({
    courseId: "",
    title: "",
    lessonNumber: "",
    videoUrl: "",
    description: "",
    duration: "",
    isFreePreview: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lesson Data:", form);
    alert("Lesson created (dummy) ✔");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add Lesson</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <select
          name="courseId"
          className="w-full p-2 border rounded"
          value={form.courseId}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          {courses?.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>

        <input
          name="title"
          placeholder="Lesson Title"
          className="w-full p-2 border rounded"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="lessonNumber"
          placeholder="Lesson Number"
          className="w-full p-2 border rounded"
          value={form.lessonNumber}
          onChange={handleChange}
        />

        <input
          name="videoUrl"
          placeholder="YouTube Video URL"
          className="w-full p-2 border rounded"
          value={form.videoUrl}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Lesson Description"
          className="w-full p-2 border rounded"
          rows={4}
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="duration"
          placeholder="Duration (e.g. 20 mins)"
          className="w-full p-2 border rounded"
          value={form.duration}
          onChange={handleChange}
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFreePreview"
            checked={form.isFreePreview}
            onChange={handleChange}
          />
          <label>Free Preview</label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Add Lesson
        </button>
      </form>
    </div>
  );
}
