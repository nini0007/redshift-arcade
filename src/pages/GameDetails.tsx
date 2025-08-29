import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

// Mock data matching Home component
const mockGames = [
  {
    _id: "1",
    title: "Cyber Warfare 2077",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    genre: "Action",
    description: "Experience the ultimate cyberpunk adventure in a dystopian future where technology and humanity collide. Navigate through neon-lit streets, hack into corporate systems, and uncover a conspiracy that threatens the very fabric of society. With cutting-edge graphics and immersive gameplay, this game pushes the boundaries of what's possible in gaming.",
    price: 59.99
  },
  {
    _id: "2", 
    title: "Space Explorer",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
    genre: "Adventure",
    description: "Embark on an epic journey across the galaxy, discovering new worlds and alien civilizations. Command your spaceship through uncharted territories, engage in diplomatic missions, and make choices that will shape the destiny of entire star systems. The universe is vast and full of mysteries waiting to be uncovered.",
    price: 39.99
  },
  {
    _id: "3",
    title: "Racing Thunder",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop", 
    genre: "Racing",
    description: "Feel the adrenaline rush in high-speed races across stunning environments. From city streets to mountain passes, experience realistic physics and breathtaking visuals. Customize your vehicles, compete in championships, and become the ultimate racing legend.",
    price: 49.99
  },
  {
    _id: "4",
    title: "Medieval Legends",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    genre: "RPG", 
    description: "Build your kingdom and lead armies in this epic medieval strategy game. Make alliances, wage wars, and expand your territory through tactical combat and diplomatic negotiations. Every decision shapes your legacy in this immersive medieval world.",
    price: 54.99
  },
  {
    _id: "5",
    title: "Neon City",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    genre: "Puzzle",
    description: "Navigate through neon-lit cityscapes solving challenging puzzles. Use logic and creativity to overcome obstacles in this visually stunning puzzle adventure. Each level presents unique challenges that will test your problem-solving skills.",
    price: 29.99
  },
  {
    _id: "6",
    title: "Battle Arena",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=600&fit=crop",
    genre: "Fighting",
    description: "Enter the arena and prove your worth in intense PvP battles. Master various fighting styles, unlock powerful abilities, and climb the rankings in this competitive fighting game. Every match is a test of skill and strategy.",
    price: 44.99
  }
];

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        // In a real app, this would be: const response = await fetch(`/api/games/${id}`);
        setTimeout(() => {
          const foundGame = mockGames.find(g => g._id === id);
          setGame(foundGame);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching game:', error);
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  const handleBuyNow = () => {
    toast.success(`Added ${game?.title} to cart!`, {
      description: "Redirecting to checkout..."
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-32 mb-6" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-96 bg-muted rounded-lg" />
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-24" />
                <div className="h-32 bg-muted rounded" />
                <div className="h-10 bg-muted rounded w-32" />
                <div className="h-12 bg-muted rounded w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <p className="text-muted-foreground mb-8">The game you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="btn-gaming">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center mb-6 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Games
        </Link>

        {/* Game Details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Game Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-3 text-glow">{game.title}</h1>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-sm">
                {game.genre}
              </Badge>
            </div>

            <Card className="game-card">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {game.description}
                </p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-primary">${game.price}</span>
              </div>
            </div>

            <Button 
              onClick={handleBuyNow}
              size="lg"
              className="w-full btn-gaming pulse-glow"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Buy Now
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameDetails;