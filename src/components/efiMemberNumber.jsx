import { useEffect, useState } from "react"
import { getClubByUser } from "../services/apiService";

export default function EFIMemberNumber({userId, type}) {
    const [memberNumber, setMemberNumber] = useState();
    const getMemberFullInfo = async() => {
        const resp = await getClubByUser(type, userId)
        const {efiMemberNumber} = resp.data;
        setMemberNumber(efiMemberNumber);
    }
    useEffect(()=>{
        getMemberFullInfo();
    }, [userId])
    return (
        <h6 className="text-muted">{memberNumber}</h6>
    )
} 