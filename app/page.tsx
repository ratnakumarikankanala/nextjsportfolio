"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const  Home=()=> {
  const router =useRouter();

  const gotoProjects =()=>{
    router.push("/projects")

  }
  return (
    <div className="flex  flex-col justify-center items-center h-screen">
        <h1>Hi, I am Ratnakumari</h1>
        <p>I am a front end developer based in hyderbad,i will help you build responsive web applications.</p>
        <div className="flex gap-2">
          <Link href="/contact"  className="bg-blue-700 text-white p-1 rounded-sm mt-2">Contact Now</Link>
          <button className="bg-blue-700 text-white mt-2 p-1 rounded-sm" onClick={gotoProjects}>My Projects</button>
          </div>
          
    </div>
  );
}
export default Home
