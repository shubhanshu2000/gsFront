import Form from "./Form"
import bg from "../assets/bg.jpeg"

const Home =() => {
  return (
    <>
      <main>
        <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-no-repeat bg-center h-screen font-poppins flex justify-center items-center ">
          <Form/>
        </div>
      </main>
    </>
  )
}
export default Home