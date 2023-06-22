import React from 'react'


export default function IconButton({btnFucntion,type,BtnId,BtnClasses,iconClass,iconId,name,condition,BtnText}) {
  return (
    <>
     <button onClick={btnFucntion} type={type} id={BtnId} className={BtnClasses}>
        <span className={iconClass}><ion-icon id={iconId} name={name} /></span>{condition || BtnText}</button>
    </>
  )
}
