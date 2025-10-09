import React from "react";
import { useNavigate } from "react-router-dom";
import { eventCategories, events } from "./events";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventsPage = () => {
  const navigate = useNavigate();

  return (


    <>
    <Header/>
      <div className="min-h-screen mt-20 bg-gray-50 py-16">
      {/* Hero Section */}
      <section className="pb-10 text-center bg-medical-blue/10">
        <h1 className="text-4xl font-extrabold text-medical-dark pt-10 mb-2">
          Events & Awareness Programmes
        </h1>
        <p className="text-medical-blue text-lg mb-6">
          Browse events for women, children, and more awareness initiatives
        </p>
      </section>

      <div className="max-w-6xl mt-10 mx-auto px-6">
        {/* Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {eventCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => navigate(`/events/category/${cat.key}`)}
              className="rounded-full bg-white py-3 px-6 text-medical-blue font-bold shadow-md hover:bg-blue-50 transition"
              aria-label={`View events in category ${cat.name}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Events by Category */}
        {eventCategories.map((cat) => {
          const filteredEvents = events.filter((e) => e.category === cat.key);
          const displayEvents = filteredEvents.slice(0, 6);

          return (
            <div key={cat.key} className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-medical-blue">{cat.name}</h2>
                {filteredEvents.length > 6 && (
                  <button
                    onClick={() => navigate(`/events/category/${cat.key}`)}
                    className="text-medical-blue font-semibold underline hover:text-medical-dark transition"
                    aria-label={`View more events in ${cat.name}`}
                  >
                    View More &rarr;
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayEvents.map((e) => (
                  <div
                    key={e.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open event: ${e.title}`}
                    onClick={() => navigate(`/events/${e.id}`)}
                    onKeyDown={(evt) =>
                      (evt.key === "Enter" || evt.key === " ") && navigate(`/events/${e.id}`)
                    }
                    className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1"
                  >
                    <img
                      src={e.banners[0]}
                      alt={e.title}
                      className="h-44 w-full object-cover rounded-t-xl"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 text-medical-dark">{e.title}</h3>
                      <p className="text-gray-600 line-clamp-3">{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  
  );
};

export default EventsPage;
