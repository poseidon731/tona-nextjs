import React from "react"

const Numbers = () => {
    return (
        <div className="numbers text-center mb-80">
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<div className="num-items">
							<span className="icon-trophy"></span>
							<p className="counter">764</p>
							<h6>Awards Won</h6>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="num-items">
							<span className="icon-happy"></span>
							<p className="counter">1664</p>
							<h6>Happy Customers</h6>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="num-items">
							<span className="icon-layers"></span>
							<p className="counter">2964</p>
							<h6>Projects Done</h6>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="num-items">
							<span className="icon-camera"></span>
							<p className="counter">1564</p>
							<h6>Photos Made</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  };
  
  export default Numbers;
  