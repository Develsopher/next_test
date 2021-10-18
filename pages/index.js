import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Test from '../src/components/Test';

export default function Home() {
  return (
    <div>안녕하세요</div>
  )
}
Home.getLayout = function getLayout(page){
  return(
    <Test>
      {page}
    </Test>
  )
}