import React from 'react'

function AddProduct() {
  return (
    <div><div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/main.css" />
    <div className="App">
     
      <div className="page-wrapper">
      
        <div className="content-area-wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="filter_wrapper  d-block d-sm-none">
                <div className="filet_left_content">
                  <div className="input-group">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII=" alt="search" /></span></div>
                    <input type="text" className="form-control input_modify" placeholder="Search" />
                  </div>
                </div>
              </div>
              <div className="card nav_pills_card nav_pills_card_new">
                <div className="card-body">
                  <div className="heading_wrapper heading_right_content">
                    <h1 className="head_title">Add Product</h1>
                    <div className="btn_wrapper"><button type="button" className="theme-btn btn-outline-secondary">Discard</button><button type="button" className="theme-btn theme-btn-primary">Save</button></div>
                  </div>
                  <ul className="nav nav-pills mb-0 nav_pills_wrapper" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation"><button className="nav-link active" id="pills-general-tab" data-toggle="pill" data-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">General</button></li>
                    <li className="nav-item" role="presentation"><button className="nav-link " id="pills-variation-tab" data-toggle="pill" data-target="#pills-variation" type="button" role="tab" aria-controls="pills-variation" aria-selected="false">Variation</button></li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Basic Info</div>
                        <div className="form-group"><label htmlFor="productName"><span className="text-danger">*</span> Product Name</label><input type="name" name="productName" className="form-control" id="productName" defaultValue /></div>
                        <div className="form-group"><label htmlFor="Description"><span className="text-danger">*</span> Description</label><textarea type="text" id="Description" className="form-control" name="description" rows={3} defaultValue={""} /></div>
                      </div>
                    </div>
                  </div>
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Pricing</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group"><label htmlFor="price"><span className="text-danger">*</span> Price</label><input type="text" name="price" className="form-control" id="price" defaultValue /></div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group"><label htmlFor="comparePrice"><span className="text-danger">*</span> Compare price</label><input type="text" name="comparePrice" className="form-control" id="comparePrice" defaultValue /></div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group"><label htmlFor=" costPerItem"><span className="text-danger">*</span> Cost per item</label><input type="text" name="costPerItem" className="form-control" id="costPerItem" defaultValue /></div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group"><label htmlFor="taxRate"><span className="text-danger">*</span> Tax rate</label><input type="text" name="taxRate" className="form-control" id="taxRate" defaultValue /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Organization</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="productName">Category</label>
                              <select className="form-control" id="productName">
                                <option value>Select</option>
                                <option value>Clothe</option>
                                <option value>Bags</option>
                                <option value>Shoes</option>
                                <option value>Watches</option>
                                <option value>Devices</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="Description">Tags</label>
                              <select className="form-control" id="productName">
                                <option value>Select</option>
                                <option value>Cotton</option>
                                <option value>Nike</option>
                                <option value>Sales</option>
                                <option value>Sports</option>
                                <option value>Outdoor</option>
                                <option value>Toys</option>
                                <option value>Hobbies</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade " id="pills-variation" role="tabpanel" aria-labelledby="pills-variation-tab">
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Variants</div>
                        <p>Add A Custome Variat Options For Your Product, Like Different Sizes Or Colors.</p>
                        <div className>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group"><label htmlFor=" productName"><span className="text-danger">*</span> Variant</label><input type="text" name="variant" className="form-control" id="productName" defaultValue /></div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group"><label htmlFor=" productName"><span className="text-danger">*</span> Price</label><input type="text" name="variantPrice" className="form-control" id="productName" defaultValue /></div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group"><label htmlFor=" productName"><span className="text-danger">*</span> Stock keeping unit</label><input type="text" name="variantPrice" className="form-control" id="productName" defaultValue /></div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group uploader-wrapper">
                          <label htmlFor="Description"><span className="text-danger">*</span> Upload Image</label>
                          <div className="uploader-wrapper-inner">
                            <img src="assets/images/thumbnails/picture.svg" alt="pictures" />
                            <input type="file" />
                            Click or drag file to upload
                          </div>
                        </div>
                        <div className="isMinus">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group"><label htmlFor=" productName"><span className="text-danger">*</span> Variant</label><input type="text" name="variant" className="form-control" id="productName" defaultValue /></div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group"><label htmlFor=" productName"><span className="text-danger">*</span> Price</label><input type="text" name="variantPrice" className="form-control" id="productName" defaultValue /></div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group"><label htmlFor=" productName"><span className="text-danger">*</span> Stock keeping unit</label><input type="text" name="variantPrice" className="form-control" id="productName" defaultValue /></div>
                            </div>
                          </div>
                          <span className="removeSpan">-</span>
                        </div>
                        <div className="form-group uploader-wrapper">
                          <label htmlFor="Description"><span className="text-danger">*</span> Upload Image</label>
                          <div className="uploader-wrapper-inner">
                            <img src="assets/images/thumbnails/picture.svg" alt="pictures" />
                            <input type="file" />
                            Click or drag file to upload
                          </div>
                        </div>
                        <button className="uploader-add-btne" type="button">Add field</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default AddProduct