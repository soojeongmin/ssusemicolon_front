import { ResultContainer } from "../../container/Admin/Result"
import Header from "../../container/Header"

export const RegisterResult = () => {
    return <>
        <Header/>
        <ResultContainer type={'REGISTER'}/>
    </>
}

export const ModifyResult = () => {
    return <>
        <Header/>
        <ResultContainer type={'MODIFY'}/>
    </>
}

export const DeleteResult = () => {
    return <>
        <Header/>
        <ResultContainer type={'DELETE'}/>
    </>
}