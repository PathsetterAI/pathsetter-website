import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
  });

  const validate = (name, value) => {
    switch (name) {
      case "name":
      case "role":
        return /^[A-Za-z\s]+$/.test(value)
          ? ""
          : "Only letters and spaces are allowed.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validate(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const isFormValid = () => {
    const newErrors = {
      name: validate("name", formData.name),
      email: validate("email", formData.email),
      role: validate("role", formData.role),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://user-registration-alfred.lemonflower-4e6ee159.southindia.azurecontainerapps.io/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Submitted successfully!");
        setFormData({ name: "", email: "", role: "" });
      } else {
        toast.error(responseData.message || "Submission failed!");
        console.error("API Error:", responseData);
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Network Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="waitlist" className="w-full h-full">
      <div
        style={{
          background:
            "radial-gradient(45.39% 100% at 50% 0%, #393333 0%, #0A0A0A 100%)",
        }}
        className="px-8 md:px-36 py-8 text-white"
      >
        <h1 className="uppercase text-sm tracking-widest mb-10">
          Join the waitlist
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Name */}
            <div className="flex flex-col w-full">
              <label className="text-sm mb-2">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#282828] border border-[#555555] rounded outline-none"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col w-full">
              <label className="text-sm mb-2">Email ID</label>
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#282828] border border-[#555555] rounded outline-none"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Role */}
            <div className="flex flex-col w-full">
              <label className="text-sm mb-2">Designation</label>
              <input
                name="role"
                type="text"
                placeholder="Product Manager"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#282828] border border-[#555555] rounded outline-none"
              />
              {errors.role && (
                <p className="text-red-400 text-sm mt-1">{errors.role}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 border-2 border-[#555555] rounded-full text-white transition ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-[#0A0A0A] hover:bg-[#1a1a1a]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          className="pt-14"
          draggable
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Waitlist;
