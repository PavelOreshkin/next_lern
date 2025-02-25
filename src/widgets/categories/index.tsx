import { memo, use, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import categoryIcon1 from '@/public/icons/category1.svg';
import categoryIcon2 from '@/public/icons/category2.svg';
import categoryIcon3 from '@/public/icons/category3.svg';
import categoryIcon4 from '@/public/icons/category4.svg';
import categoryIcon5 from '@/public/icons/category5.svg';
import orangeAngle from '@/public/icons/orange_angle.svg';
import bookImg from '@/public/images/book.svg';
import amazonChoiceImg from '@/public/images/amazonChoise.jpg';
import amazoncomImg from '@/public/images/amazoncom.svg';
import redLabelIcon from '@/public/icons/red_label.svg';
import mainBookImg from '@/public/images/mainBook.jpg';
import starIcon from '@/public/icons/star.svg';
import backgroundBookImg from '@/public/images/backgroundBook.png';

const categoriesMock = [
  {
    id: '1',
    name: 'Coloring Books',
    background: 'bg-gradient-to-tl from-[#FAD961] to-[#F76B1C]',
    circleColor: '#F76E1E',
    icon: <Image src={categoryIcon1} alt="Coloring Books category" />,
  },
  {
    id: '2',
    name: 'Puzzle Books',
    background: 'bg-gradient-to-br from-[#6253E1] to-[#04BEFE]',
    circleColor: '#07BBFD',
    icon: <Image src={categoryIcon2} alt="Puzzle Books category" />,
  },
  {
    id: '3',
    name: 'Education Books',
    background: 'bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]',
    circleColor: '#7468F0',
    icon: <Image src={categoryIcon3} alt="Education Books category" />,
  },
  {
    id: '4',
    name: 'Planning Books',
    background: 'bg-gradient-to-br from-[#6B73FF] to-[#000DFF]',
    circleColor: '#030FFF',
    icon: <Image src={categoryIcon4} alt="Planning Books category" />,
  },
  {
    id: '5',
    name: 'Gifts Books',
    background: 'bg-gradient-to-br from-[#EC8C69] to-[#FA7199]',
    circleColor: '#D8597E',
    icon: <Image src={categoryIcon5} alt="Gifts Books category" />,
  },
];

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

const Categories = () => {
  // const Categories = ({ categories }) => {
  // console.log("categories: ", categories);
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    fetchCategories().then((res) => {
      console.log('res: ', res);
      setCategories(res);
    });
  }, []);

  // const xxx = use(fetchCategories());
  // console.log("xxx: ", xxx);
  // const categories = [];
  return (
    <div className="flex flex-col w-full">
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
    </div>
  );
};

export default memo(Categories);
