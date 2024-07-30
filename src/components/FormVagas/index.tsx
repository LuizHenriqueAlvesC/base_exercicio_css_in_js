import { FormEvent, useState } from 'react'

import { BtnPesquisar, PesquisaSobre } from './styles'

type Props = {
    aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
    const [termo, setTermo] = useState<string>('')

    const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        aoPesquisar(termo.toLocaleLowerCase())
    }

    return (
        <PesquisaSobre onSubmit={aoEnviarForm}>
            <input
                placeholder="Front-end, fullstack, node, design"
                onChange={(e) => setTermo(e.target.value)}
                type="search"
            />
            <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
        </PesquisaSobre>
    )
}
export default FormVagas
