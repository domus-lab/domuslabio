interface OfferingItemProps {
  title: string;
  description: string;
}

export const OfferingItem = ({ title, description }: OfferingItemProps) => {
  return (
    <div className="p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};