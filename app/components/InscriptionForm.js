"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ---------------------------------------------------------------------
// Validation schema (Yup)
// ---------------------------------------------------------------------
const schema = yup
  .object()
  .shape({
    nom: yup
      .string()
      .required("Le nom est requis")
      .min(5, "Le nom doit contenir au moins 5 caractères"),
    cin: yup
      .string()
      .required("Le CIN est requis")
      .matches(/^\d{8}$/, "Le CIN doit contenir exactement 8 chiffres"),
    email: yup
      .string()
      .email("Email invalide")
      .required("L&apos;email est requis"),
    password: yup
      .string()
      .required("Le mot de passe est requis")
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Les mots de passe doivent correspondre"
      )
      .required("La confirmation du mot de passe est requise"),
    conditions: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les conditions générales"),
  })
  .required();

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulaire soumis !");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium mb-1">
            Nom
          </label>
          <input
            id="nom"
            {...register("nom")}
            placeholder="Votre nom"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {errors.nom && (
            <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
          )}
        </div>

        {/* CIN */}
        <div>
          <label htmlFor="cin" className="block text-sm font-medium mb-1">
            CIN
          </label>
          <input
            id="cin"
            {...register("cin")}
            placeholder="Ex: 12345678"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {errors.cin && (
            <p className="text-red-500 text-sm mt-1">{errors.cin.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            placeholder="votre@email.com"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Mot de passe
          </label>
          <input
            id="password"
            {...register("password")}
            type="password"
            placeholder="Mot de passe"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1"
          >
            Confirmation du mot de passe
          </label>
          <input
            id="confirmPassword"
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirmez le mot de passe"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Conditions */}
        <div className="flex items-center">
          <input
            id="conditions"
            {...register("conditions")}
            type="checkbox"
            className="h-5 w-5 text-sky-500 rounded focus:ring-sky-500"
          />
          <label
            htmlFor="conditions"
            className="ml-2 text-sm text-gray-700 dark:text-gray-300"
          >
            J&apos;accepte les conditions générales
          </label>
        </div>
        {errors.conditions && (
          <p className="text-red-500 text-sm">{errors.conditions.message}</p>
        )}

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 text-lg rounded-md shadow-md hover:shadow-lg transition-all duration-300 "
        >
          S&apos;inscrire
        </button>
      </form>
    </div>
  );
}
