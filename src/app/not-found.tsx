import { Button } from "@/components/ui/Button";
import { RoofMark } from "@/components/ui/RoofMark";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center bg-ink text-bone">
      <div className="container-x py-40">
        <RoofMark className="h-3 text-silver" />
        <p className="eyebrow mt-6 text-silver">404</p>
        <h1 className="display mt-6 max-w-3xl text-6xl sm:text-8xl">This address doesn&rsquo;t exist.</h1>
        <p className="mt-8 max-w-md text-silver">The page you were looking for may have moved. Let us guide you back.</p>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/" tone="dark">Return home</Button>
          <Button href="/areas" tone="dark" variant="outline">Explore areas</Button>
        </div>
      </div>
    </section>
  );
}
