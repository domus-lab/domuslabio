import { Button } from "./ui/button";

export const TopMenu = () => (
  <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white p-2 shadow-lg">
    <Button
      onClick={() => {
        window.location.href = "mailto:hello@domuslab.io";
      }}
      className="rounded-full bg-black px-6 py-2 text-xs lowercase text-white hover:bg-gray-800 sm:text-sm"
    >
      connect
    </Button>
  </div>
);
