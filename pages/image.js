import axios from "axios";
import Image from 'next/image';

export default function image({itemList}) {
  console.log('itemList',itemList.slice(0,6))
  return (
    <>
      <h1>This is Image Page</h1>
      {itemList.slice(0,6).map((item)=>(
        <div key={item.id}>
          {item.id}
          <Image
            src={item.image_link}
            alt='test'
            width='300'
            height= '300'
          />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const apiUrlFemaleSlide =
    "https://api.lincjuice.com/items/random?product_gender=female";
  const resFemaleSlide = await axios.get(apiUrlFemaleSlide);
  const dataFemaleSlide = Object.values(resFemaleSlide.data).slice(0, 6);

  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
  const res = await axios.get(apiUrl);
  const data = res.data


  return {
    props: {
      itemList: data
    },
    //10분 마다 re-generate실행
    revalidate: 600,
  };
}
