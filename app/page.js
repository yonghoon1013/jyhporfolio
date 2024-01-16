import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/app/components/header/Header';
import Main from '@/app/pages/main/page';

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Main />
    </>
  )
}
