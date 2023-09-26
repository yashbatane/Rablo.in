import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getNofications } from '../../../../store/slices/notificationSlice';

const Notications = () => {
    const data = useSelector((state) => state.notifications);
    const notifications = data.notifications
    console.log(notifications)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getNofications());
    }, []);
  if (data.loading) {
    return <h2>Loading...</h2>;
  }
  if (data.error != null) {
    return <h3>{data.error}</h3>;
  }
  return (
   <>
   {
    notifications.map((notification)=>{
        return <div key={notification._id}>{notification.message}</div>;
    })
   }
   </>
  )
}

export default Notications
