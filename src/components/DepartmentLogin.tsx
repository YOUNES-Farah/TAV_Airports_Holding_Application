import React from 'react';
import { Building, Box, LogIn } from 'lucide-react';
import { Department } from '../types';

interface DepartmentLoginProps {
  departments: Department[];
  onSelectDepartment: (department: Department) => void;
}

export function DepartmentLogin({ departments, onSelectDepartment }: DepartmentLoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-600 rounded-full">
              <Box className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion de Stock
          </h1>
          <p className="text-gray-600">
            Sélectionnez votre département pour accéder au système
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Building className="h-5 w-5 mr-2 text-blue-600" />
            Choisir le département
          </h2>
          
          <div className="space-y-3">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => onSelectDepartment(department)}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-700">
                      {department.name}
                    </h3>
                    {department.canViewAll && (
                      <p className="text-sm text-green-600 mt-1">
                        • Accès complet à tous les départements
                      </p>
                    )}
                    {department.canAddProducts && (
                      <p className="text-sm text-blue-600 mt-1">
                        • Peut ajouter des produits
                      </p>
                    )}
                  </div>
                  <LogIn className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Aucun mot de passe requis • Sélection simple par département</p>
        </div>
      </div>
    </div>
  );
}