import CountButton from "./ui/CountButton";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <h1 className=' p-4 text-lg font-bold'>Home Page</h1>
      <CountButton />
      <CountButton />

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
