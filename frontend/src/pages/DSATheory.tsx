
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { TopicCard } from "@/components/dsa/TopicCard";
import { TopicPagination } from "@/components/dsa/TopicPagination";
import { TheoryHeader } from "@/components/dsa/TheoryHeader";
import { dsaTopics } from "@/data/dsaTopics";

const DSATheory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 1;

  const totalPages = Math.ceil(dsaTopics.length / topicsPerPage);
  const startIndex = (currentPage - 1) * topicsPerPage;
  const currentTopics = dsaTopics.slice(startIndex, startIndex + topicsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <TheoryHeader 
            title="Data Structures and Algorithms Theory"
            subtitle="A comprehensive guide to understanding DSA concepts from basics to advanced"
          />

          {currentTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}

          <TopicPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DSATheory;
