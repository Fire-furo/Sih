import React, { useState } from "react";

interface Student {
  name: string;
  roll: string;
  photo: string;
}

interface ClassData {
  name: string;
  students: Student[];
}

const TeacherDashboard: React.FC = () => {
  const [classes, setClasses] = useState<ClassData[]>([
    {
      name: "12th-A",
      students: [
        { name: "Rohan", roll: "1", photo: "faces/rohan_verma.jpg" },
        { name: "Ashri", roll: "2", photo: "faces/Ashri_singh.jpg" },
        { name: "Shilpi", roll: "3", photo: "faces/Shilpi.jpg" },
        { name: "Aaditya", roll: "4", photo: "faces/Aaditya_kumar.jpg" },
      ],
    },
  ]);

  const [newClassName, setNewClassName] = useState("");

  // Add new class
  const addClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim()) return;
    setClasses([...classes, { name: newClassName, students: [] }]);
    setNewClassName("");
  };

  // Delete class
  const deleteClass = (classIndex: number) => {
    const updated = [...classes];
    updated.splice(classIndex, 1);
    setClasses(updated);
  };

  // Add student
  const addStudent = (
    e: React.FormEvent,
    classIndex: number,
    name: string,
    roll: string,
    photo: string
  ) => {
    e.preventDefault();
    const updated = [...classes];
    updated[classIndex].students.push({ name, roll, photo });
    setClasses(updated);
  };

  // Delete student
  const deleteStudent = (classIndex: number, studentIndex: number) => {
    const updated = [...classes];
    updated[classIndex].students.splice(studentIndex, 1);
    setClasses(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center p-4">
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
      </header>

      <div className="container mx-auto p-4 max-w-4xl">
        {/* Add Class Form */}
        <h2 className="text-lg font-semibold mb-2">Add New Class</h2>
        <form onSubmit={addClass} className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Enter class name"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Add Class
          </button>
        </form>

        {/* Class Cards */}
        {classes.map((cls, classIndex) => (
          <div
            key={classIndex}
            className="bg-white rounded-lg shadow p-4 mb-4"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">{cls.name}</h3>
              <button
                onClick={() => deleteClass(classIndex)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete Class
              </button>
            </div>

            {/* Students */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-3">
              {cls.students.map((s, studentIndex) => (
                <div
                  key={studentIndex}
                  className="border rounded p-2 text-center"
                >
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-2"
                  />
                  <p className="font-bold">{s.name}</p>
                  <p className="text-sm text-gray-600">Roll: {s.roll}</p>
                  <button
                    onClick={() => deleteStudent(classIndex, studentIndex)}
                    className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Add Student Form */}
            <AddStudentForm
              onAdd={(name, roll, photo) =>
                addStudent(event as any, classIndex, name, roll, photo)
              }
            />
          </div>
        ))}

        {/* Attendance Button */}
        <button
          onClick={() => (window.location.href = "attendance.tsx")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Go to Attendance
        </button>
      </div>
    </div>
  );
};

// Sub-component for adding students
const AddStudentForm: React.FC<{
  onAdd: (name: string, roll: string, photo: string) => void;
}> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !roll || !photo) return;
    onAdd(name, roll, photo);
    setName("");
    setRoll("");
    setPhoto("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
      <input
        type="text"
        placeholder="Name"
        className="border px-2 py-1 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Roll No"
        className="border px-2 py-1 rounded"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Photo path"
        className="border px-2 py-1 rounded"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add Student
      </button>
    </form>
  );
};

export default TeacherDashboard;
