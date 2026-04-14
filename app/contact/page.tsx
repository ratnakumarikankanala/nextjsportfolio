import Link from "next/link"

const Contact =()=>{
    return(<div className="p-4">
        <h1 className="text-blue-500 text-2xl text-semibold  ">Contact Information</h1>
        <p className="mb-2">you can reach out any one of these following....</p>
        <ul>
            <li>Ph numer: 7661892643</li>
            <li>E-mail: ratnakumarikankanala09@gmail.com</li>
            <li> Linkeidn : <Link href="https://www.linkedin.com/in/ratnakumari-kankanala-25b5143aa" className="text-blue-400">https://www.linkedin.com/in/ratnakumari-kankanala-25b5143aa</Link> </li>
        </ul>
    </div>)
}
export default Contact