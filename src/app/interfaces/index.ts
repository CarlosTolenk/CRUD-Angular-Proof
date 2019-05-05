export interface Schedule {
    _id:string,
    name:string,
    phone:string,
    mobile?:string
}

export interface ScheduleForm {
    _id:string,
    nameUser:string,
    phoneUser:string,
    mobileUser?:string
}