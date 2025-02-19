
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Search, Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  timestamp: string;
  bookmarked: boolean;
}

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Getting Started with React",
      content: "What's the best way to learn React in 2024?",
      author: "Sarah Dev",
      likes: 15,
      comments: 5,
      timestamp: "2h ago",
      bookmarked: false,
    },
    {
      id: 2,
      title: "MongoDB vs PostgreSQL",
      content: "Comparing MongoDB and PostgreSQL for a new project...",
      author: "Tech Explorer",
      likes: 23,
      comments: 8,
      timestamp: "4h ago",
      bookmarked: true,
    },
    // Add more mock posts as needed
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching...",
      description: `Looking for: ${searchQuery}`,
    });
  };

  const toggleBookmark = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, bookmarked: !post.bookmarked }
        : post
    ));
    toast({
      title: "Success",
      description: "Post bookmark status updated",
    });
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
    toast({
      title: "Success",
      description: "Post liked!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-20">
        {/* Community Header */}
        <div className="flex items-center justify-between mb-8 mt-8">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Community</h1>
          </div>
          <Button onClick={() => {
            toast({
              title: "Coming Soon",
              description: "This feature will be available soon!",
            });
          }}>
            Create Post
          </Button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search discussions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </div>
        </form>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Active Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,234</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">789</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Online Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">56</p>
            </CardContent>
          </Card>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(post.id)}
                    className={post.bookmarked ? "text-primary" : "text-gray-400"}
                  >
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className="gap-2"
                  >
                    Like • {post.likes}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => {
                      toast({
                        title: "Coming Soon",
                        description: "Comments feature will be available soon!",
                      });
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Comments • {post.comments}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
