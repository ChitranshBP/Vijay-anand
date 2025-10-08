import React from "react";
import { services } from "./services";
import { useNavigate } from "react-router-dom";

const ServiceListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {Object.values(services).map(({ id, title, bannerImage, summary }) => (
        <div
          key={id}
          onClick={() => navigate(`/services/${id}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate(`/services/${id}`);
          }}
          className="cursor-pointer rounded shadow hover:shadow-lg transition"
          aria-label={`View details about ${title}`}
        >
          <img
            className="w-full h-48 object-cover rounded-t"
            src={bannerImage}
            alt={`Banner for ${title}`}
            loading="lazy"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceListPage;
