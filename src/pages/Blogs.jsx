import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top Real Estate Investment Tips",
    excerpt: "Learn how to invest smartly in real estate...",
    date: "2025-09-20",
    image: "/assets/blog1.jpg",
  },
  {
    id: 2,
    title: "Interior Design Trends 2025",
    excerpt: "Discover the latest trends in home interiors...",
    date: "2025-09-22",
    image: "/assets/blog2.jpg",
  },
];

export default function Blogs() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12 mt-28">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-500 text-sm">{blog.date}</p>
              <p className="mt-2 text-gray-600">{blog.excerpt}</p>
              <Link to={`/blogs/${blog.id}`} className="text-pink-500 font-medium mt-3 inline-block">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
