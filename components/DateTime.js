function DateTime({iso}) {

    return (<>{`${iso.split('-')[0]}년 ${iso.split('-')[1]}월 ${iso.split('-')[2].split('T')[0]}일 ${iso.split('T')[1].split(':')[0]}시 ${iso.split(':')[1]}분`}</>)
}
  
export default DateTime