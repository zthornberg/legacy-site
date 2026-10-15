import { Button, Container, Eyebrow } from '../components/ui';

export default function NotFound() {
  return (
    <Container className="section-lg min-h-[60vh] flex flex-col justify-center">
      <Eyebrow className="mb-5">404</Eyebrow>
      <h1 className="font-display text-display-xl max-w-2xl">This page isn't here.</h1>
      <p className="mt-5 text-lede text-mute max-w-xl">
        It may have moved, or the link was mistyped. The links below cover most of what people come here for.
      </p>
      <div className="mt-9 flex flex-col sm:flex-row gap-3">
        <Button to="/" variant="primary">
          Back to home
        </Button>
        <Button to="/sell/brokerage" variant="secondary">
          Selling a business
        </Button>
        <Button to="/licensing/program" variant="secondary">
          Licensing program
        </Button>
      </div>
    </Container>
  );
}
