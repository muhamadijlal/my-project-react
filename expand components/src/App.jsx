import TextExpanded from "./components/TextExpanded";

function App() {
  return (
    <>
      <TextExpanded className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpanded>

      <TextExpanded collapsedNumWords={20} className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpanded>

      <TextExpanded collapsedNumWords={5} className="box" expanded={true}>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Perspiciatis minus ut quaerat eveniet
        omnis architecto! At molestiae nam impedit consectetur, voluptatem
        consequuntur. Pariatur fugiat vero asperiores reprehenderit minima
        tempora et molestiae ipsa laboriosam aliquid sit ad, dolore odit.
        Molestias, modi atque. Optio molestias eum ab et? Repudiandae fuga ad
        veritatis optio placeat voluptatem deserunt doloribus incidunt,
        distinctio architecto odio reprehenderit iste itaque vero iusto
        temporibus impedit eveniet quaerat cupiditate qui consequuntur sunt.
        Fugit consectetur iusto cumque optio quibusdam id nesciunt tempore
        voluptas ipsam dolorem, rerum tenetur tempora laudantium culpa
        voluptatibus sint quos amet non porro molestiae dignissimos labore
        exercitationem dolorum!
      </TextExpanded>
    </>
  );
}

export default App;
