'use client'
import { useFormStatus } from "react-dom";


type props = {
    text: string;
}

export const SubmitButton = ({text}: props) => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className={`bg-black dark:bg-white p-2 rounded-xl text-white dark:text-black`}
        >
            {pending ? "Loading..." : text}
        </button>
    )
}