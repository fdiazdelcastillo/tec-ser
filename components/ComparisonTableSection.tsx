import ComparisonTable from "./ComparisonTable";
import Check from "@/public/Check.svg";

type ComparisonSectionProps = {};

const ComparisonSection: Component<ComparisonSectionProps> = (props) => {
  return (
    <>
      <ComparisonTable
        card={[
          {
            title: "Sitio Web",
            precio: (
              <>
                <div>
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    200
                  </span>
                  mes <br />
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    160
                  </span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "3",
            despliegue: "1 TB/mes",
            refrescoUi: "Anual",
            iaChat: Check,
          },
          {
            title: "Catálogo Web",
            precio: (
              <>
                <div>
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    400
                  </span>
                  mes <br />
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    320
                  </span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "6",
            despliegue: "1 TB/mes",
            refrescoUi: "Cada 2 años",
            iaChat: Check,
          },
          {
            title: "Tienda Web",
            precio: (
              <>
                <div>
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    600
                  </span>
                  mes <br />
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    480
                  </span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "11",
            despliegue: "1 TB/mes",
            refrescoUi: "Cada 2 años",
            iaChat: Check,
          },
          {
            title: "Tienda Movil",
            precio: (
              <>
                <div>
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    1000
                  </span>
                  mes <br />
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    800
                  </span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "8",
            despliegue: "1 TB/mes",
            refrescoUi: "Cada 2 años",
            iaChat: Check,
          },
          {
            title: "Tienda Web y Movil",
            precio: (
              <>
                <div>
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    1400
                  </span>
                  mes <br />
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    1120
                  </span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "12",
            despliegue: "1 TB/mes",
            refrescoUi: "Anual",
            iaChat: Check,
          },
          {
            title: "IA Chat",
            precio: (
              <>
                <div>
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    100
                  </span>
                  mes <br />
                  us${" "}
                  <span className="font-bold md:text-xl max-sm:text-base font-mont">
                    80
                  </span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "N/A",
            despliegue: "N/A",
            refrescoUi: "N/A",
            iaChat: "",
          },
        ]}
      />
    </>
  );
};

export default ComparisonSection;
