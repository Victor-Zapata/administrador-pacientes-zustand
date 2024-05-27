import { Pacient } from "../types"

export type PacientDetailProps = {
    pacient: Pacient
}
const PacientDetail = ({ pacient }: PacientDetailProps) => {
    return (
        <div>PacientDetail</div>
    )
}

export default PacientDetail