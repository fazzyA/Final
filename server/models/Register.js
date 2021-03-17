const mongoose = require('mongoose');
const registerSchema = mongoose.Schema({
    MRNo:{
        type: String
    },
        TokenNo: {
            type: Number, 
            required:[true, "TokenNo is missing"] 
        },
        RegistrationDate: {
            type: Date,
            default: new Date()
        },
        Name: {
            type: String, 
            required:[true, "Name is missing"] 
        },
        FatherOrHusband: {
            type: String, 
        },
        DOB: {
            type: Date,
        },
        Age: {
            type: Number, 
        },
        Gender: "",
        Religion: {
            type: String, 
        },
        District:{
            type: String, 
        },
        City: {
            type: String, 
        },
        Area: {
            type: String, 
        },
        HousNo: {
            type: String, 
       },
        Address: {
            type: String, 
        },
        CNIC: {
            type: Number, 
            // required:[true, "CNIC is missing"] 
        },
        Phone: {
            type: Number, 
            // required:[true, "Phone is missing"] 
        },
        OffPhone: {
            type: Number
        },
        Mobile: {
            type: Number
        },
        RefBy: {
            type: String, 
            // required:[true, "Ref is missing"] 
        },
        Remarks: {
            type: String, 
            // required:[true, "Remarks is missing"] 
        },
        IsRejected: {
            type: Boolean
        },
        IsZakat: {
            type: Boolean, 
            // required:[true, "IsRejected is missing"] 
        },
        IsPAFEmp: {
            type: Boolean
        },
        MonthlyConsLimit: {
            type: Number, 
            // required:[true, "MonthlyConsLimit is missing"] 
        },
        NOY: {
            type: Number, 
            // required:[true, "NOY is missing"] 
        },
        EmpID: {
            type: Number, 
            // required:[true, "EmpID is missing"] 
        },
        IsStaff:{
            type: Boolean
        },
    
})
const Register = mongoose.model('Register', registerSchema)
module.exports = Register