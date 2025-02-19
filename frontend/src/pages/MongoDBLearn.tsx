
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MongoDBLearn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link 
            to="/learn" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to MERN Stack
          </Link>
          
          <div className="animate-fade-in space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">MongoDB</h1>
              <p className="text-gray-600 text-lg">
                A comprehensive guide to MongoDB, from basics to advanced concepts
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Introduction to MongoDB</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents.
                  Unlike traditional relational databases, MongoDB doesn't require a fixed schema,
                  making it ideal for applications that need to handle varied data structures.
                </p>
                <h3 className="text-xl font-semibold mt-6">Key Concepts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Documents: JSON-like objects that contain your data</li>
                  <li>Collections: Groups of documents (similar to tables in SQL)</li>
                  <li>Fields: Key-value pairs within documents</li>
                  <li>Embedded Documents: Documents nested within other documents</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Basic Operations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Creating Documents</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`db.collection.insertOne({
  name: "John Doe",
  age: 30,
  email: "john@example.com"
})`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Reading Documents</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Find all documents
db.collection.find()

// Find documents with specific criteria
db.collection.find({ age: { $gt: 25 } })`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Updating Documents</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`db.collection.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } }
)`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Deleting Documents</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`db.collection.deleteOne({ name: "John Doe" })`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Aggregation Pipeline</h3>
                <p>
                  MongoDB's aggregation framework allows you to process and analyze data using a 
                  pipeline of stages. Each stage transforms the documents as they pass through the pipeline.
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`db.collection.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: "$city", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Indexing</h3>
                <p>
                  Indexes support efficient execution of queries in MongoDB. Without indexes,
                  MongoDB must scan every document in a collection to find the matching documents.
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Create a single field index
db.collection.createIndex({ "field": 1 })

// Create a compound index
db.collection.createIndex({ "field1": 1, "field2": -1 })`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MongoDBLearn;
