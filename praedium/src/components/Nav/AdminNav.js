import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-sm fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="/admin">REALESTATE</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                
            </ul>
                <button class="btn btn-outline-primary rounded-4" type="button"  aria-expanded="false">
                    Login
                </button>
        </div>
    </div>
</nav></div>
  )
}

export default AdminNav