import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
    classname,
    children
}: {
    classname?: string
    children: ReactNode
}) => {
    return (
        <div className={cn('mx-auto w-full max-w-screen-lg px-5', classname)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper