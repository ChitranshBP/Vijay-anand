import React from "react";
import { useNavigate } from "react-router-dom";
import { events } from "./events";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventsPage = () => {
  const navigate = useNavigate();

  // Sort events by date (latest first)
  const sortedEvents = [...events].sort((a, b) => {
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
            Events & Awareness Programmes
          </h1>
          <p className="text-medical-blue text-lg mb-6">
            Explore all our events and awareness initiatives
          </p>
        </section>

        <div className="max-w-6xl mt-10 mx-auto px-6">
          {/* All Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((e) => (
              <div
                key={e.id}
                tabIndex={0}
                role="button"
                aria-label={`Open event: ${e.title}`}
                onClick={() => navigate(`/events/${e.id}`)}
                onKeyDown={(evt) =>
                  (evt.key === "Enter" || evt.key === " ") && navigate(`/events/${e.id}`)
                }
                className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1 flex flex-col"
              >
                <img
                  src={e.banners[0]}
                  alt={e.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-2 text-medical-dark">{e.title}</h3>

                  {/* Display date if available */}
                  {e.date && (
                    <p className="text-sm text-medical-blue font-semibold mb-2">
                      {new Date(e.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}

                  <p className="text-gray-600 line-clamp-3 flex-1">{e.description}</p>

                  <button
                    className="mt-4 bg-medical-blue text-white font-medium px-4 py-2 rounded hover:bg-medical-dark transition self-start"
                    onClick={(evt) => {
                      evt.stopPropagation();
                      navigate(`/events/${e.id}`);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
