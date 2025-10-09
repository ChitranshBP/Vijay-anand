import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { eventCategories, events } from './events';
import { FiChevronRight } from 'react-icons/fi';

const EventCategoryPage = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  const cat = eventCategories.find(c => c.key === categoryKey);
  if (!cat) return <div className="p-16 text-center text-medical-dark text-lg">Category not found.</div>;
  const filteredEvents = events.filter(e => e.category === categoryKey);

  return (
    <>
      {/* Hero and Breadcrumb */}
      <section className="bg-medical-blue/10 py-20 text-center">
        <div className="container mx-auto max-w-4xl px-6">
          <nav className="flex justify-center items-center gap-2 text-medical-blue font-semibold text-lg mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <FiChevronRight />
            <span className="text-medical-dark">{cat.name}</span>
          </nav>
          <h1 className="text-5xl font-extrabold text-medical-dark">{cat.name}</h1>
        </div>
      </section>

      {/* Events Grid */}
      <main className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredEvents.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition transform hover:-translate-y-1"
                tabIndex={0}
                role="button"
                aria-label={e.title}
                onClick={() => navigate(`/events/${e.id}`)}
                onKeyDown={(evt) => (evt.key === 'Enter' || evt.key === ' ') && navigate(`/events/${e.id}`)}
              >
                <div className="relative h-52 rounded-t-xl overflow-hidden">
                  <img
                    src={e.banners[0]}
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-medical-dark leading-tight">{e.title}</h2>
                  <p className="text-gray-600 line-clamp-3">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default EventCategoryPage;
