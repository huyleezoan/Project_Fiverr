import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getThongTinChiTietNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction'
import './DetailPerson.css'
import InforJob from './InforJob'
import InforUser from './InforUser'
export default function DetailPerson(props) {
    const {detailPerson} = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getThongTinChiTietNguoiDung(props.match.params.id))
       
    }, [])
    console.log('detailPerson',detailPerson)
    return (
        <div className="container_all detailPerson ">
        123
        <div className="row mt-5">
            <div className="col-4">
                {/* <InforUser user={user} /> */}
            </div>
            <div className="col-8">
                {/* <InforJob job={job} /> */}
                
            </div>

        </div>
    </div>
    )
}
