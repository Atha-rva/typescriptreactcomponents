import React from "react";
import { ZAccordionListDetails } from "./index";

const AccordionFile: React.FC = () => {
  const handleDelete = () => {
    alert("Delete button clicked");
  };

  const accordionData = [
    [
      { key: "Name", value: "John Doe" },
      { key: "Age", value: "30" },
    ],
    [
      { key: "Name", value: "Jane Smith" },
      { key: "Age", value: "25" },
    ],
  ];

  return (
    <div>
      <h1>Accordion Component</h1>
      <ZAccordionListDetails
        list={accordionData}
        //   Headertitle="Accordion Header" 
        onDelete={handleDelete} 
        disabled={false} 
        isVisible={true} 
        // showCount="5"
        removeDeleteBtn={false} 
        hideIndex={false} 
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          velit dolorem dicta similique explicabo aspernatur? Molestiae
          reiciendis, deleniti consequatur sit ipsum similique repellendus,
          asperiores vel unde sequi, error qui corporis possimus inventore
          laboriosam non atque iusto. Voluptates quod ut nulla nobis! Suscipit,
          commodi obcaecati non veniam atque, temporibus voluptas inventore ab
          totam aut accusamus, eligendi labore? Quia corporis temporibus
          architecto facilis sapiente molestias in debitis ullam sed reiciendis,
          dicta tenetur consectetur omnis et esse! Adipisci accusantium ducimus
          eum sit, minus distinctio iste cumque hic aliquid officia aut placeat
          veniam laborum, maxime labore laudantium eveniet assumenda minima!
          Ullam commodi sunt deserunt minus animi, similique maxime eos nostrum
          eius ipsa debitis neque excepturi perferendis veritatis molestias
          facilis, quae doloribus aliquam magni? Dicta ab repellat illo tenetur
          libero ullam vel omnis tempora aut, doloribus, pariatur quam eos?
          Voluptates laudantium ad provident nostrum saepe deleniti maiores,
          repellendus molestias. Beatae similique quibusdam, nihil quos
          voluptatibus libero deleniti ullam iusto, quam officia placeat?
          Minima, ducimus fugiat! Quidem aperiam sit illum tempora, labore,
          repellat ducimus quam cupiditate quod est eum, nostrum maiores modi
          cumque rem saepe odio nulla non animi illo! Veritatis recusandae
          provident animi dolorem saepe libero, illum iure, explicabo amet eos
          maiores quaerat ad repellendus.
        </p>
      </ZAccordionListDetails>
    </div>
  );
};

export default AccordionFile;
