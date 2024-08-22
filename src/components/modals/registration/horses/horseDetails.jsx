import { Row } from "react-bootstrap"
import ConfirmHorseProfile from "./profile";
import ConfirmOwnerDetails from "./ownerDetails";
import ConfirmIdentityDetails from "./identityDetails";
import ConfirmGradingDetails from "./gradingDetails";
import ConfirmAttachments from "../../../confirmAttachments";
import MemberPayment from "../../../payment/memberPayments";
import { NAV_SUB_ROUTES } from "../../../../utils/constants";
import { useParams } from "react-router-dom";
import ConfirmFileUpload from "../../../confirmFileUpload";
import { useEffect, useState } from "react";
const HorseDetails = ({data, setData}) => {
    const horse = {...data};
    const gradeDetails = {}
    horse?.horseGradingList.map(item => {
        const separateVal = item.grade.split(' - ');
        if(gradeDetails[separateVal[0]]) {
            gradeDetails[separateVal[0]].push(item.grade);
        } else {
            gradeDetails[separateVal[0]] = [item.grade];
        }
    });
    const [tempGradeDetails, setTempGradeDetails] = useState(gradeDetails)
    const updateFileDetails = (fileDetails) => {
        setData((prevData) => ({
            ...prevData,
            fileAttachment: [...prevData.fileAttachment, fileDetails]
        }));
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempGradeDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        setData({ ...horse, [name]: value })
    }
    const { reqType } = useParams();
    const isRequests = reqType === NAV_SUB_ROUTES.VIEW ? false : true;
    useEffect(() => {
        const gradeList = []
        for(let key in tempGradeDetails) {
            tempGradeDetails[key].forEach(element => {
                gradeList.push({
                    horseId: horse?.horseId,
                    disciplineName: key,
                    grade: element,
                    createdBy: "",
                    modifiedBy: ""
                })
            });
        }
        setData((prev) => {
            return {
                ...prev,
                horseGradingList: gradeList
            }
        })
    }, [tempGradeDetails])
    return (
        <Row>
            <ConfirmHorseProfile horse={horse} />
            <ConfirmOwnerDetails horse={horse} />
            <ConfirmIdentityDetails horse={horse} setData={setData} />
            <ConfirmGradingDetails tempGradeDetails={tempGradeDetails} handleChange={handleChange} horse={horse} />
            <ConfirmAttachments attachments={horse.fileAttachment} />
            { isRequests && (
                <ConfirmFileUpload updateFileDetails={updateFileDetails} attachments={horse.fileAttachment} attachType='horseAdmin' />) }
            <MemberPayment id={horse.horseId} isEntity={true} type='HORSE' />
        </Row>
    )
}

export default HorseDetails