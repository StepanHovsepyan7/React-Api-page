import { Link } from "react-router-dom"

export default function Header({ inpValue, setValue }) {

    return (

        <div className="flex items-center text-black bg-white justify-between p-2 fixed w-full header">
            <div className="text-[20px] flex-1">
                <Link to={'/'}>Logo</Link>
            </div>

            <nav className="flex-1 flex justify-center">
                <ul className="flex gap-[20px]">
                    <li className="text-[20px]">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="text-[20px]">
                        <Link to={'/products'}>Products</Link>
                    </li>
                </ul>
            </nav>


            <div className="flex-1 flex justify-end">
                <input value={inpValue} onChange={(e) => setValue(e.target.value)} type="text" className="inp" placeholder="Search item..." />
            </div>
        </div>
    )
}
