import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Edit } from '../pages/Edit'
import { New } from '../pages/New'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
