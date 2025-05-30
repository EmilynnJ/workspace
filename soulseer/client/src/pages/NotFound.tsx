import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SparkleIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background bg-[url('/background-image.png')] bg-cover bg-center bg-no-repeat p-4 text-center">
      <div className="card-glass max-w-md p-8">
        <SparkleIcon className="mx-auto h-12 w-12 text-primary animate-glow" />
        <h1 className="mt-6 font-alexBrush text-4xl text-primary animate-glow">
          Realm Not Found
        </h1>
        <p className="mt-4 text-lg">
          The mystical page you seek has vanished into the ether.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button className="w-full">Return to the Spiritual Realm</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}