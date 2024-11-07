const items = [
  {
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img: '/dog-2.png',
  },
  {
    title: 'Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img: '/cat.png',
  },
  {
    title: 'Title 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img: '/dog-3.png',
  },
];

interface CardItemProps {
  title: string;
  description: string;
  img: string;
}

function CardItem({ title, description, img }: CardItemProps) {
  return (
    <div className="flex flex-row space-x-5">
      <img src={img} className="size-24 object-cover" />
      <div>
        <h2 className="text-2xl text-black font-bold">{title}</h2>
        <span className="text-sm leading-3">{description}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-hero-pattern">
      <div className="relative flex px-10 pt-10 pb-20 mx-auto container">
        <div className="flex-1 flex flex-col justify-center space-y-10 text-white">
          <h1 className="text-[5rem] leading-[5.5rem] font-bold">
            We take good of your pet
          </h1>
          <p className="text-xl leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            debitis labore molestiae accusamus doloremque rem voluptatem numquam
            eius recusandae perspiciatis consectetur eligendi, eaque harum, enim
            sint sit similique nihil libero?
          </p>
          <button className="bg-blue-300 text-lg py-4 px-16 rounded-full w-fit">
            Schedule a visit
          </button>
        </div>
        <div className="flex-1">
          <div className="relative bg-main-pattern w-full h-[700px] bg-no-repeat">
            <img
              className="absolute bg-no-repeat bottom-20 right-24"
              src="/Asterisk.png"
              alt="Asterisk dog"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between p-10 absolute w-4/5 bg-gray-200 rounded-xl bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 space-x-3">
          {items.map((item) => (
            <CardItem
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
