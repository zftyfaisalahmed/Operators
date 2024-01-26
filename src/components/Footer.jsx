import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
            <NavLink href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"></svg>
            </NavLink>
            <span class="mb-3 mb-md-0 text-muted">&copy; 2024 Faisal Ahmed, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-1"><NavLink class="text-muted" target='_blank' to="https://www.instagram.com/zfty_faisalahmed/"><svg class="bi" width="24" height="24"></svg><i className='bi bi-instagram text-secondary'></i></NavLink></li>
                <li class="ms-1"><NavLink class="text-muted" target='_blank' to="https://www.linkedin.com/in/faisal-ahmed-ab18b3285/"><svg class="bi" width="24" height="24"></svg><i class="bi bi-linkedin text-secondary"></i></NavLink></li>
                <li class="ms-1"><NavLink class="text-muted" target='_blank' to="https://github.com/zftyfaisalahmed"><svg class="bi" width="24" height="24"></svg><i class="bi bi-github text-secondary"></i></NavLink></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer
