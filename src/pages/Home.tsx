import { useState, useEffect } from "react";
import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";

// Mock data for games
const mockGames = [
  {
    _id: "1",
    title: "Cyber Warfare 2077",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    genre: "Action",
    description: "Experience the ultimate cyberpunk adventure in a dystopian future where technology and humanity collide.",
    price: 59.99
  },
  {
    _id: "2", 
    title: "Space Explorer",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    genre: "Adventure",
    description: "Embark on an epic journey across the galaxy, discovering new worlds and alien civilizations.",
    price: 39.99
  },
  {
    _id: "3",
    title: "Racing Thunder",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop", 
    genre: "Racing",
    description: "Feel the adrenaline rush in high-speed races across stunning environments.",
    price: 49.99
  },
  {
    _id: "4",
    title: "Medieval Legends",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    genre: "RPG", 
    description: "Build your kingdom and lead armies in this epic medieval strategy game.",
    price: 54.99
  },
  {
    _id: "5",
    title: "Neon City",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    genre: "Puzzle",
    description: "Navigate through neon-lit cityscapes solving challenging puzzles.",
    price: 29.99
  },
  {
    _id: "6",
    title: "Battle Arena",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop",
    genre: "Fighting",
    description: "Enter the arena and prove your worth in intense PvP battles.",
    price: 44.99
  }
];

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchGames = async () => {
      try {
        // In a real app, this would be: const response = await fetch('/api/games');
        setTimeout(() => {
          setGames(mockGames);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching games:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-glow">
            Welcome to <span className="text-primary">GameHub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest and greatest games. From action-packed adventures to mind-bending puzzles.
          </p>
        </section>

        {/* Games Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Games</h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="game-card animate-pulse">
                  <div className="h-48 bg-muted rounded-t-lg" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                    <div className="h-8 bg-muted rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <GameCard key={game._id} game={game} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;