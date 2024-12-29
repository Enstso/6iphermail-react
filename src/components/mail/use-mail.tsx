import { atom, useAtom } from "jotai"
import {Mail,mails} from "@/components/mail/data"


type config ={
    selected: Mail["id"] | null
}

const configAtom = atom<config>({selected:mails[0].id})

export function useMail(){
    return useAtom(configAtom)
}