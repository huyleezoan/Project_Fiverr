import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getThongTinChiTietNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction'
import { domain, http } from '../../../util/setting'
import './DetailPerson.css'
import InforJob from './InforJob'
import InforUser from './InforUser'
export default function DetailPerson(props) {
    const {detailPerson} = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer)
    const [job, setjob] = useState([])
    const dispatch = useDispatch();
    const getJob = async (id) => {
        try {
            await http.get(`${domain}/api/users/${id}`).then(
                (result) => {
                    console.log('result',result.data);
                    setjob(result.data)
                }
            )
        } catch (err) {
            console.log('messs', err);
        }
    }
    useEffect(() => {
        dispatch(getThongTinChiTietNguoiDung(props.match.params.id))
    }, [])
    useEffect(() => {
        console.log("course: ", detailPerson);
        
        // getUser(detailCourse.userCreated)
        console.log('didmout update');
    }, [detailPerson]);
   
    return (
        <div className="container_all detailPerson ">
        <div className="row mt-5">
            <div className="col-4">
                <InforUser user={detailPerson} />
            </div>
            <div className="col-8">
                {/* <InforJob job={job} /> */}
                
            </div>

        </div>
    </div>
    )
}
