import { FormEvent } from "react"
import formCss from "@/assets/css/form.module.scss";
import cardCss from "@/assets/css/card.module.scss";
import btnCss from "@/assets/css/btn.module.scss"
import { useInput } from "@/hooks/useInput";
import { apiUser } from "@/store/user/api";
import { useDispatch } from "react-redux";
import { signUp } from "@/store/user/actions";
export const CreateUser = () => {
    const dispatch = useDispatch();
    const [username, changeUsername] = useInput("");
    const [email, changeEmail] = useInput("");
    const [password, changePassword] = useInput("");
    const submit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        let user = { username, email, password }
        dispatch(signUp(user))
        let response = await apiUser.create({ username, email, password })
        console.log(response.data);
        
    }
    return (
        <div className={`${cardCss.card} mt-16 max-w-xl z-10 font-serif`}>
            <form className={formCss.form} onSubmit={(evt) => submit(evt)}>
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




