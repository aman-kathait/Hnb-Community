import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import departments from "./departments";
// install @emotion/is-prop-valid  "npm install @emotion/is-prop-valid"

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [role, setRole] = useState("");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter full name"
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        </div>

        {/* Username */}
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter username"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            className="w-full p-2 border rounded"
            placeholder="Enter password"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        {/* Department */}
        <div>
        <label className="block font-medium">Department</label>
          <select 
                    name="department" 
                    className="w-full p-2 border rounded mb-2"
                    required
                >
                    <option value="">Select Department</option>
                    {departments.map((dept, index) => (
                        <option key={index} value={dept}>
                            {dept}
                        </option>
                    ))}
                </select>
        </div>

        {/* Role Selection */}
        <div>
          <label className="block font-medium">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full p-2 border rounded"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="alumni">Alumni</option>
          </select>
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        </div>

        {/* Passout Year (Only for Alumni) with Animation */}
        <AnimatePresence>
          {role === "alumni" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block font-medium">Passout Year</label>
              <input
                type="number"
                {...register("passoutYear", { required: "Passout Year is required for alumni" })}
                className="w-full p-2 border rounded"
                placeholder="Enter passout year"
              />
              {errors.passoutYear && <p className="text-red-500">{errors.passoutYear.message}</p>}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all">
          Sign Up
        </button>

      </form>
    </div>
  );
};

export default SignupForm;
