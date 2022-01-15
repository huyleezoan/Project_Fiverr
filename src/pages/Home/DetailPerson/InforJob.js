import React from 'react'

export default function InforJob(props) {
    const {job} = props
    console.log('job',job)
    return (
        <div>
            <div className="card w-100">
                <div className="card-body d-flex justify-content-between">

                    <p className="card-text">It seems that you don't have any active Gigs. Get selling!</p>
                    <a href="#" className="btn btn-primary">Create a New Gig</a>
                </div>
            </div>
            <div className="card mt-3 w-100">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-success mr-4">View Detail</button>
                                <button className="btn btn-success mr-4">Edit</button>
                                <button type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
