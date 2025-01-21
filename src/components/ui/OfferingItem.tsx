import { LucideIcon } from "lucide-react";

interface OfferingItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const OfferingItem = ({ title, description, icon: Icon }: OfferingItemProps) => {
  return (
    <div className="p-6 rounded-lg hover:bg-secondary/10 transition-colors duration-300">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-gray-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};