import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

interface GrindItemProps {
  id: number;
  title: string;
  description: string;
  className?: string;
  img: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            }: GrindItemProps,
            index: number
          ) => (
            <BentoGridItem
              id={id}
              key={index}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
