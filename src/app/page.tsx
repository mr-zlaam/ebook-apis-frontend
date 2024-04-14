import Container from "@/_container/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Button className="mx-3">Click Me</Button>
    </Container>
  );
}
