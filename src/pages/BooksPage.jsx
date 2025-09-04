import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const books = [
  {
    title: "Retinoblastoma – They Live And See",
    description: "Focused on retinoblastoma, this book highlights advances in treatment for young patients, emphasizing early diagnosis and teamwork for life and vision preservation.",
    cover: "assets/books/ret-book.jpg", // Replace with your image path or URL
    pdfUrl: "assets/books/retinoblastoma-they-live-and-see-book.pdf"    // Update with actual PDF path or URL
  },
  {
    title: "Apollo Life: The Oncology Issue",
    description: "A resource on oncology, presenting expert perspectives. Covers personalized treatment, diagnosis, supportive care, and latest research for cancer care.",
    cover: "assets/books/apoll-book.jpg", // Replace with your image path or URL
    pdfUrl: "public/assets/books/oncology-issue-book.pdf"    // Update with actual PDF path or URL
  },
  {
    title: "I AM A SURVIVOR – 108 Stories of Triumph Over Cancer",
    description: "Celebrates resilience through 108 survivor stories. Inspires hope and awareness, supporting families and encouraging early detection and treatment.",
    cover: "assets/books/i-am-survivor-book.jpeg", // Replace with your image path or URL
    pdfUrl: "public/assets/books/3-stories-1-book.pdf",   // Update with actual PDF path or URL
    buyUrl: "https://amzn.in/d/afn8ojH" // Replace with actual buying link
  },
];

function BooksPage() {
  return (
    <>
    <Header/>
      <div className="min-h-screen bg-[#faf7fc] flex flex-col items-center py-12 mt-24 px-4 font-sans">
      <header className="max-w-2xl mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#9B528F] mb-3">Books Published by Doctor</h1>
        <p className="text-lg text-[#61375d] opacity-80">
          Modern oncology publications and inspiring survivor stories.
        </p>
      </header>
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {books.map((book, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg border border-[#f3e4f0] flex flex-col items-center p-7">
            <img
              src={book.cover}
              alt={book.title + " cover"}
              className="w-32 h-48 object-cover rounded-xl shadow-md mb-6 bg-[#e7d1e6]"
            />
            <div className="text-lg font-bold text-gray-800 mb-3 text-center">{book.title}</div>
            <div className="text-base text-gray-600 text-center leading-relaxed mb-5">{book.description}</div>
            <div className="flex space-x-4">
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border-2 border-[#9B528F] text-[#9B528F] font-semibold hover:bg-[#9B528F] hover:text-white transition"
              >
                Read Book
              </a>
              {book.buyUrl && (
                <a
                  href={book.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#9B528F] text-white font-semibold hover:bg-[#823a6e] transition"
                >
                  Buy Online
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
    <Footer/>
    </>
  
  );
}

export default BooksPage;
