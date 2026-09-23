import { Backdrop } from './components/Backdrop'
import { Cursor } from './components/Cursor'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Marquee } from './components/Marquee'
import { Work } from './components/Work'
import { Stack } from './components/Stack'
import { Path } from './components/Path'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Backdrop />
      <Cursor />
      <Header />

      <main id="conteudo" className="page">
        <Hero />
        <About />
        <Marquee />
        <Work />
        <Stack />
        <Path />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
