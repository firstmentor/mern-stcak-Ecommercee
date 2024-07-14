import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../redux/actions/ProductAction';
import { addItemsToCart } from '../../redux/actions/CartAction';

function ProductDetails() {

    const [quantity, setQuantity] = useState(1)

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.pDetail)
    console.log(products)

    const increaseQty = () => {
        if (products.stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);

    }

    const decreaseQty = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    }

    const addToCartHandler = () => {
        //alert('Add to cart')
        dispatch(addItemsToCart(id, quantity))
    }

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch])


    return (
        <div>
            {/* breadcrumb start */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <nav className="breadcrumb bg-white mb-3 p-3">
                            <a href="#" className="breadcrumb-item text-dark aa">Home</a>
                            <a href="#" className="breadcrumb-item text-dark aa">Shop</a>
                            <span className="breadcrumb-item active">Shop details</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* shop details start */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-4">
                        <div id="sd" className="carousel slide" data-bs-target="#sd" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                    <img className="w-100" src={products?.images?.url} alt="" />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img className="w-100" src={products?.images?.url} alt="" />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img className="w-100" src={products?.images?.url} alt="" />
                                </div>
                            </div>
                            <a href="#sd" className="carousel-control-prev" data-bs-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a href="#sd" className="carousel-control-next" data-bs-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 h-auto mb-4">
                        <div className="h-100 bg-white px-4 pt-3">
                            <h3>{products.name}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-warning mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">({products.stock} in Stock)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">₹{products.price}</h3>
                            <p className="mb-4">{products.description}</p>
                            <div className=" mb-3">
                                <strong className="text-dark me-3">Sizes:</strong>
                                <form className="d-flex">
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                        <label className="custom-control-label">XS</label>
                                    </div>
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                        <label className="custom-control-label" >S</label>
                                    </div>
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                        <label className="custom-control-label">M</label>
                                    </div>
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                        <label className="custom-control-label">L</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                        <label className="custom-control-label">XL</label>
                                    </div>
                                </form>
                            </div>
                            <div className=" mb-4">
                                <strong className="text-dark mr-3">Colors:</strong>
                                <form className="d-flex">
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                        <label className="custom-control-label">Black</label>
                                    </div>
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                        <label className="custom-control-label">White</label>
                                    </div>
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                        <label className="custom-control-label" >Red</label>
                                    </div>
                                    <div className="custom-control me-2 custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                        <label className="custom-control-label" >Blue</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                        <label className="custom-control-label">Green</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity me-3" style={{ width: '130px' }}>
                                    <div className="input-group-btn">
                                        <button onClick={decreaseQty} className="btn btn-warning btn-minus rounded-0">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" name='quantity' value={quantity} className="form-control bg-light border-0 text-center" />
                                    <div className="input-group-btn">
                                        <button onClick={increaseQty} className="btn btn-warning rounded-0 btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <Link to='/cart'>
                                    <button onClick={addToCartHandler} className="btn btn-warning px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                                        Cart</button>
                                </Link>

                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">Share on:</strong>
                                <div className="d-inline-flex">
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="text-dark px-2" href="">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row px-xl-5 my-5">
                    <div className="col">
                        <div className="bg-white p-5">
                            <div className="nav nav-tabs mb-4">
                                <a href="#tab-pane1" className="nav-item nav-link text-dark active"
                                    data-bs-toggle="tab">Description</a>
                                <a href="#tab-pane2" className="nav-item nav-link text-dark" data-bs-toggle="tab">Information</a>
                                <a href="#tab-pane3" className="nav-item nav-link text-dark" data-bs-toggle="tab">Reviews(0)</a>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="tab-pane1">
                                    <h3 className="mb-3">Product Description</h3>
                                    <p>{products.description}</p>
                                </div>
                                <div className="tab-pane fade" id="tab-pane2">
                                    <h3 className="mb-3">Additional Information</h3>
                                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam
                                        invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                                        consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum
                                        diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam
                                        sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor
                                        aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam
                                        kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="mb-4">1 review for Product Name</h4>
                                            <div className="media mb-4">
                                                <img src="image/user.jpg" alt="Image" className="img-fluid me-3 mt-1"
                                                    style={{ width: '45px' }} />
                                                <div className="media-body">
                                                    <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                    <div className="text-warning mb-2">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam
                                                        ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod
                                                        ipsum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className="mb-4">Leave a review</h4>
                                            <small>Your email address will not be published. Required fields are marked
                                                *</small>
                                            <div className="d-flex my-3">
                                                <p className="mb-0 me-2">Your Rating * :</p>
                                                <div className="text-warning">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <label>Your Review *</label>
                                                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label>Your Name *</label>
                                                    <input type="text" className="form-control" id="name" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Your Email *</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                                <div className="form-group mb-0 mt-3">
                                                    <input type="submit" value="Leave Your Review"
                                                        className="btn btn-warning rounded-0 px-3" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h2 className="text-uppercase mx-xl-5">You may also like
                    <hr />
                </h2>
                <div className="row px-xl-5">
                    <div className="col-lg-3 mb-3">
                        <div className="card ">
                            <img className="w-100 efz" src="image/product-1.jpg" alt="" />
                            <div className="card-body bg-light">
                                <h5 className="text-center aa">Product name goes Here</h5>
                                <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card ">
                            <img className="w-100 efz" src="image/product-2.jpg" alt="" />
                            <div className="card-body bg-light">
                                <h5 className="text-center aa">Product name goes Here</h5>
                                <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card ">
                            <img className="w-100 efz" src="image/product-3.jpg" alt="" />
                            <div className="card-body bg-light">
                                <h5 className="text-center aa">Product name goes Here</h5>
                                <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card ">
                            <img className="w-100 efz" src="image/product-4.jpg" alt="" />
                            <div className="card-body bg-light">
                                <h5 className="text-center aa">Product name goes Here</h5>
                                <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small className="fa fa-star text-warning me-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails