import Image from "next/image";

export type PriceProps = { month: number; year: number };

const Price: Component<PriceProps> = (props) => {
  return (
    <div className="flex flex-col items-start">
      <div>
        us${" "}
        <span className="font-bold lg:text-xl md:text-lg max-sm:text-base font-mont">
          {props.month}
        </span>
        month <br />
        us${" "}
        <span className="font-bold lg:text-xl md:text-lg max-sm:text-base font-mont">
          {props.year}
        </span>
        m/year
      </div>
    </div>
  );
};

type ComparisonTableCardProps = {
  title: string;
  price: PriceProps[];
  includedPages: string;
  deployment: string;
  uiRefresh: string;
  aiChat: string;
};

const ComparisonTableCard: Component<ComparisonTableCardProps> = (props) => {
  let priceItems: React.ReactNode[] = [];

  for (let iterator = 0; iterator < props.price.length; iterator++) {
    const price = props.price[iterator];

    priceItems = [
      ...priceItems,
      <Price key={iterator} month={price.month} year={price.year} />,
    ];
  }

  return (
    <div className="flex flex-shrink-0 flex-col py-14 md:px-6 max-sm:px-3 lg:gap-7 md:gap-4 max-sm:gap-3 text-text items-center font-mont font-semibold lg:text-base max-md:text-sm border-l-2 border-background relative xl:w-1/6 lg:w-[21.3%] md:w-[23.4%] max-sm:w-1/2 ">
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
      <div className="h-[104px]">{priceItems}</div>
      <button className="py-[5px] px-2 bg-primary rounded-[50px] font-semibold text-[12px] text-center border-solid border-elements border-[4px] my-6">
        Contact Us
      </button>
      <div>{props.includedPages}</div>
      <div>{props.deployment}</div>
      <div>{props.uiRefresh}</div>
      {props.aiChat ? (
        <Image src={props.aiChat} alt="" width={24} height={24} />
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
        price={card.price}
        includedPages={card.includedPages}
        deployment={card.deployment}
        uiRefresh={card.uiRefresh}
        aiChat={card.aiChat}
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
          Features
        </div>
        <div className="lg:mb-[190px] md:mb-[176px] max-sm:mb-[175px] lg:text-2xl md:text-xl max-sm:text-lg">
          Price
        </div>
        <div>Included Pages</div>
        <div>Deployment</div>
        <div>UI Refresh</div>
        <div>AI Chat</div>
      </div>
      <div className="flex flex-row flex-grow w-[100%]">{cardItems}</div>
    </div>
  );
};

export default ComparisonTable;
