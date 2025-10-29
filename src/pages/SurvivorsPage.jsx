import React from "react";
import { useNavigate } from "react-router-dom";
import { survivors } from "./survivors";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SurvivorsPage = () => {
  const navigate = useNavigate();

  // Sort survivors by date (latest first)
  const sortedSurvivors = [...survivors].sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date(0);
    const dateB = b.date ? new Date(b.date) : new Date(0);
    return dateB - dateA;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen mt-20 bg-gray-50 py-16">
        {/* Hero Section */}
        <section className="pb-10 text-center bg-gradient-to-br from-medical-blue/10 to-purple-50">
          <h1 className="text-4xl font-extrabold text-medical-dark pt-10 mb-2">
            I Am a Survivor
          </h1>
          <p className="text-medical-blue text-lg mb-6">
            Stories of hope, courage, and triumph over cancer
          </p>
        </section>

        <div className="max-w-6xl mt-10 mx-auto px-6">
          {/* All Survivors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedSurvivors.map((survivor) => (
              <div
                key={survivor.id}
                tabIndex={0}
                role="button"
                aria-label={`Read story of ${survivor.name}`}
                onClick={() => navigate(`/survivors/${survivor.id}`)}
                onKeyDown={(evt) =>
                  (evt.key === "Enter" || evt.key === " ") && navigate(`/survivors/${survivor.id}`)
                }
                className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 flex flex-col"
              >
                {survivor.banners && survivor.banners.length > 0 ? (
                  <img
                    src={survivor.banners[0]}
                    alt={survivor.name}
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
                  className="h-48 w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-t-xl flex items-center justify-center"
                  style={{ display: survivor.banners && survivor.banners.length > 0 ? 'none' : 'flex' }}
                >
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold">{survivor.title || survivor.name}</h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-2 text-medical-dark">{survivor.title || survivor.name}</h3>

                  {/* Date if available */}
                  {survivor.date && (
                    <p className="text-sm text-medical-blue font-semibold mb-2">
                      {new Date(survivor.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}

                  <p className="text-gray-600 line-clamp-3 flex-1">{survivor.description || survivor.story}</p>

                  <button
                    className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded hover:from-purple-600 hover:to-pink-600 transition self-start"
                    onClick={(evt) => {
                      evt.stopPropagation();
                      navigate(`/survivors/${survivor.id}`);
                    }}
                  >
                    Read Story
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {sortedSurvivors.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No survivor stories found. Check back later for inspiring stories.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurvivorsPage;
