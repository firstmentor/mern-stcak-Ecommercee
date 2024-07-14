import React from 'react'
import Siderbar from '../Layouts/Siderbar'

function AddProduct() {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-2">
                        <Siderbar />
                    </div>

                    <div class="col-12 col-md-10">
                       
                        <div className="wrapper my-5">
                            <form className="shadow-lg" encType='multipart/form-data'>
                                <h1 className="mb-4">New Product</h1>

                                <div className="form-group">
                                    <label for="name_field">Name</label>
                                    <input type="text" id="name_field" className="form-control" value="" />
                                </div>

                                <div className="form-group">
                                    <label for="price_field">Price</label>
                                    <input type="text" id="price_field" className="form-control" value="" />
                                </div>

                                <div className="form-group">
                                    <label for="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8"></textarea>
                                </div>

                                <div className="form-group">
                                    <label for="category_field">Category</label>
                                    <select className="form-control" id="category_field">
                                        <option>Electronics</option>
                                        <option>Home</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="stock_field">Stock</label>
                                    <input type="number" id="stock_field" className="form-control" value="" />
                                </div>

                                <div className="form-group">
                                    <label for="seller_field">Seller Name</label>
                                    <input type="text" id="seller_field" className="form-control" value="" />
                                </div>

                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input type='file' name='product_images' className='custom-file-input' id='customFile' multiple />
                                        <label className='custom-file-label' for='customFile'>
                                            Choose Images
                                        </label>
                                    </div>
                                </div>


                                <button id="login_button" type="submit" className="btn btn-block py-3">
                                    CREATE
                                </button>

                            </form>
                        </div>



                    </div>
                </div>
            </div>



        </>
    )
}

export default AddProduct