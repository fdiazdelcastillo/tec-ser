import Image from "next/image";

type ComparisonTableCardProps = {
  title: string;
  precio: string | React.ReactNode;
  paginasIncluidas: string;
  despliegue: string;
  refrescoUi: string;
  iaChat: string;
};

export type ComparisonTableProps = {
  card: ComparisonTableCardProps[];
};

const ComparisonTableCard: Component<ComparisonTableCardProps> = (props) => {
  return (
    <div className="flex flex-shrink-0 flex-col py-14 px-6 gap-7 text-text items-center font-mont font-semibold text-base max-md:text-sm border-l-2 border-background w-[197px] max-md:w-44 relative">
      <div
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
        className="absolute object-contain inset-0 w-full h-full  scale-y-100 transform opacity-[0.019]"
      ></div>
      <div className="w-44 max-md:w-36 mb-[50px] h-8">
        <div className="font-bold text-xl max-md:text-lg text-primary text-center">
          {props.title}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="font-light text-sm max-md:text-sm">{props.precio}</div>
      </div>
      <button className="py-[5px] px-3 bg-primary rounded-[50px] font-semibold text-[12px] text-center border-solid border-elements border-[4px] my-6">
        Contactanos
      </button>
      <div>{props.paginasIncluidas}</div>
      <div>{props.despliegue}</div>
      <div>{props.refrescoUi}</div>
      <Image src={props.iaChat} alt="" />
    </div>
  );
};

const ComparisonTable: Component<ComparisonTableProps> = (props) => {
  let cardItems: React.ReactNode[] = [];

  for (let iterator = 0; iterator < props.card.length; iterator++) {
    const card = props.card[iterator];

    cardItems = [
      ...cardItems,
      <ComparisonTableCard
        key={iterator}
        title={card.title}
        precio={card.precio}
        paginasIncluidas={card.paginasIncluidas}
        despliegue={card.despliegue}
        refrescoUi={card.refrescoUi}
        iaChat={card.iaChat}
      />,
    ];
  }

  return (
    <div className="flex flex-row bg-background flex-grow rounded-[20px] border-solid border-background border-2 [background-image:radial-gradient(53%_52%_at_top,rgba(255,255,255,0.15),rgba(255,255,255,0))] max-xl:overflow-x-scroll scroll-smooth overflow-hidden">
      <div className="flex flex-col py-14 px-10 max-sm:px-8 gap-7 text-text font-mont text-base max-md:text-sm font-semibold [background-image:radial-gradient(143%_46%_at_bottom_left_,rgba(61,138,255,0.50),rgba(34,71,126,0.50),rgba(13,17,23,0.2))] max-lg:sticky -left-1 sm:sticky max-xl:bg-background z-[1]">
        <div
          style={{
            backgroundImage: "url(/noise.webp)",
            backgroundSize: "30%",
          }}
          className="absolute object-contain inset-0 w-full h-full  scale-y-100 transform opacity-[0.019]"
        ></div>
        <div className="mb-12 text-center text-xl max-md:text-lg text-primary font-bold ">
          Características
        </div>
        <div className="mb-[148px] text-2xl max-md:text-xl">Precio</div>
        <div>Páginas incluidas</div>
        <div>Despliegue</div>
        <div>Refresco UI</div>
        <div>IA Chat</div>
      </div>
      <div className="flex flex-row  ">{cardItems}</div>
    </div>
  );
};

export default ComparisonTable;
