import navbarCss from "@/assets/css/navbar.module.scss"
import dropdownCss from "@/assets/css/dropdown.module.scss"
import { useAppSelector } from "@/hooks/store";
import { Link } from "react-router-dom"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navbar = () => {
    const user = useAppSelector((state) => state.user.current);
    return (<nav className={`${navbarCss.nav}`}>
        <ul className="flex text-white items-center h-full w-full whitespace-nowrap">
            <li className="opacity-75 hover:opacity-100">
                <Link to="/">Home</Link>
            </li>
            <li className="opacity-75 hover:opacity-100">
                <Link to="/lectures">Lectures</Link>
            </li>
            <li className="w-full">

            </li>
            {
                !user ? (
                    <>
                        <li className="opacity-75 hover:opacity-100">
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li className="opacity-75 hover:opacity-100">
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                ) : (
                    <li className={`${dropdownCss.dropdown} opacity-75 hover:opacity-100`}>
                        <div className={navbarCss.navLink}>
                            {user?.username}
                            <FontAwesomeIcon className="mx-2" icon={faCaretDown} />
                        </div>
                        <ul className={`${dropdownCss.dropdownContent}`}>
                            <li className={navbarCss.navLink}>Log Out</li>
                        </ul>
                    </li>
                )
            }

        </ul>
    </nav>)
}