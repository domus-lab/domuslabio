import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Pricing = () => {
  return (
    <section className="py-20 bg-slate-50" id="pricing">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-center">Pricing</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Transparent pricing options tailored to your project's needs and scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Start your business building an MVP</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">$2,500</span>
                <span className="text-muted-foreground"> starting at</span>
              </div>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Growth</CardTitle>
              <CardDescription>Build scalable solutions and automations at scale</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">$6,500</span>
                <span className="text-muted-foreground"> starting at</span>
              </div>
              <Button className="w-full">Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};