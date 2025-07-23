import React from "react";
import { features } from "../utils/data";
import { FiLayout, FiUploadCloud, FiBarChart, FiServer } from "react-icons/fi";

const FeatureSection = () => {
  return (
    <div className="bg-primary text-white">
      <div className="primary-container py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col text-white border-t border-white/20 pt-8"
              >
                <Icon className="w-8 h-8" />
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-500 mb-4 flex-1">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
