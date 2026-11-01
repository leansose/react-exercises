import Button from "./components/button";
import Card from "./components/card";
import PageTitle from "./components/pageTitle";
import { MapArrowUpIcon } from '@solar-icons/react/bold-duotone/map-arrow-up'

export default function App() {

  return (
    <main className="p-4">
      <PageTitle title="Travel - Panel" />
      <Card>
        <div className="p-4 bg-stone-300 rounded-md"></div>
        <div className="p-3 bg-stone-300 rounded-md"></div>
        <div className="p-6 bg-stone-300 rounded-md"></div>
        <div className="flex flex-col gap-2">
          <Button variant="success">Click Here!</Button>
          <Button variant="warning">Click Here!</Button>
          <Button variant="info">Click Here!</Button>
          <Button variant="danger">Click Here!</Button>
          <span className="flex items-center justify-center">
            <MapArrowUpIcon size={74}/>
          </span>
        </div>
      </Card>
    </main>
  )
}
