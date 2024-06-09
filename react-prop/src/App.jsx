import Nav from './component/Nav'
import './App.css'
import Footer from './component/Footer'
import Cards from './component/Cards'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'


function App() {

  let p1 = "Lorem ipsum dolor"
  let p2 = "Welcome to the Programming World"
  let p3 = "Welcome to JS Bootcamp"
  let p4 = "Welcome to the Python"
  let p5 = "Welcome to The Java"

  let arr1 = ["Lorem", "dolor", "coding"]
  let arr2 = ["Java", "Python", "JS"]
  let arr3 = ["React", "Bootstrap", "Taliwand"]
  return (
    <>
     <Nav/>
      <div className='MainCards'>
        <Cards img={img1} p={p1} list={arr1}/>
        <Cards img={img2} p={p2} list={arr2}/>
        <Cards img={img3} p={p3} list={arr3}/>

        <Cards img={img2} p={p1} list={arr1}/>
        <Cards img={img4} p={p2} list={arr2}/>
        {/* <Cards img={img3} p={p3} list={arr3}/> */}
      </div>

     <Footer/>
    </>
  )
}

export default App
