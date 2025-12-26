"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ---------------------------------------------------------------------
// Validation schema (Yup)
// ---------------------------------------------------------------------
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Le nom doit contenir au moins 4 caractères"),
  email: yup.string().email("Email invalide").required("Email obligatoire"),
  telephone: yup
    .string()
    .required("Numéro de téléphone obligatoire")
    .matches(/^\d{8}$/, "Le numéro doit contenir exactement 8 chiffres"),
  message: yup
    .string()
    .required("Message est obligatoire")
    .max(30, "Le message ne peut pas dépasser 30 caractères"),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message envoyé!");
    reset();
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Form column */}
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-base md:text-2xl text-center font-bold mb-4">
          Contactez-nous
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Nom */}
          <div>
            <label className="text-base block mb-1 font-medium">Nom</label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-base block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Téléphone */}
          <div>
            <label className="text-base block mb-1 font-medium">
              Téléphone
            </label>
            <input
              type="text"
              {...register("telephone")}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            />
            {errors.telephone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.telephone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-base block mb-1 font-medium">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="text-base mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
