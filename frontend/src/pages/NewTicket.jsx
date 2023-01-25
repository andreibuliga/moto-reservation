import { useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { InlineWidget } from "react-calendly";

function NewTicket() {
	const { user } = useSelector((state) => state.auth);
	const [name] = useState(user.name.toString().replace(/\\"/g, '"'));
	const [email] = useState(user.email.toString().replace(/\\"/g, '"'));

	const [product, setProduct] = useState("motocicleta");

	return (
		<>
			<BackButton />
			<section className="heading">
				<h1>Creaza o rezervare noua</h1>
				<p>Completati formularul de mai jos</p>
			</section>

			<section className="form" style={{ paddingBottom: "200px" }}>
				<form>
					<div className="form-group">
						<label htmlFor="product">Model ATV</label>
						<select
							name="product"
							id="product"
							value={product}
							onChange={(e) => setProduct(e.target.value)}
						>
							<option value="motocicleta">
								Suzuki DL 650 XT V-STORM ABS
							</option>
							<option value="motocross">
								KTM 300 EXC TPI Six Days
							</option>
							<option value="atv">
								Can-Am OUTLANDER MAX 650 XU PLUS T
							</option>
							<option value="bicicleta">
								Descoperă orașul cu Neuzer e-City Zagon
							</option>
						</select>
					</div>
					<div styles={{ position: "relative" }}>
						{product === "motocicleta" && (
							<div
								style={{
									position: "relative",
									border: "1px solid #e6e6e6",
									borderRadius: "10px",
									padding: "5px",
								}}
							>
								<div
									style={{
										position: "absolute",
										backgroundColor: "white",
										width: "200px",
										height: "200px",
										right: "0",
										top: "0",
										zIndex: 1,
										borderRadius: "10px !important",
									}}
								></div>
								<InlineWidget
									className="calendly"
									url="https://calendly.com/x-moto-rezervari/motocicleta"
									prefill={{
										email: email,
										name: name,
									}}
									style={{ zIndex: 0 }}
								/>
							</div>
						)}
						{product === "motocross" && (
							<div
								style={{
									position: "relative",
									border: "1px solid #e6e6e6",
									borderRadius: "10px",
									padding: "5px",
								}}
							>
								<div
									style={{
										position: "absolute",
										backgroundColor: "white",
										width: "200px",
										height: "200px",
										right: "0",
										top: "0",
										zIndex: 1,
										borderRadius: "10px !important",
									}}
								></div>
								<InlineWidget
									className="calendly"
									url="https://calendly.com/x-moto-rezervari/motocross"
									prefill={{
										email: { email },
										name: { name },
									}}
									style={{ zIndex: 0 }}
								/>
							</div>
						)}
						{product === "atv" && (
							<div
								style={{
									position: "relative",
									border: "1px solid #e6e6e6 !important",
									borderRadius: "10px !important",
									padding: "5px",
								}}
							>
								<div
									style={{
										position: "absolute",
										backgroundColor: "white",
										width: "200px",
										height: "200px",
										right: "0",
										top: "0",
										zIndex: 1,
										borderRadius: "10px !important",
									}}
								></div>
								<InlineWidget
									className="calendly"
									url="https://calendly.com/x-moto-rezervari/atv"
									prefill={{
										email: { email },
										name: { name },
									}}
									style={{ zIndex: 0 }}
								/>
							</div>
						)}
						{product === "bicicleta" && (
							<div
								style={{
									position: "relative",
									border: "1px solid #e6e6e6 !important",
									borderRadius: "10px !important",
									padding: "5px",
								}}
							>
								<div
									style={{
										position: "absolute",
										backgroundColor: "white",
										width: "200px",
										height: "200px",
										right: "0",
										top: "0",
										zIndex: 1,
										borderRadius: "10px !important",
									}}
								></div>
								<InlineWidget
									className="calendly"
									url="https://calendly.com/x-moto-rezervari/bicicleta"
									prefill={{
										email: { email },
										name: { name },
									}}
									style={{ zIndex: 0 }}
								/>
							</div>
						)}
					</div>
				</form>
			</section>
		</>
	);
}

export default NewTicket;
