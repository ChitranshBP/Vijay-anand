import React from "react";
import { useNavigate } from "react-router-dom";
import { cancerClinics } from "./cancerClinics";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CancerClinicsPage = () => {
  const navigate = useNavigate();

  // Sort clinics by date (latest first)
  const sortedClinics = [...cancerClinics].sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date(0);
    const dateB = b.date ? new Date(b.date) : new Date(0);
    return dateB - dateA;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen mt-20 bg-gray-50 py-16">
        {/* Hero Section */}
        <section className="pb-10 text-center bg-medical-blue/10">
          <h1 className="text-4xl font-extrabold text-medical-dark pt-10 mb-2">
            Cancer Clinics & Outreach Programs
          </h1>
          <p className="text-medical-blue text-lg mb-6">
            Community healthcare initiatives and cancer awareness clinics
          </p>
        </section>

        <div className="max-w-6xl mt-10 mx-auto px-6">
          {/* All Clinics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedClinics.map((clinic) => (
              <div
                key={clinic.id}
                tabIndex={0}
                role="button"
                aria-label={`Open clinic: ${clinic.title}`}
                onClick={() => navigate(`/cancer-clinics/${clinic.id}`)}
                onKeyDown={(evt) =>
                  (evt.key === "Enter" || evt.key === " ") && navigate(`/cancer-clinics/${clinic.id}`)
                }
                className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 flex flex-col"
              >
                {clinic.banners && clinic.banners.length > 0 ? (
                  <img
                    src={clinic.banners[0]}
                    alt={clinic.title}
                    className="h-48 w-full object-cover rounded-t-xl"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* Fallback banner */}
                <div
                  className="h-48 w-full bg-gradient-to-br from-medical-blue to-blue-700 rounded-t-xl flex items-center justify-center"
                  style={{ display: clinic.banners && clinic.banners.length > 0 ? 'none' : 'flex' }}
                >
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold">{clinic.title}</h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-2 text-medical-dark">{clinic.title}</h3>

                  {/* Display date if available */}
                  {clinic.date && (
                    <p className="text-sm text-medical-blue font-semibold mb-2">
                      {new Date(clinic.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}

                  <p className="text-gray-600 line-clamp-3 flex-1">{clinic.description}</p>

                  <button
                    className="mt-4 bg-medical-blue text-white font-medium px-4 py-2 rounded hover:bg-medical-dark transition self-start"
                    onClick={(evt) => {
                      evt.stopPropagation();
                      navigate(`/cancer-clinics/${clinic.id}`);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {sortedClinics.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No cancer clinics found. Check back later for updates.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CancerClinicsPage;
