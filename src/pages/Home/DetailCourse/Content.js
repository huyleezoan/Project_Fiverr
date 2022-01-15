import React from 'react'

export default function Content(props) {
    console.log('props',props)
    return (
        <div>
            <h5 className="row">
                <p className="col-8">{props.value.name}</p>
                <div className="col-4">
                    <p className="price text-right">{`US$${props.value.price}`}</p>
                </div>
            </h5>
            <div>
                <p>I will build 1 pages professional and Attractive WIX website.</p>

                <article>
                    <div className="additional-info row">
                        <div className="delivery-wrapper col-5">
                            <span className="lFICM06 delivery-icon" aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" /><path d="M9 4H7v5h5V7H9V4z" /></svg>
                            </span>
                            <b className="delivery">{`${props.value.day} Day Delivery`}</b>
                        </div>
                        <div className="revisions-wrapper col-6">
                            <span className="" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z" />
                                <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z" />
                            </svg>
                            </span>
                            <b className="revisions">Unlimited Revisions</b>
                        </div>
                    </div>
                    <ul className="features mt-3">
                        <li className="feature">
                            <span className=" feature-check-icon" aria-hidden="true" style={{ width: 16, height: 16 }}>
                                <svg width={11} height={9} viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                                </svg>
                            </span>{`${props.value.page} Page/Screen`}</li>
                    </ul>
                    <button class="btn btn-success btn-lg col-12">{`Continue (US$${props.value.price})`}</button>
                    <p className="text-center mt-4 mb-0 text">Compare Packages</p>
                </article>
            </div>

        </div>
    )
}
