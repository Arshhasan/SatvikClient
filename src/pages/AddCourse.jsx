import { useState } from "react";

export default function AddCourse() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    thumbnail: "",
    level: "Beginner",
    price: "",
    isFree: false,
    status: "Draft",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Data:", form);
    alert("Course created (dummy) ✔");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="title"
          placeholder="Course Title"
          className="w-full p-2 border rounded"
          value={form.title}
          onChange={handleChange}
        />

        <select
          name="category"
          className="w-full p-2 border rounded"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option>Yoga</option>
          <option>Meditation</option>
          <option>Satvik Food</option>
          <option>Fitness</option>
        </select>

        <textarea
          name="description"
          placeholder="Course Description"
          className="w-full p-2 border rounded"
          rows={4}
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          className="w-full p-2 border rounded"
          value={form.thumbnail}
          onChange={handleChange}
        />

        <select
          name="level"
          className="w-full p-2 border rounded"
          value={form.level}
          onChange={handleChange}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFree"
            checked={form.isFree}
            onChange={handleChange}
          />
          <label>Free Course</label>
        </div>

        {!form.isFree && (
          <input
            type="number"
            name="price"
            placeholder="Course Price (₹)"
            className="w-full p-2 border rounded"
            value={form.price}
            onChange={handleChange}
          />
        )}

        <select
          name="status"
          className="w-full p-2 border rounded"
          value={form.status}
          onChange={handleChange}
        >
          <option>Draft</option>
          <option>Published</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Create Course
        </button>
      </form>
    </div>
  );
}
