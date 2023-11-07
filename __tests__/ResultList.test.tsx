import ResultList from "@/components/ResultList/ResultList"
import { render } from "@testing-library/react"

test('Se nella prop result di ResultList ricevo una lista vuota, il div #resultList non dovrà avere figli', () => {
  const { container } = render(<ResultList result={[]} />);
  const div = container.querySelector('#resultList');
  console.log(`Rilevato ${div?.children.length}`);
  expect(div?.children.length).toBe(0);
})

test('Se nella prop result di ResultList ricevo una lista di 1 elemento, mi aspetto che il div #resultList contenga 1 solo figlio', () => {
  const movies = [{ title: "The Lord of the Rings", overview: "bla bla bla", cover: "", id: 1 }];
  const { container } = render(<ResultList result={movies} />);
  const div = container.querySelector('#resultList');
  console.log(`Rilevato ${div?.children.length}`);
  expect(div?.children.length).toBe(1);
})
