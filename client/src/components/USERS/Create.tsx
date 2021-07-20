import react from "react"
import formCss from "@/assets/css/form.module.scss";
import cardCss from "@/assets/css/card.module.scss";
import btnCss from "@/assets/css/btn.module.scss"
import { useInput } from "@/hooks/useInput";
export const CreateUser = () => {
    const [username, changeUsername] = useInput("");
    const [email, changeEmail] = useInput("");
    const [password, changePassword] = useInput("");
    return (
        <div className={`${cardCss.card} mt-16 max-w-xl z-10 font-serif`}>
            <form className={formCss.form}>
                <div className={formCss.title}>Sign Up</div>
                <label htmlFor="fusername">Username:</label>
                <input
                    value={username}
                    onChange={changeUsername}
                    type="text"
                    id="fusername"
                    name="username"
                    required
                />
                <label htmlFor="femail">Email:</label>
                <input
                    value={email}
                    onChange={changeEmail}
                    type="text"
                    id="femail"
                    name="email"
                    required
                />
                <label htmlFor="fpassword">Password:</label>
                <input
                    value={password}
                    onChange={changePassword}
                    type="password"
                    id="fpassword"
                    name="password"
                    required
                />
                <div className="text-center">
                    <button type="submit" className={`${btnCss.btn} bg-primary w-full mt-6`}>
                        Create an account
                    </button>
                </div>
            </form>
        </div>
    )
}




