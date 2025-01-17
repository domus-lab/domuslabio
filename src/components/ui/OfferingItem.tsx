interface OfferingItemProps {
  title: string;
  description: string;
}

export const OfferingItem = ({ title, description }: OfferingItemProps) => {
  return (
    <div className="p-6 rounded-lg hover:bg-secondary/10 transition-colors duration-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};