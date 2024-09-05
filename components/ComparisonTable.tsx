import Image from "next/image";

export type PrecioProps = { mensual: number; anual: number };

const Precio: Component<PrecioProps> = (props) => {
  return (
    <div className="flex flex-col items-start">
      <div>
        us${" "}
        <span className="font-bold md:text-xl max-sm:text-base font-mont">
          {props.mensual}
        </span>
        mes <br />
        us${" "}
        <span className="font-bold md:text-xl max-sm:text-base font-mont">
          {props.anual}
        </span>
        mes/año
      </div>
    </div>
  );
};

type ComparisonTableCardProps = {
  title: string;
  precio: PrecioProps[];
  paginasIncluidas: string;
  despliegue: string;
  refrescoUi: string;
  iaChat: string;
};

const ComparisonTableCard: Component<ComparisonTableCardProps> = (props) => {
  let precioItems: React.ReactNode[] = [];

  for (let iterator = 0; iterator < props.precio.length; iterator++) {
    const precio = props.precio[iterator];

    precioItems = [
      ...precioItems,
      <Precio key={iterator} mensual={precio.mensual} anual={precio.anual} />,
    ];
  }

  return (
    <div className="flex flex-shrink-0 flex-col py-14 md:px-6 max-sm:px-3 lg:gap-7 md:gap-4 max-sm:gap-3 text-text items-center font-mont font-semibold lg:text-base max-md:text-sm border-l-2 border-background relative xl:w-1/6 lg:w-[20.7%] md:w-[23.2%] max-sm:w-1/2 ">
      <div
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
        className="absolute object-contain inset-0 w-full h-full  scale-y-100 transform opacity-[0.019]"
      ></div>
      <div className="h-12 mb-8">
        <div className="font-bold lg:text-xl md:text-lg max-sm:text-base  text-primary text-center">
          {props.title}
        </div>
      </div>
      <div>{precioItems}</div>
      <button className="py-[5px] px-2 bg-primary rounded-[50px] font-semibold text-[12px] text-center border-solid border-elements border-[4px] my-6">
        Contáctanos
      </button>
      <div>{props.paginasIncluidas}</div>
      <div>{props.despliegue}</div>
      <div>{props.refrescoUi}</div>
      {props.iaChat ? (
        <Image src={props.iaChat} alt="" width={24} height={24} />
      ) : (
        <div className="w-6 h-6 bg-transparent"></div>
      )}
    </div>
  );
};

export type ComparisonTableProps = {
  card: ComparisonTableCardProps[];
};

const ComparisonTable: Component<ComparisonTableProps> = (props) => {
  let cardItems: React.ReactNode[] = [];

  for (let iterator = 0; iterator < props.card.length; iterator++) {
    const card = props.card[iterator];

    console.log(card);

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
    <div className="flex flex-shrink-0 flex-row flex-grow rounded-[20px] border-solid border-background border-2 [background-image:radial-gradient(53%_52%_at_top,rgba(255,255,255,0.15),rgba(255,255,255,0))] max-xl:overflow-x-scroll scroll-smooth overflow-hidden ">
      <div className="flex flex-col flex-shrink-0 py-14 md:px-10 max-sm:px-4 lg:gap-7 md:gap-4 max-sm:gap-3 text-text font-mont lg:text-base max-md:text-sm font-semibold [background-image:radial-gradient(143%_46%_at_bottom_left_,rgba(61,138,255,0.50),rgba(34,71,126,0.50),rgba(13,17,23,0.2))] max-lg:sticky -left-1 sm:sticky max-xl:bg-background z-[1] max-sm:w-[50%]">
        <div
          style={{
            backgroundImage: "url(/noise.webp)",
            backgroundSize: "30%",
          }}
          className="absolute object-contain inset-0 w-full h-full  scale-y-100 transform opacity-[0.019]"
        ></div>
        <div className="h-12 mb-8 text-center lg:text-xl md:text-lg max-sm:text-base text-primary font-bold ">
          Características
        </div>
        <div className="lg:mb-[142px] md:mb-[128px] max-sm:mb-[102px] lg:text-2xl md:text-xl max-sm:text-lg">
          Precio
        </div>
        <div>Páginas incluidas</div>
        <div>Despliegue</div>
        <div>Refresco UI</div>
        <div>IA Chat</div>
      </div>
      <div className="flex flex-row flex-grow w-[100%]">{cardItems}</div>
    </div>
  );
};

export default ComparisonTable;
