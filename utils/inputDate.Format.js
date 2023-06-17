export const inputDateFormat = (input)=>{
const formatDate=new Date(Date(input));
const yyyy = formatDate.getFullYear();
let mm = formatDate.getMonth() + 1; 
let dd = formatDate.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const final = yyyy + '-' + mm + '-' + dd;
return final
}