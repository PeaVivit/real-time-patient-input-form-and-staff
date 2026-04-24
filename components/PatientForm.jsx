"use client";

import { useForm } from "react-hook-form";
import { socket } from "../lib/socket";
import useDebounce from "../hooks/useDebounce";
import { useEffect } from "react";
import InputField from "./InputField";

export default function PatientForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const values = watch();
  const debouncedValues = useDebounce(values, 400);

  useEffect(() => {
    socket.emit("patient:update", debouncedValues);
  }, [debouncedValues]);

  const onSubmit = (data) => {
    console.log("Submit Working", data);
    socket.emit("patient:submit", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 transition-all duration-300"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-500">Patient Registration</h2>
          <p className="text-gray-500 text-sm">
            Fill in your details below
          </p>
        </div>

        {/* FORM FIELDS */}
        <div className="text-gray-500">
          <InputField
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName}
            rules={{ required: "First name required" }}
          />

          <InputField
            label="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName}
            rules={{ required: "Last name required" }}
          />

          <InputField
            label="Email"
            name="email"
            register={register}
            error={errors.email}
            rules={{
              required: "Email required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            }}
          />

          <InputField
            label="Phone"
            name="phone"
            register={register}
            error={errors.phone}
            rules={{
              required: "Phone required",
              minLength: {
                value: 10,
                message: "At least 10 digits",
              },
            }}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 
                     text-white font-semibold py-3 rounded-lg
                     transition-all duration-300 
                     active:scale-95 shadow-md hover:shadow-lg"
        >
          Submit
        </button>

      </form>
    </div>
  );
}