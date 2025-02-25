import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import categoryIcon1 from "@/public/icons/category1.svg";
import categoryIcon2 from "@/public/icons/category2.svg";
import categoryIcon3 from "@/public/icons/category3.svg";
import categoryIcon4 from "@/public/icons/category4.svg";
import categoryIcon5 from "@/public/icons/category5.svg";
import orangeAngle from "@/public/icons/orange_angle.svg";
import bookImg from "@/public/images/book.svg";
import amazonChoiceImg from "@/public/images/amazonChoise.jpg";
import amazoncomImg from "@/public/images/amazoncom.svg";
import redLabelIcon from "@/public/icons/red_label.svg";
import mainBookImg from "@/public/images/mainBook.jpg";
import starIcon from "@/public/icons/star.svg";
import backgroundBookImg from "@/public/images/backgroundBook.png";
// import Categories from "@/src/widgets/categories";
import dynamic from "next/dynamic";

const categoriesMock = [
  {
    id: "1",
    name: "Coloring Books",
    background: "bg-gradient-to-tl from-[#FAD961] to-[#F76B1C]",
    circleColor: "#F76E1E",
    // icon: <Image src={categoryIcon1} alt="Coloring Books category" />,
  },
  {
    id: "2",
    name: "Puzzle Books",
    background: "bg-gradient-to-br from-[#6253E1] to-[#04BEFE]",
    circleColor: "#07BBFD",
    // icon: <Image src={categoryIcon2} alt="Puzzle Books category" />,
  },
  {
    id: "3",
    name: "Education Books",
    background: "bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]",
    circleColor: "#7468F0",
    // icon: <Image src={categoryIcon3} alt="Education Books category" />,
  },
  {
    id: "4",
    name: "Planning Books",
    background: "bg-gradient-to-br from-[#6B73FF] to-[#000DFF]",
    circleColor: "#030FFF",
    // icon: <Image src={categoryIcon4} alt="Planning Books category" />,
  },
  {
    id: "5",
    name: "Gifts Books",
    background: "bg-gradient-to-br from-[#EC8C69] to-[#FA7199]",
    circleColor: "#D8597E",
    // icon: <Image src={categoryIcon5} alt="Gifts Books category" />,
  },
];

const books = Array.from(new Array(6)).map((_, index) => ({
  id: index + 1,
  image: <Image src={categoryIcon5} alt="" />,
  name: `Blue fly bird №${index}`,
  description:
    "Bluey Easter Coloring Book: [2022 edition] Bluey Coloring Book With 30+ Beautiful Coloring Pages for Kids and Toddlers to Color and Relax",
  cost: 6.99 + index,
  sale: 10 + index * 5,
}));

const costWithSale = ({ cost, sale }: { cost: number; sale?: number }) => {
  const number = !sale ? cost : cost - cost * (sale / 100);
  return number.toFixed(2);
};

const fetchCategories = () =>
  new Promise((res) => {
    setTimeout(() => {
      res(categoriesMock);
    }, 1000);
  });

// export async function getServerSideProps() {
//   const categories = await fetchCategories();
//   console.log("getServerSideProps categories: ", categories);

//   return {
//     props: { categories },
//   };
// }

const Categories = dynamic(() => import("@/src/widgets/categories"), {
  ssr: true,
  // ssr: false, // Отключаем SSR для этого компонента
  loading: () => <div>Загрузка категорий...</div>, // Заглушка пока грузится компонент
});

const Home = () => {
  // const Home = ({ categories }) => {
  // console.log("categories: ", categories);
  // const [categories, setCategories] = useState<any[]>([]);
  // useEffect(() => {
  //   fetchCategories().then((res) => {
  //     console.log("res: ", res);
  //     setCategories(res);
  //   });
  // }, []);
  return (
    <div className="flex flex-col items-center gap-10">
      {/* БАННЕР */}
      <div className="flex items-center h-[312px] relative bg-[#F98D8D] p-[28px] gap-[56px]">
        <Image
          src={backgroundBookImg}
          className="absolute top-0 left-0 h-full w-[400px]"
          alt="background book image"
        />
        <div className="flex justify-center items-center size-[44px] min-w-[44px] bg-[#E4E4E4] rounded-full cursor-pointer z-10">
          <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[18px] border-transparent border-r-white" />
        </div>

        <div className="flex gap-[18px] z-10">
          <Image src={mainBookImg} className="h-[212px] w-[142px]" alt="book" />
          <div className="flex flex-col">
            <p className="font-black text-[32px] leading-[32px] text-white">
              BIG MAGIC
            </p>
            <div className="flex gap-[10px] mt-[10px] mb-[30px]">
              {Array.from(new Array(5)).map((_, index) => (
                <Image
                  key={index}
                  src={starIcon}
                  className="h-[16px]"
                  alt="star"
                />
              ))}
            </div>

            <p className="text-[20px] leading-[23px]">
              Readers of all ages and walks of life have drawn inspiration and
              empowerment from Elizabeth Gilbert books for years.
            </p>

            <Link
              href="/book/1"
              className="flex items-center justify-center cursor-pointer rounded-full bg-white h-[32px] w-[140px] min-w-[140px] text-[#FF8787] text-[14px] font-medium mt-[10px] self-end"
            >
              See The Book
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center size-[44px] min-w-[44px] bg-[#E4E4E4] rounded-full cursor-pointer z-10">
          <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-transparent border-l-white" />
        </div>
      </div>
      {/* КАТЕГОРИИ */}
      {/* <div className="flex flex-col w-full">
        <h2 className="italic text-3xl text-orange-700 mb-5 border-b-2 border-orange-700">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[624px] self-center cursor-pointer">
          {categories?.map((category) => (
            <Link
              key={category.name}
              className={`h-[162px]  rounded-lg shadow-md p-[22px_13px] ${category.background}`}
              href={`/category/${category.id}`}
            >
              <div
                className={`h-[84px] w-[90px] flex justify-center rounded-full bg-[${category.circleColor}]`}
              >
                {category.icon}
              </div>
              <p className="text-xs font-medium text-white mt-5 ml-10">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div> */}
      <Categories />
      {/* КНИГИ */}
      <div className="flex flex-col w-full">
        <h2 className="italic text-3xl text-orange-700 mb-5 border-b-2 border-orange-700">
          Books
        </h2>
        <div className="flex flex-wrap gap-3 w-full max-w-[624px] self-center  cursor-pointer">
          {books.map((book) => (
            <Link
              href={`/book/${book.id}`}
              key={book.name}
              className="flex flex-col relative h-[302px] max-h-[302px] min-w-[200px] w-[200px] grow border rounded-lg shadow-md pb-3"
            >
              <div className="absolute">
                <Image src={orangeAngle} alt="orange angle icon" />
                <p className="absolute text-[8px] top-1 left-2 text-white">
                  Best Seller
                </p>
              </div>
              <div className="flex justify-center">
                <Image src={bookImg} alt="book image" />
              </div>
              <div className="border-t" />
              <Image
                src={amazonChoiceImg}
                alt="amazon choice icon"
                className="relative -top-[3px] w-[84]"
              />
              <div className="flex flex-col justify-between grow px-[6px]">
                <p className="font-[Arial] text-[8px] line-clamp-3 overflow-hidden text-ellipsis">
                  {book.description}
                </p>
                <div className="flex gap-[6px]">
                  <div className="w-[40px] flex flex-col items-center ">
                    <p className="text-[8px] text-[#007185] pb-1">Paperback</p>
                    <p className="text-[18px] leading-[22px]">
                      ${costWithSale({ cost: book.cost, sale: book.sale })}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative flex items-center">
                      <Image src={redLabelIcon} alt="red label" />
                      <p className="absolute left-[6px] text-[8px] text-white">
                        Limited time deal
                      </p>
                    </div>
                    <p className="text-[#828282] text-[8px] mt-[6px]">
                      ${book.cost}
                      {book.sale ? ` (${book.sale}% off)` : null}
                    </p>
                  </div>
                </div>
                <Image
                  src={amazoncomImg}
                  className="self-center"
                  alt="book image"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
