// import React from "react"

import { Route, Routes } from "react-router-dom"

interface Props {
    // children: React.ReactNode | [React.ReactNode]
    children: JSX.Element[] | JSX.Element
}

const routesWithnotFount = ({ children } : Props) => {
  return (
    <Routes>
        {children}
        <Route path="*" element={<div>Not Found</div>}/>
    </Routes>
  )
}

export default routesWithnotFount