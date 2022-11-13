
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FatalError} from "next/dist/lib/fatal-error";



export interface InputProps extends  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FatalError;
}
