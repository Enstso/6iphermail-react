import { Mail } from "@/components/mail/mail";
import {accounts, mails} from "@/components/mail/data"
import {Cookies} from "react-cookie";

export default function MailPage(){
    const cookies = new Cookies();
    const layout = cookies.get("react-resizable-panels:layout")
    const collapsed = cookies.get("react-resizable-panels:collapsed")
  console.log(layout)
  console.log(collapsed)
    const defaultLayout = layout ? layout.value : undefined
    const defaultCollapsed = collapsed ? collapsed.value: undefined
  
    return (
      <>
        <div className="md:hidden">
          <img
            src="/examples/mail-dark.png"
            width={1280}
            height={727}
            alt="Mail"
            className="hidden dark:block"
          />
          <img
            src="/examples/mail-light.png"
            width={1280}
            height={727}
            alt="Mail"
            className="block dark:hidden"
          />
        </div>
        <div className="hidden flex-col md:flex">
          <Mail
            accounts={accounts}
            mails={mails}
            defaultLayout={defaultLayout}
            defaultCollapsed={defaultCollapsed}
            navCollapsedSize={4}
          />
        </div>
      </>
    )
}