import Container from "@/_container/Container";
import Home from "./_home/page";
export default function App() {
  //TODO:RESUME FROM HERE NEXT TIME
  // console.log(process.env.BACKEND_URI);

  return (
    <Container className="mt-2 flex flex-col items-center justify-center ">
      <Home />
    </Container>
  );
}
