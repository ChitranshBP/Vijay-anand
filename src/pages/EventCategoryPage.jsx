import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { eventCategories, events } from './events';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventCategoryPage = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  const cat = eventCategories.find(c => c.key === categoryKey);
  if (!cat) return <div className="p-16 text-center text-medical-dark text-lg">Category not found.</div>;

  const filteredEvents = events.filter(e => e.category === categoryKey);

  return (
    <>

  <Header/>
      {/* Hero and Breadcrumb */}
      <section className="mt-24 bg-medical-blue/10 py-20 text-center">
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
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col"
              >
                {/* Event Image */}
                <div
                  className="relative h-56 rounded-t-xl overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/events/${e.id}`)}
                  onKeyDown={(evt) => (evt.key === 'Enter' || evt.key === ' ') && navigate(`/events/${e.id}`)}
                  role="button"
                  tabIndex={0}
                  aria-label={e.title}
                >
                  <img
                    src={e.banners[0]}
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Event Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-medical-dark">{e.title}</h2>

                  <div className="text-sm text-gray-500 mb-3 flex flex-wrap gap-2">
                    {e.date && <span>{e.date}</span>}
                    {e.author && <span>| {e.author}</span>}
                  </div>

                  <p className="text-gray-600 line-clamp-4 mb-4 flex-1">{e.description}</p>

                  <button
                    onClick={() => navigate(`/events/${e.id}`)}
                    className="mt-auto bg-medical-blue text-white font-medium px-4 py-2 rounded hover:bg-medical-dark transition"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer/>
    </>
  );
};

export default EventCategoryPage;
