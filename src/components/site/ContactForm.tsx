import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { services } from "@/data/business";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[\d\s()+-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().max(1000).optional(),
});
type F = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<F>({ resolver: zodResolver(schema), defaultValues: { service: "" } });
  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    toast.success("Thanks! We'll call you shortly with your free quote.");
    reset();
  };
  const err = (m?: string) => m && <p className="mt-1 text-xs text-destructive">{m}</p>;
  const field = "bg-background/60";
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass space-y-4 rounded-2xl p-6 sm:p-8">
      <h3 className="text-2xl font-bold text-silver-gradient">Get a Free Quote</h3>
      <div><Label htmlFor="name">Name</Label><Input id="name" className={field} {...register("name")} />{err(errors.name?.message)}</div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" className={field} {...register("phone")} />{err(errors.phone?.message)}</div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" className={field} {...register("email")} />{err(errors.email?.message)}</div>
      </div>
      <div>
        <Label htmlFor="service">Service Needed</Label>
        <select id="service" {...register("service")} className="flex h-9 w-full rounded-md border border-input bg-background/60 px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.title}>{s.title}</option>)}
          <option>Emergency Glass Service</option><option>Other</option>
        </select>{err(errors.service?.message)}
      </div>
      <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={4} className={field} {...register("message")} /></div>
      <Button type="submit" variant="glow" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Request My Free Quote"}</Button>
    </form>
  );
}
