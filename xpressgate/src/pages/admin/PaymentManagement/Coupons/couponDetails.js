import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { deleteCoupon, getAllCoupons, getCouponById, updateCoupon } from '../../../../common/admin/admin_api';
import RouterPath from '../../../../common/constants/path/routerPath';

export const CouponDetails = () => {

    const location = useLocation();

    const navigate = useNavigate()




    const [coupon, setCoupons] = useState(location?.state?.coupon);
    const [allCoupons, setAllCoupons] = useState();
    const [currentPage, setCurrentPage] = useState(1);



    useEffect(() => {
        async function getCoupon() {
            const res = await getCouponById(location.state.coupon?.id);

        }

        getCoupon();

    }, [])

    const handleDelete = async () => {
        console.log(coupon);
        const res = await deleteCoupon(coupon.id)
        console.log(res)
        if (res && res.data?.status_code == 200) {
            navigate(RouterPath.COUPONS_LIST)
        }
    }

    const toggleActive = async () => {
        coupon.status = coupon.status == 1 ? 0 : 1;
        setCoupons(coupon);
        const res = await updateCoupon(coupon)
        console.log(coupon)
        if (res && res.data?.status_code == 200) {
            navigate(RouterPath.COUPONS_LIST)
        }
    }

    return (

        <>
            {!coupon && <Navigate to={RouterPath.COUPONS_LIST} />}
            {coupon &&
                <div>
                    <div className='page-label'>
                        <label>Coupon Details</label>
                    </div>
                    <div>
                        <div className="trans-bg-container">
                            <div>
                                <p className='h3 bold'><b>Coupon Details</b></p>
                                <div className='d-flex justify-content-end mr-5'><button onClick={toggleActive} className={`${coupon?.status == 1 ? 'highlight-active' : 'highlight-inactive'} p-2 px-3`} ><span className={`${coupon.status == 1 ? 'dot' : 'dot-inactive'}`}></span>{coupon.status == 1 ? 'Active' : 'Inactive'}</button></div>
                            </div>
                            <p className='blue-bg d-inline-block p-4 h3'>{coupon.code || "n/a"}</p>
                            <p className='h3 bold mb-5'><b>{coupon.name || "n/a"}</b></p>
                            <p className='bg-light-green-rounded px-4 h4'>Amount: {coupon.amount}</p>
                            <p className='h5 text-center px-5 my-4'><b>{coupon.description || "n/a"}</b></p>
                            <button type='button' className='btn btn-danger my-5' onClick={() => handleDelete()}>Delete Coupon</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}
