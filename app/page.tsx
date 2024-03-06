import CountButton from "./ui/CountButton";

export default function Home() {
  const data = { steps: [1 - 1, 100, -100] };

  return (
    <main className='flex flex-col'>
      <h1 className=' p-4 text-lg font-bold'>Home Page</h1>
      <CountButton step={1} />
      <CountButton step={-1} />
      <CountButton step={100} />
      <CountButton step={-100} />

      <p className='p-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
        Distinctio aliquid deleniti quibusdam minima voluptas explicabo suscipit
        dolor neque non, necessitatibus et mollitia optio alias maxime sint
        magni odio!
      </p>
      <p className=' p-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut nulla
        quidem. Deserunt sed qui, tempora repudiandae aspernatur error iusto
        dignissimos excepturi beatae unde, labore, veritatis rem blanditiis
        veniam ab.
      </p>
    </main>
  );
}
