import React from 'react'
import { Link } from 'react-router-dom'

function Siderbar() {
    return (
        <>


            <div class="sidebar-wrapper">
                <nav id="sidebar">
                    <ul class="list-unstyled components">
                        <li>
                            <Link to="/dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</Link>
                        </li>

                        <li>
                            <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                                class="fab fa-product-hunt"></i> Products</a>
                            <ul class="collapse list-unstyled" id="productSubmenu">
                                <li>
                                    <a href="#"><i class="fas fa-clipboard-list"></i> All</a>
                                </li>

                                <li>
                                    <Link to="/admin/addProduct"><i class="fas fa-plus"></i> Create</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#"><i class="fas fa-shopping-basket"></i> Orders</a>
                        </li>

                        <li>
                            <a href="#"><i class="fas fa-users"></i> Users</a>
                        </li>

                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Siderbar