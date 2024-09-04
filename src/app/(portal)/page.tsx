import Image from 'next/image'
import DemoPage from '../(components)/table/page'

export default function Home() {
  return <div className='container max-w-screen-2xl flex flex-col gap-7 justify-center items-center py-6'>
    <h1>Home</h1>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    <DemoPage />
  </div>
}
