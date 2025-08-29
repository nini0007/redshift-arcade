import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Game {
  _id: string;
  title: string;
  image: string;
  genre: string;
  description: string;
  price: number;
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="game-card group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {game.title}
          </CardTitle>
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {game.genre}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <CardDescription className="text-muted-foreground line-clamp-2">
          {game.description}
        </CardDescription>
        <div className="mt-3">
          <span className="text-2xl font-bold text-primary">${game.price}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/game/${game._id}`} className="w-full">
          <Button className="w-full btn-gaming">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GameCard;